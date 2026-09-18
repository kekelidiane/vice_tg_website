from django.urls import path

from core import views

app_name = "core"

urlpatterns = [
    path("", views.home, name="home"),
    path("blog/", views.blog_list, name="blog_list"),
    path("blog/<slug:slug>/", views.blog_detail, name="blog_detail"),
    path("don/", views.donation, name="donation"),
    path("api/contact/", views.contact_submit, name="contact_submit"),
    path("api/newsletter/", views.newsletter_submit, name="newsletter_submit"),
]
