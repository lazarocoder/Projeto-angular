import { Routes } from "@angular/router";
import { PessoaResolve } from "./pessoa.resolve";
import { AdicionaAtualizaPessoaComponent } from "./adiciona-atualiza-pessoa/adiciona-atualiza-pessoa.component";
import { PessoaComponent } from "./pessoa.component";
import { VisualizaPessoaComponent } from "./visualiza-pessoa/visualiza-pessoa.component";

export const pessoaRoute: Routes = [
  {
    path: '',
    component: PessoaComponent
  },
  {
    path: 'adiciona',
    component: AdicionaAtualizaPessoaComponent,
    resolve: {
      pessoa: PessoaResolve
    }
  },
  {
    path: 'atualiza/:id',
    component: AdicionaAtualizaPessoaComponent,
    resolve: {
      pessoa: PessoaResolve
    }
  },
  {
    path: 'visualiza/:id',
    component: VisualizaPessoaComponent,
    resolve: {
      pessoa: PessoaResolve
    }
  }
];
