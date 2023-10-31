from django.db import models


class Hero(models.Model):
    myfoto = models.ImageField(upload_to='static/images/')
    name = models.TextField(max_length=100, null=True, blank=True)
    position = models.TextField(max_length=200, null=True, blank=True)
    aboutme = models.TextField(max_length=200, null=True,blank=True)
    description = models.CharField(null=True,blank=True, max_length=800)

    def __str__(self):
        return self.name


class SocialMedia(models.Model):
    url = models.URLField()
    img = models.ImageField(upload_to='static/social_media_images/', blank=True, null=True)

    def __str__(self):
        return self.url


class Experience(models.Model):
    years_frontend = models.PositiveIntegerField()
    years_backend = models.PositiveIntegerField()
    satisfied_customers = models.PositiveIntegerField()

    def __str__(self):
        return "Experience Data"

class AboutMe(models.Model):
    content = models.TextField()

    def __str__(self):
        return "About Content"


class Project(models.Model):
    name = models.CharField(max_length=100)
    link = models.URLField()
    image = models.ImageField(upload_to='static/projects/')

    def __str__(self):
        return self.name



class FrontendSkill(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class BackendSkill(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name



