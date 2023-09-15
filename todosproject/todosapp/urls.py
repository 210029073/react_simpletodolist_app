from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("todos", views.index, name="dataflow"),
    path("todos/add", views.add, name="add"),
    path("todos/add/payload", views.add_payload, name="add_payload"),
    path("todos/delete/<str:task>/", views.delete, name="todo_delete"),
    path("todos/update/", views.update, name="todo_update1"),
    path("todos/update/<int:todos_id>", views.updateRecord, name="todo_update"),
    path("todos/data", views.todosJson, name="todos"),
    path("identifier", views.home, name="home"),
    path("random", views.randomData, name="randomData")
]