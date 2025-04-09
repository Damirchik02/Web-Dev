from django.urls import path
from . import views

urlpatterns = [
    path('companies/', views.company_get),
    path('companies/<int:id>/', views.company_get_id),
    path('companies/create/', views.company_create),
    path('companies/<int:id>/update/', views.company_update),
    path('companies/<int:id>/delete/', views.company_delete),
    path('companies/<int:id>/vacancies/', views.vacancies_by_company),
    path('vacancies/', views.VacancyListCreate.as_view()),
    path('vacancies/<int:pk>/', views.VacancyDetail.as_view()),
]