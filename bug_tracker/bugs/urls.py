from rest_framework import routers
from .api import BugViewSet

router = routers.DefaultRouter()
router.register('api/bugs', BugViewSet, 'bugs')

urlpatterns = router.urls
