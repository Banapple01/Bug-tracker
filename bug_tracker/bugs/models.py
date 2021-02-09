from django.db import models
import re

# Create your models here.
import re

# Create your models here.
class login_manager(models.Manager):
    def register_validator(self, postData):
        errors = {}
        if len(postData['username']) < 2:
            errors['username'] = "First name must be at least 2 characters"
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if not EMAIL_REGEX.match(postData['email']):    # test whether a field matches the pattern            
            errors['email'] = "Invalid email address!"
        if len(postData['password']) < 10:
            errors['password'] = "Password must be at least 10 characters"
        if postData['password'] != postData['password_C']:
            errors['password_C'] = "Passwords must match!"
        return errors

    def login_validator(self, postData):
        errors = {}
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if not EMAIL_REGEX.match(postData['email']):    # test whether a field matches the pattern            
            errors['email'] = "Invalid email address!"
        if len(postData['password']) < 10:
            errors['password'] = "Password must be at least 10 characters"
        return errors
        
    def job_validator(self, postData):
        errors = {}
        if len(postData['title']) < 3:
            errors['title'] = "title must be at least 3 characters"
        if len(postData['desc']) < 3:
            errors['desc'] = "Description must be at least 3 characters"
        return errors

class User(models.Model):
    username = models.CharField(max_length=45)
    email = models.EmailField(max_length=255)
    password = models.CharField(max_length=254)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = login_manager()

class Bug(models.Model):
    title = models.CharField(max_length=255)
    desc = models.TextField()
    user = models.ForeignKey(User, related_name="jobs", on_delete = models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = login_manager()
