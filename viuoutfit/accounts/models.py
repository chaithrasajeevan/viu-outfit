from django.db import models

class signup_Table(models.Model):
    full_name = models.CharField(max_length=100)   
    email = models.EmailField(unique=True)        
    password = models.CharField(max_length=100)   
    
    def __str__(self):
        return self.full_name

class Login(models.Model):
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)

    def __str__(self):
        return self.email
