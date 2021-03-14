import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Pessoa } from "@models/pessoa.model";
import { PessoaService } from "../pessoa.service";

@Component({
  selector: 'app-adiciona-atualiza-pessoa',
  templateUrl: './adiciona-atualiza-pessoa.component.html'
})
export class AdicionaAtualizaPessoaComponent implements OnInit {

  formulario: FormGroup = this.fb.group({
    id: [],
    nome: [null, [Validators.required]],
    cpf: [null, [Validators.required]],
    sexo: [null, [Validators.required]],
    email: [null, [Validators.required]],
    dataNascimento: [null, [Validators.required]],
    naturalidade: [null, [Validators.required]],
    nacionalidade: [null, [Validators.required]],

  });

  pessoas: Pessoa[] = [];

  constructor(private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private pessoaService: PessoaService) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ pessoa }) => {
      this.atualizarFormulario(pessoa);
    });

  }

  salvar() {
    const id = this.formulario.get(['id'])!.value;
    const pessoa = this.criarPessoa();
    if (id === undefined) {
      this.pessoaService.adicionar(pessoa).subscribe(res => {
        this.router.navigate(['/pessoas']);
      });
    } else {
      this.pessoaService.atualizar(id, pessoa).subscribe(res => {
        this.router.navigate(['/pessoas']);
      }, () => {
      });
    }
  }

  private criarPessoa(): Pessoa {
    let pessoa: Pessoa = this.formulario.getRawValue();
    /* pessoa.nome = this.formulario.get(['nome'])!.value;
    pessoa.cpf = this.formulario.get(['cpf'])!.value;
    pessoa.sexo = this.formulario.get(['sexo'])!.value;
    pessoa.email = this.formulario.get(['email'])!.value;
    pessoa.dataNascimento = this.formulario.get(['dataNascimento'])!.value;
    pessoa.naturalidade = this.formulario.get(['naturalidade'])!.value;
    pessoa.nacionalidade = this.formulario.get(['nacionalidade'])!.value; */
    return pessoa;
  }

  private atualizarFormulario(pessoa: Pessoa) {
    this.formulario.patchValue(
      {
        id: pessoa.id,
        nome: pessoa.nome,
        cpf: pessoa.cpf,
        sexo: pessoa.sexo,
        email: pessoa.email,
        dataNascimento: pessoa.dataNascimento,
        naturalidade: pessoa.naturalidade,
        nacionalidade: pessoa.nacionalidade

      }
    );
  }
  cancelar() {
    this.router.navigate(['/pessoas']);
  }

}
