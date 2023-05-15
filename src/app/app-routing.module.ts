import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.service';

const routes: Routes = [
{
  path: '',
  loadChildren:()=>import('./components/login/login.module').then(m=>m.LoginModule)
},
{
  path: 'login',
  loadChildren:()=>import('./components/login/login.module').then(m=>m.LoginModule)
},
{
  path: 'register',
  loadChildren:()=>import('./components/register/register.module').then(m=>m.RegisterModule)
},

{
  path: 'home',
  loadChildren:()=>import('./components/home/home.module').then(m=>m.HomeModule),
  canActivate: [AuthGuard]
},

{
  path: 'admin',
  loadChildren:()=>import('./components/admin/admin.module').then(m=>m.AdminModule),
  canActivate:[AuthGuard]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
