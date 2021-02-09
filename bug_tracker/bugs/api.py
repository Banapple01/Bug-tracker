from django.db.models.query import QuerySet
from .models import Bug, User
from rest_framework import viewsets, permissions
from .serializers import BugSerializer, UserSerializer

#User Viewset
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = UserSerializer

#Bug Viewset
class BugViewSet(viewsets.ModelViewSet):
    queryset = Bug.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = BugSerializer
