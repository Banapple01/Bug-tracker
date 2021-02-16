from rest_framework import serializers
from .models import Bug


#Bug Serializer
class BugSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bug
        fields = '__all__'