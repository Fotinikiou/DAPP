from django.contrib import admin


from .models import *



class PersonAdmin(admin.ModelAdmin):
    list_display=('id', 'player', 'text_clarity_setting' )

admin.site.register(User)
admin.site.register(Person, PersonAdmin)