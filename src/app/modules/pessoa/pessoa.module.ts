import {Input, NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {PessoaResolve} from "./pessoa.resolve";
import {PessoaComponent} from "./pessoa.component";

import { pessoaRoute } from "./pessoa.route";
import {InputTextModule} from 'primeng/inputtext';
import { AdicionaAtualizaPessoaComponent } from "./adiciona-atualiza-pessoa/adiciona-atualiza-pessoa.component";
import { VisualizaPessoaComponent } from "./visualiza-pessoa/visualiza-pessoa.component";

@NgModule({
  imports: [
    RouterModule.forChild(pessoaRoute),
    CommonModule,
    ReactiveFormsModule,
    InputTextModule 
    
  ],
  declarations: [
    PessoaComponent,
    AdicionaAtualizaPessoaComponent,
    VisualizaPessoaComponent
  ],
  providers: [
    PessoaResolve
  ]
})
export class PessoaModule { }
