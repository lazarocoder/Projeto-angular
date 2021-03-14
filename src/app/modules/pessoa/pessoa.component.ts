import { Component, OnInit } from '@angular/core';
import { Pessoa } from '@models/pessoa.model';
import {PessoaService} from "./pessoa.service";

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  pessoas: Pessoa[] = [];

  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.pessoaService.listar(
    ).subscribe(res => {
      this.pessoas = res.body;
    }, () => { });
  }

  excluir(id: number) {
    this.pessoaService.excluir(id).subscribe(res => {
      this.listar();
    },() => { });
  }

}
