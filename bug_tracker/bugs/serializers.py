from .models import User
from rest_framework import serializers
from .models import Bug

#User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

#Bug Serializer
class BugSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bug
        fields = '__all__'