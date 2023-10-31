from django.shortcuts import render
from .models import Hero, SocialMedia, Experience,AboutMe,Project,FrontendSkill,BackendSkill

def mydatas(request):
    heroes = Hero.objects.all()
    social_media = SocialMedia.objects.all()
    experience = Experience.objects.first()
    about_me = AboutMe.objects.first()
    projects = Project.objects.all()
    frontend_skills = FrontendSkill.objects.all()
    backend_skills = BackendSkill.objects.all()


    context = {
        'heroes': heroes,
        'social_media': social_media,
        'experience': experience,
        'about_me': about_me,
        'projects': projects,
        'frontend_skills': frontend_skills,
        'backend_skills': backend_skills
    }

    return render(request, 'index.html', context)

