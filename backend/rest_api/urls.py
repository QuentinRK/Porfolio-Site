from django.urls import path
from . import views

urlpatterns = [
    path("api/projects", views.projects),
    path("api/about-me", views.about_me),
    path("api/email", views.contact),
]