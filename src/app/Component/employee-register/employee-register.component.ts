import { Component, NgModule } from '@angular/core';
import { IEmployee } from '../../srevices/IEmployee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-register',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-register.component.html',
  styleUrl: './employee-register.component.css'
})
export class EmployeeRegisterComponent {
 employee:IEmployee[]=[] 
}
