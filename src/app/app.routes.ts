import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { UsertableComponent } from './usertable/usertable.component';
import { userGuard } from './user.guard';
import { EmployeeComponent } from './employee/employee.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {
        path: "login",
        component: LoginComponent
    },
    // {
    //     path: "employee",
    //     component: UsertableComponent,
       
    // },
    {
        path: '',
        component: MainlayoutComponent,
        children: [
            { path: '', redirectTo: '/user', pathMatch: 'full' },
            {
                path: "user",
                component: UsertableComponent,
               
            },
            {
                path: "employee",
                component: EmployeeComponent,
               
            },
           
        ]
    }
];
