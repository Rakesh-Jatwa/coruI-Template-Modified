import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Import Containers
import { DefaultLayoutComponent } from './containers';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { UserDetailsComponent } from './views/user-details/user-details.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [

      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
    ]
  },
  //  for user Routes
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'User'
    },
    children: [

      {
        path: 'user',
        component: UserDetailsComponent
      },
    ]
  },
  // for register routes
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Register'
    },
    children: [

      {
        path: 'register',
        component: RegisterComponent
      },
    ]
  },
  // for login routes
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Login'
    },
    children: [

      {
        path: 'login',
        component: LoginComponent
      },
    ]
  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
