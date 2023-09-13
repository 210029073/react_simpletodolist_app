from django import forms

class ToDoForm(forms.Form):
    #assign form fields
    title = forms.CharField(label="Description", widget=forms.Textarea(attrs={'name':'title', 'title' : 'Task Description', 'placeholder':'Please enter the name of the task', 'autofocus' : True}))
    startdate = forms.DateTimeField(label="From",widget=forms.widgets.DateTimeInput(attrs={'type':'datetime-local'}))
    duedate = forms.DateTimeField(label="To", widget=forms.widgets.DateTimeInput(attrs={'type':'datetime-local'}))
