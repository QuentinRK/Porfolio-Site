from django.db import models

# Create your models here.
class Project(models.Model):
    title = models.CharField(max_length=30)
    description =  models.TextField()
    link = models.URLField()

    def __str__(self):
        return self.title


class AboutMe(models.Model):
    bio = models.TextField()

class Contact(models.Model):
    name = models.CharField(max_length=30)
    email = models.EmailField()
    message = models.TextField()