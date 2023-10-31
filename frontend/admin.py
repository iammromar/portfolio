from django.contrib import admin
from .models import Hero,SocialMedia,Experience,AboutMe,Project,FrontendSkill,BackendSkill

# Register your models here.


admin.site.register(Hero)
admin.site.register(Experience)
admin.site.register(SocialMedia)
admin.site.register(AboutMe)
admin.site.register(Project)
admin.site.register(FrontendSkill)
admin.site.register(BackendSkill)

