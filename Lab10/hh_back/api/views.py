from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view # FBV
from rest_framework.response import Response
from rest_framework import status
from .models import Company
from .serializers import CompanySerializer
from rest_framework import generics # CBV
from .models import Vacancy
from .serializers import VacancySerializer

# FBVs for Company model
@api_view(['GET'])
def company_get(request):
    companies = Company.objects.all()
    serializer = CompanySerializer(companies, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def company_get_id(request, id):
    company = Company.objects.get(id=id)
    serializer = CompanySerializer(company)
    return Response(serializer.data)

@api_view(['POST'])
def company_create(request):
    serializer = CompanySerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def company_update(request, id):
    company = Company.objects.get(id=id)    
    serializer = CompanySerializer(company, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def company_delete(request, id):
    company = Company.objects.get(id=id)
    company.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def vacancies_by_company(request, id):
    company = Company.objects.get(id=id)
    vacancies = company.vacancies.all()
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)

# CBVs for Vacancy model
class VacancyListCreate(generics.ListCreateAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

class VacancyDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer