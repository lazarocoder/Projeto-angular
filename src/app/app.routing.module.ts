import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '@modules/login/login.component';
import { AuthServiceService } from './services/auth-service.service';
const routes: Routes = [
{path: '', redirectTo: 'home', pathMatch: 'full'}, 
{path: 'login', component: LoginComponent},
{path: 'home', loadChildren: './modules/home/home.module#HomeModule',canActivate:[AuthServiceService]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
