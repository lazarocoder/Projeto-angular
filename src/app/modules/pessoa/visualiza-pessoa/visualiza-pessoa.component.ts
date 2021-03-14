import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Pessoa } from "@models/pessoa.model";


@Component({
  selector: 'app-visualiza-pessoa',
  templateUrl: './visualiza-pessoa.component.html'
})
export class VisualizaPessoaComponent implements OnInit {

  pessoa: Pessoa;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe( ({ pessoa })  => {
      this.pessoa = pessoa;
    });
  }

  voltar(){
    this.router.navigate(['/pessoas']);
  }

}
