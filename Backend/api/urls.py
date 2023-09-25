from django.urls import path
from .views import StudentView, IndividualStudentView

urlpatterns = [
    path("", StudentView.as_view(), name='studentlist'),
    path('student/<int:pk>', IndividualStudentView.as_view(), name='individualstudent')
]