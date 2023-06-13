from django.urls import path 

from . import views


urlpatterns  = [  
    path('', views.home, name ='home'), 
    path('login', views.login_user, name='login'),
    path('logout', views.logout_user, name="logout"),
    path('register', views.register, name='register'),
    path('settings', views.settings, name='settings'),
    path('game', views.game, name='game'),
    path('car', views.car, name='car'),
    path('rocket', views.rocket, name='rocket'),
    path('boat', views.boat, name='boat'),

    # API URLS
    path('get_text_clarity_setting/<int:user_id>', views.get_tc, name="get_text_clarity_setting")
]


