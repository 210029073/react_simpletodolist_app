from typing import Any
from django.db import models
from datetime import datetime
import json
# Create your models here.
class ToDo(models.Model, json.JSONEncoder):
    todos_id = models.IntegerField(primary_key=True, auto_created=True, serialize=False, default=None)
    title = models.TextField(max_length=255)
    startdate = models.DateTimeField("start date")
    duedate = models.DateTimeField("due date")

class ToDoNoID(json.JSONEncoder):
    # todos_id = models.IntegerField(primary_key=True, auto_created=True, serialize=False, default=None)
    title = ""
    startdate = datetime
    duedate = datetime

    