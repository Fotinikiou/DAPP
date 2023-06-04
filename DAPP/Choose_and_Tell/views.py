from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django.contrib.auth.decorators import login_required
from django.db import IntegrityError
# Create your views here.

from .models import User

def home(request):
    if request.user.is_authenticated:
        return render(request, "Choose_and_Tell/home.html")
    else:
        return redirect('login')
    
def login_user(request):
    if request.method == "POST":

        # Attempt to sign user in
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)

        # Check if authentication successful
        if user is not None:
            login(request, user)
            return HttpResponseRedirect(reverse("home"))
        else:
            return render(request, "Choose_and_Tell/login.html", {
                "message": "Invalid username and/or password."
            })
    else:
        return render(request, "Choose_and_Tell/login.html")

def logout_user(request):
    logout(request)
    return HttpResponseRedirect(reverse("home"))

def register(request):
    if request.method == "POST":
        username = request.POST["username"]
        email = request.POST["email"]

        # Ensure password matches confirmation
        password = request.POST["password"]
        confirmation = request.POST["confirmation"]
        if password != confirmation:
            return render(request, "Choose_and_Tell/register.html", {
                "message": "Passwords must match."
            })

        # Attempt to create new user
        try:
            user = User.objects.create_user(username, email, password)
            user.save()
        except IntegrityError:
            return render(request, "Choose_and_Tell/register.html", {
                "message": "Username already taken."
            })
        login(request, user)
        return HttpResponseRedirect(reverse("home"))
    else:
        return render(request, "Choose_and_Tell/register.html")

def settings(request):
    return render(request, "Choose_and_Tell/settings.html")

def game(request):
    return render(request, "Choose_and_Tell/travel_by.html")

def car(request):
    return render(request, "Choose_and_Tell/car.html") #needs to be changed for car storyline

def rocket(request):
    return render(request, "Choose_and_Tell/choose_destination_space.html")

def boat(request):
    return render(request, "Choose_and_Tell/choose_destination_space.html") #needs to be changed for car storyline