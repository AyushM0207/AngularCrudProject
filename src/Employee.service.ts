import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './app/srevices/IEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl="http://localhost:8080/rest"
  constructor(private http:HttpClient) {}
    // get All Employees
    public getAllEmployees():Observable<IEmployee[]> {
      return this.http.get<IEmployee[]>(`${this.baseUrl}/all`);
   }
  //  Create New Employee
   public createEmployee(employee:IEmployee):Observable<IEmployee>{
    return this.http.post<IEmployee>(`${this.baseUrl}/create`,employee)
   }
  //  Get Employee By Id
   public getEmployeeById(id:number):Observable<IEmployee>{
    return this.http.get<IEmployee>(`${this.baseUrl}/edit/${id}`);
   }
  //  Update Employee By Id 
   public updateEmployee(id:number, employee:IEmployee):Observable<IEmployee>{
     return this.http.put<IEmployee>(`${this.baseUrl}/update/${id}`,employee)
   }
  //  Delete Employee
   public deleteEmployee(id:number):Observable<IEmployee>{
    return this.http.delete<IEmployee>(`${this.baseUrl}/delete${id}}`);
   }
}
