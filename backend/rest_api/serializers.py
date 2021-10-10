from rest_framework import serializers
from .models import AboutMe, Project

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project

        fields = ('id', 'title', 'description', 'link')


class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutMe
        fields = "__all__"