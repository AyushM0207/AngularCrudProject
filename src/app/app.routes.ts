import { RedirectCommand, Routes } from '@angular/router';
import { EmployeeListComponent } from './Component/employee-list/employee-list.component';
import { EmployeeProfileComponent } from './Component/employee-profile/employee-profile.component';
import { EmployeeRegistrationComponent } from './Component/employee-registration/employee-registration.component';

export const routes: Routes = [
    {path:'',redirectTo:'/employee',pathMatch:'full'},
    {path:'employee',component:EmployeeListComponent},
    {path:'employee/register',component:EmployeeRegistrationComponent},
    {path:'employee/profile/:id',component:EmployeeProfileComponent}
];
