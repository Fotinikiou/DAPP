from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.urls import reverse
from django.contrib.auth.decorators import login_required
from django.db import IntegrityError
from django.shortcuts import get_object_or_404
# Create your views here.

from .models import User, Person


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
    if request.method =="POST":
        boldness = request.POST["boldness"]
        player = request.user
        person, created = Person.objects.get_or_create(player=player)

        # Update the text_clarity_setting field with the boldness value
        person.text_clarity_setting = boldness
        person.save()
        return render(request, "Choose_and_Tell/home.html")
    else:
        return render(request, "Choose_and_Tell/settings.html")


def game(request):
    return render(request, "Choose_and_Tell/travel_by.html")


def car(request):
    # needs to be changed for car storyline
    return render(request, "Choose_and_Tell/car_old.html")


def rocket(request):
    return render(request, "Choose_and_Tell/choose_destination_space.html")


def boat(request):
<<<<<<< HEAD
    # needs to be changed for car storyline
    return render(request, "Choose_and_Tell/choose_destination_space.html")
=======
    return render(request, "Choose_and_Tell/choose_destination_space.html") #needs to be changed for car storyline

def get_tc(request):
    if request.method == 'POST':
        text_clarity = request.POST.get('text_clarity')
        user = request.user
        person, created = Person.objects.get_or_create(player=user)
        person.text_clarity_setting = text_clarity
        person.save()
        return JsonResponse({
            'message': 'TC saved successfully'
        })
    
def save_tc(request):
    user = request.user
    try:
        person = Person.objects.get(player=user)
        return JsonResponse(person.serialize())
    except Person.DoesNotExist:
        return JsonResponse({'text_clarity': None})
>>>>>>> e2763107a6d7e21b25e2434a7d91d7280f1a0544
