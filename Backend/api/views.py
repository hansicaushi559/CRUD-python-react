from django.shortcuts import render
from rest_framework import generics
from .models import Student
from .serializers import StudentSerializer

# Create your views here.

class StudentView(generics.ListCreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

class IndividualStudentView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
