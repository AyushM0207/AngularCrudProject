import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'
@Component({
  selector: 'app-employee-registration',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './employee-registration.component.html',
  styleUrl: './employee-registration.component.css'
})
export class EmployeeRegistrationComponent {

  employee:any= {
    empName:'',
    empSalary: '',
    mobile : ''
};
  sucMsg:string=''
  onSubmit() {
    console.log(JSON.stringify(this.employee));
    this.sucMsg="Success !";
  }
  onReset(form : NgForm){
    form.reset();
    this.sucMsg='';
  }
}
