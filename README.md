# **Creating a Simple To Do List App with Django**

Prepared by **Ibrahim Ahmad**

## **About**

This is a simple to do list application designed for making notes for a given task.

This application uses JavaScript and React for the front end. To view the instructions and additional information please find the section **About Next.JS project**.

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

# About Next.JS project

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
