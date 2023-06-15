from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.urls import reverse
from django.contrib.auth.decorators import login_required
from django.db import IntegrityError
from django.shortcuts import get_object_or_404
import json
from django.contrib.auth.decorators import login_required
from django.core.exceptions import ObjectDoesNotExist
# Create your views here.

from .models import User, Person


def home(request):
    if request.user.is_authenticated:
        try:
            person = Person.objects.get(player=request.user)
            user_id = person.id
        except ObjectDoesNotExist:
            user_id = None
        return render(request, "Choose_and_Tell/home.html",
                      {"user_id": user_id})
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
            if request.user.is_authenticated:
                try:
                    person = Person.objects.get(player=request.user)
                    user_id = person.id
                except ObjectDoesNotExist:
                    user_id = None
            return render(request, "Choose_and_Tell/login.html", {
                "message": "Invalid username and/or password.",
                "user_id": user_id
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
            user = User.objects.create_user(
                username, email, password)
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
    if request.user.is_authenticated:
        try:
            person = Person.objects.get(player=request.user)
            user_id = person.id
        except ObjectDoesNotExist:
            user_id = None
    if request.method == "POST":
        user_id = request.user.id
        boldness = request.POST["boldness"]
        player = request.user
        person, created = Person.objects.get_or_create(player=player)

        # Update the text_clarity_setting field with the boldness value
        person.text_clarity_setting = boldness
        person.save()
        return render(request, "Choose_and_Tell/home.html", {
            "user": user_id
        })
    else:
        return render(request, "Choose_and_Tell/settings.html", {
            "user_id": user_id
        })


def game(request):
    try:
        person = Person.objects.get(player=request.user)
        user_id = person.id
    except ObjectDoesNotExist:
        user_id = None
    return render(request, "Choose_and_Tell/travel_by.html", {
        "user_id": user_id
    })


def car(request):
    try:
        person = Person.objects.get(player=request.user)
        user_id = person.id
    except ObjectDoesNotExist:
        user_id = None
    # needs to be changed for car storyline
    return render(request, "Choose_and_Tell/car_old.html", {
        "user_id": user_id
    })


def rocket(request):
    try:
        person = Person.objects.get(player=request.user)
        user_id = person.id
    except ObjectDoesNotExist:
        user_id = None
    return render(request, "Choose_and_Tell/rocket.html", {
        "user_id": user_id
    })


def boat(request):
    try:
        person = Person.objects.get(player=request.user)
        user_id = person.id
    except ObjectDoesNotExist:
        user_id = None
    return render(request, "Choose_and_Tell/choose_destination_space.html", {
        "user_id": user_id
    })  # needs to be changed for car storyline


@ login_required
def get_tc(request, user_id):
    try:
        settings = Person.objects.get(player=request.user, pk=user_id)
    except Person.DoesNotExist:
        return JsonResponse({"error": "person not found."}, status=404)

    if request.method == "GET":
        return JsonResponse(settings.serialize())

    else:
        return JsonResponse({
            "error": "GET or PUT request required."
        }, status=400)

    # user = request.user
    # try:
        # person = Person.objects.get(player=user)
        # return JsonResponse(person.serialize())
    # except Person.DoesNotExist:
        # return JsonResponse({'text_clarity': None})
