import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { HomeComponent } from './home.component';
const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: 'pessoas', canActivate: [AuthServiceService], loadChildren: '../pessoa/pessoa.module#PessoaModule' }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
