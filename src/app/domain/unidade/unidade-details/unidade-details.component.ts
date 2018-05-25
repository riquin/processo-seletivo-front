import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { UnidadeService } from "../unidade.service";
import { Unidade } from "../unidade";
import { Instituicao } from '../../instituicao/instituicao';
import { InstituicaoService } from '../../instituicao/instituicao.service';


@Component({
  selector: 'app-unidade-details',
  templateUrl: './unidade-details.component.html',
  styleUrls: ['./unidade-details.component.css']
})
export class UnidadeDetailsComponent implements OnInit {

  unidade: Unidade;
  unidadeForm: FormGroup;
  instituicoes: Instituicao[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private builder: FormBuilder,
    public unidadeService: UnidadeService,
    public instituicaoService: InstituicaoService

  ) { }

  ngOnInit() {
    this.instituicaoService.findAll()
    .subscribe(instituicoes => this.instituicoes = instituicoes);
    this.unidade = new Unidade();

    /* Obter o `ID` passado por parâmetro na URL */
    this.unidade.id = this.route.snapshot.params['id'];

    /* Reactive Forms */
    this.unidadeForm = this.builder.group({
      id: [],
      instituicao: this.builder.control(null, [Validators.required, Validators.maxLength(80)]),
      nome: this.builder.control(null, [Validators.required, Validators.maxLength(80)]),
      codigo: this.builder.control(null, [Validators.required, Validators.maxLength(10)]),
      bairro: this.builder.control(null, [Validators.required, Validators.maxLength(50)]),
      logradouro:  this.builder.control(null, [Validators.required, Validators.maxLength(80)]),
      numero: this.builder.control(null, [Validators.required, Validators.maxLength(10)]),
      caixaPostal: this.builder.control(null, [Validators.required, Validators.maxLength(20)]),
      pais:this.builder.control(null, [Validators.required, Validators.maxLength(20)]),
      numeroFiscal: this.builder.control(null, [Validators.required, Validators.maxLength(20)]),
      provincia:  this.builder.control(null, [Validators.required, Validators.maxLength(5)]),
      municipio:  this.builder.control(null, [Validators.required, Validators.maxLength(80)])
        }, {});

    // Desabilitar formulário para edição
    this.unidadeForm.disable();

    // Se existir `ID` realiza busca para trazer os dados
    if (this.unidade.id != null) {
      this.unidadeService.findOne(this.unidade.id)
        .subscribe(unidade => {
          this.unidadeForm = this.builder.group(unidade, {})
        })
    }
  }

  compareFn (c1,c2): boolean {
    return c1 && c2 ? c1.id === c2.id : c1===c2;
  }

}

