from django.http import HttpResponse, JsonResponse, HttpResponseRedirect, HttpResponseNotFound
from django.shortcuts import render, get_object_or_404
from django.template import loader
from django.core import serializers
from datetime import datetime
from .forms import ToDoForm
from .models import ToDo
import json
from django.views.decorators.csrf import requires_csrf_token, ensure_csrf_cookie, csrf_exempt
# Create your views here.
author = "Ibrahim Ahmad"
todos = ["Make coffee", "Use R to aggregate data for data analysis", 
         "Generate visualisation diagrams from data generated in report.", 
         "Use visual diagram to aid interpration of data analysis in report.", 
         "Perform writeup in data analysis section of report.", 
         "Finalise report.", 
         "Make coffee and leave."]

@ensure_csrf_cookie
def index(request):
    #first get the page
    page = loader.get_template("todosapp/home.html")   
    #then return a http response with the page rendered.
    global author
    # for todo in ToDo.objects.all():
        # print(todo.startdate.astimezone())
    return HttpResponse(page.render({"name" : author, "data" : ToDo.objects.all(), "size" : todos.__len__}))

def todosJson(request):
    return JsonResponse(list(ToDo.objects.values()), safe=False)

def main(request):
    page = loader.get_template("todosapp/index1.html")
    return HttpResponse(page.render())

def delete(request, task):
    assert type(task) == str, "Task must be of type string."
    page = loader.get_template("todosapp/home.html")
    for todo in ToDo.objects.all():
        print(todo.todos_id)
        if todo.todos_id.__str__() == task:
            print(todo.todos_id)
            todo.delete()
            return HttpResponseRedirect("/todosapp") #better choice
            # this will redirect to the same page with same url.
            # return HttpResponse(page.render({"name" : author, "data" : todos, "size" : todos.__len__}))
    failed_to_find_item_page = loader.get_template("error/404.html")
    return HttpResponseNotFound(failed_to_find_item_page.render({'message' : task, 'return_link': "/todosapp"}))

def add(request):
    if request.method == "POST":
        form = ToDoForm(request.POST)
        if form.is_valid():
            # todos.append(form.data.get("title"))  
            todo = ToDo(title=form.data.get("title"), startdate=form.data.get("startdate"),
                        duedate=form.data.get("duedate"))
            todo.save()
            return HttpResponseRedirect("/todosapp")
    else:
        form = ToDoForm()
    return render(request, "todosapp/add_task.html" ,{"form": form})

@csrf_exempt
def add_payload(request):
    if request.method == "POST":
        print("test")
        print(json.loads(request.body))
        return HttpResponse('Success', status=200)
    else:
        return HttpResponse('Unauthorized', status=401)

""" 
This will simply return the name of the app.
This will return a http response of text
"""
def home(request):
    return HttpResponse("This is the ToDoList App. Under-construction.")

"""
This will return data in a JSON format
"""
def randomData(request):
    d = date(2000, 4, 23) #date is immutable, so fields cannot be modified
    # d.day = 23
    # d.month = 4
    # d.year = 2000
    return JsonResponse({
        "fullname" : "Ibrahim Ahmad",
        "gender" : "Male",
        "dob" : d,
        "address_1" : "25 Brown Street",
        "postcode" : "ML3 9VW",
        "mobile" : "07000 000000",
        "email" : "ibrahim@fakeemail.com",
        "items" : {
            "Watch" : 1,
            "Mobile Phone" : 2,
            "Pen" : 4
        },
        "health-condition" : {}
    })


def getTaskById(request, todos_id):
    for todo in ToDo.objects.values():
        if todo.todos_id == todos_id:
            return JsonResponse(serializers.serialize("json", todo, fields=("title", "startdate", "duedate")), safe=False)
    failed_to_find_item_page = loader.get_template("error/404.html")
    return HttpResponseNotFound(failed_to_find_item_page.render({'message' : "Could not find the item requested.", 'return_link': "/todosapp"}))

def update(request):
    # for todo in ToDo.objects.all():
    #     if todo.todos_id == todos_id:
    #         todo.title 
    return render(request, "todosapp/update_task.html")

def updateRecord(request, todos_id):
    # for todo in ToDo.objects.all():
    #     if todo.todos_id == todos_id:
    #         todo.title
    if request.method == "PATCH":
        print("patch meethod is updateRecord()")
        obj = json.loads(request.body) #dict
        print(obj)

        for todo in ToDo.objects.all():
            if todo.todos_id == obj['todos_id']:
                todo.title = obj['title']
                todo.startdate = obj['startdate']
                todo.duedate = obj['duedate']
                todo.save()

    return render(request, "todosapp/update_task.html")