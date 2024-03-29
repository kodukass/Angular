import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  previewPhoto = false;

  employee: Employee = {
    id: 0,
    fullname: '',
    gender: '', 
    email: '',
    phoneNumber: 0,
    contactPreference: '',
    dateOfBirth: new Date(),
    department: 'null',
    isActive: false,
    photoPath: '',
  };

  departments: Department[] = [
    { id: 1, name: 'Help Desk'},
    { id: 2, name: 'HR'},
    { id: 3, name: 'IT'},
    { id: 4, name: 'Payroll'},
    { id: 5, name: 'Admin'}
  ];
  
  constructor() {
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

  ngOnInit(): void {
  }

  saveEmployee(empForm: NgForm): void {
    console.log(empForm.value);
  }

}
