import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { UsertableComponent } from './usertable/usertable.component';

export const routes: Routes = [
    { path: 'login', redirectTo: 'login', pathMatch: 'full' },
{
    path:'login',
    component:LoginComponent,   

},
{
    path:'',
    component:MainlayoutComponent,
    children:[
        {
            path:"user",
            component:UsertableComponent
        }
    ]
}
];
