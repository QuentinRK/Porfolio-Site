from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework.decorators import api_view
from rest_framework import status, viewsets
from .serializers import ProjectSerializer, AboutSerializer
from .models import Project, AboutMe

# Create your views here.
@api_view(['GET', 'POST', 'DELETE'])
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