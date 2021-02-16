from django.db.models.query import QuerySet
from .models import Bug
from rest_framework import viewsets, permissions
from .serializers import BugSerializer


#Bug Viewset
class BugViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly,
    ]
    serializer_class = BugSerializer

    queryset = Bug.objects.all()

    def perform_create(self, serializer):
        print(self.request.user)
        serializer.save(user=self.request.user)