# **Creating a Simple To Do List App with Django**

Prepared by **Ibrahim Ahmad**

## **About**

This is a simple to do list application designed for making notes for a given task.

This application uses JavaScript for the frontend, and demonstrates the usage of Ajax by performing API requests.

## FAQS

### _How do I run the web application?_
Simply run the following commands:

If you are using Windows, run the following:
```
python .\manage.py runserver_plus --key-file=127.0.0.1-key.pem --cert-file=127.0.0.1.pem
```

If you are using Unix/Linux, run the following:
```
python3 .\manage.py runserver_plus --key-file=127.0.0.1-key.pem --cert-file=127.0.0.1.pem
```

### _How do I create a new Django Project?_

Simply run the following commands:

`django-admin startproject name_of_your_project`

### _How do I create a new Django Application?_

Inside the Django folder you have just created simply run:

`django-admin startapp name_of_your_app`

### _How do I start the Django server?_

Inside your Django project simply run the following the command:

`python manage.py startproject`

Or if you are using Unix/Linux:

`python3 manage.py startapp`

## _How to use Django in Localhost with HTTPs_

Follow the instructions carefully on how to generate your HTTPs certificates by following [this link](https://timonweb.com/django/https-django-development-server-ssl-certificate/)

You may need to add the following packages if required via pip:
`pip install pyOpenSSL `

## _How to add a domain to CORS_

Simply install the following packages if you have not installed them already:
`pip install django-cor-headers`

Then in setting.py of your django project folder simply add the following or include if you have already:

```
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'todosapp.apps.TodosappConfig',
    'django_extensions',
    'corsheaders' # THIS ONE
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'corsheaders.middleware.CorsMiddleware', # INCLUDE THIS TOO
]

CORS_ORIGIN_ALLOW_ALLOW = False #This disables cors for all domains

CORS_ALLOWED_ORIGINS = (
    # ADD THE DOMAIN HERE BUT WITH NO PATH SUCH AS 'https://127.0.0.1:8000'
)
```

## Learn more

To learn more about Django please visit the link to [learn more](https://www.djangoproject.com/) about Django and how to get started with using Django, along with its tutorials, API documentation.
