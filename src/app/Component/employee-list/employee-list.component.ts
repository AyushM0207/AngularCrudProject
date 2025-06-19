import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IEmployee } from '../../srevices/IEmployee';
import { EmployeeService } from '../../../Employee.service';
import {NgFor } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [RouterLink,NgFor],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit{
  
  employee:IEmployee[]=[];
  constructor(private employeeServic:EmployeeService) {}
  ngOnInit(): void {
    this.loadEmployeeList()
    console.log(this.employee);
  }

  loadEmployeeList(){
    this.employeeServic.getAllEmployees().subscribe((data)=>{
      this.employee=data;
    })
  }
  deleteOnClick(id:number):void{
    if(confirm('Are you sure want to delete employee record ?')){
      this.employeeServic.deleteEmployee(id).subscribe(()=>{
        this.loadEmployeeList();
      })
    }
    
    }
  }

