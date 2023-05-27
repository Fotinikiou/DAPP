from django.urls import path 

from Choose_and_Tell import views

urlpatterns  = [  
    path('', views.home, name ='home'), 
    path('login', views.login_user, name='login'),
    path('logout', views.logout_user, name="logout"),
    path('register', views.register, name='register'),
    path('settings', views.settings, name='settings'),
    path('game', views.game, name='game')
]

