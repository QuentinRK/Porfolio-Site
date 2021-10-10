from rest_framework import serializers
from .models import AboutMe, Project, Contact

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project

        fields = ('id', 'title', 'description', 'link')


class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutMe
        fields = "__all__"

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = "__all__"