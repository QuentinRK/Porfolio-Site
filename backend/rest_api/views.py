from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from .serializers import ProjectSerializer, AboutSerializer, ContactSerializer
from .models import Project, AboutMe
from django.core.mail import EmailMessage, send_mail
import traceback

# Create your views here.
@api_view(['GET', 'POST', 'DELETE'])
@permission_classes([IsAuthenticated])
def projects(request):
    if request.method == 'GET':
        projects = Project.objects.all()
        print('Get Request')
        title = request.query_params.get('title', None)
        if title is not None:
            projects = projects.filter(title__icontains=title)
        
        projects_serializer = ProjectSerializer(projects, many=True)
        return JsonResponse(projects_serializer.data, safe=False)
        # 'safe=False' for objects serialization
    
    elif request.method == 'POST':
        print('Post Request')
        project_data = JSONParser().parse(request)
        project_serializer = ProjectSerializer(data=project_data)
        if project_serializer.is_valid():
            project_serializer.save()
            return JsonResponse(project_serializer.data, status=status.HTTP_201_CREATED) 
        
        return JsonResponse(project_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
    elif request.method == 'DELETE':
        count = Project.objects.all().delete()
        return JsonResponse({'message': 'Projects was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def about_me(request):
    if request.method == "GET":
        bio = AboutMe.objects.all()
        print('Get Request')
        title = request.query_params.get('title', None)
        if title is not None:
            bio = bio.filter(title__icontains=title)
        
        bio_serializer = AboutSerializer(bio, many=True)
        return JsonResponse(bio_serializer.data, safe=False)

    elif request.method == 'POST':
        print('Post Request')
        bio_data = JSONParser().parse(request)
        bio_serializer = AboutSerializer(data=bio_data)
        if bio_serializer.is_valid():
            bio_serializer.save()
            return JsonResponse(bio_serializer.data, status=status.HTTP_201_CREATED) 
        
        return JsonResponse(bio_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def contact(request):
    if request.method == 'POST':
        print('Post Request')
        contact_data = JSONParser().parse(request)

        print(contact_data)
        contact_serializer = ContactSerializer(data=contact_data)
        if contact_serializer.is_valid():
            contact_serializer.save()
            name = contact_data['name']
            message = contact_data['message']
            subject = f'Contact Form Request From {name}'

            body = f'Message: {message}'
            email = EmailMessage(
                subject=subject, 
                from_email='Server <q.rankin@outlook.com>',
                body=body,
                to=['quentin@thesocialstore.co.uk'],
                reply_to=[contact_data['email'],]
                )
            
            try:
                email.send(fail_silently=False)
            except Exception:
                print(traceback.format_exc())

            return JsonResponse(contact_serializer.data, status=status.HTTP_201_CREATED) 
        
        return JsonResponse(contact_serializer.errors, status=status.HTTP_400_BAD_REQUEST)