
/* import {Component,  NgModule , OnInit} from '@angular/core';    
import { Routes, RouterModule } from '@angular/router';    
import { dashboardComponent } from  './dashboard/dashboard.component'; 
import { LoginComponent } from './LogiLoginForm/n.component';
import { RegisterComponent } from './register/register.component';   
import { from } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
 export class DashboardComponent implements OnInit {
 constructor() { }

  ngOnInit(): void {
  }
}
export const routes: Routes = [    
  {    
    path: '',    
    redirectTo: 'login',    
    pathMatch: 'full',    
  },    
  {    
    path: 'login',    
    component: LoginComponent,    
    data: {    
      title: 'Login Page'    
    }    
  },    
  {    
    path: 'Dasboard',    
    component: dashboardComponent,    
    data: {    
      title: 'Dashboard Page'    
    }    
  },    
  {    
    path: 'Register',    
    component: RegisterComponent,    
    data: {    
      title: 'Add User Page'    
    }    
  },    
];    

@NgModule({    
  imports: [RouterModule.forRoot(routes)],    
  exports: [RouterModule]    
})    
export class AppRoutingModule { } 
 */