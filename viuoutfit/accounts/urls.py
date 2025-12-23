from django.urls import path
from . import views
from .views import admin_login

urlpatterns = [
    path('home/', views.home_view, name='home'),
    path('login/', views.login_view, name='login'),
    path('signup/',views.signup_view,name='signup'),
    path('admin-login/', admin_login, name='adminlogin'),
]