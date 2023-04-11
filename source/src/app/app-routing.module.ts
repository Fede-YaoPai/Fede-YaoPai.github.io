import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';
import { AuthenticationGuard } from './core/guards/authentication.guard';
import { RoutePaths } from './models/routes.models';
import { LoginPageGuard } from './core/guards/login-page.guard';

const routes: Routes = [
  {path: '', redirectTo: RoutePaths.Login, pathMatch: 'full'},
  {
    path: RoutePaths.Home,
    component: HomeComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: RoutePaths.Login,
    component: LoginComponent,
    canActivate: [LoginPageGuard]
  },
  {path: '**', redirectTo: RoutePaths.Login, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
