from rest_framework import routers
from .api import BugViewSet, UserViewSet

router = routers.DefaultRouter()
router.register('api/bugs', BugViewSet, 'bugs')
router.register('api/users', UserViewSet, 'user')

urlpatterns = router.urls
