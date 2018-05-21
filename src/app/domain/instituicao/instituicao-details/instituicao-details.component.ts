import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { InstituicaoService } from "../instituicao.service";
import { Instituicao } from "../instituicao";

@Component({
  selector: 'app-instituicao-details',
  templateUrl: './instituicao-details.component.html',
  styleUrls: ['./instituicao-details.component.css']
})
export class InstituicaoDetailsComponent implements OnInit {

  instituicao: Instituicao;
  instituicaoForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private builder: FormBuilder,
    public instituicaoService: InstituicaoService
  ) { }

  ngOnInit() {
    this.instituicao = new Instituicao();

    /* Obter o `ID` passado por parâmetro na URL */
    this.instituicao.id = this.route.snapshot.params['id'];

    /* Define o titulo da página */
    // this.layout.title = 'Visualizar Instituicao';

    /* Reactive Forms */
    this.instituicaoForm = this.builder.group({
      id: [],
      idMantenedora: [null],
      nome: [null, [Validators.required, Validators.maxLength(80)]],
      codigo: [null, [Validators.required, Validators.maxLength(10)]],
      bairro:  [null, [Validators.required, Validators.maxLength(50)]],
      logradouro:  [null, [Validators.required, Validators.maxLength(80)]],
      numero: [null],
      caixaPostal: [null, [Validators.required, Validators.maxLength(20)]],
      pais: [null, [Validators.required, Validators.maxLength(20)]],
      numeroFiscal: [null, [Validators.required, Validators.maxLength(20)]],
      provincia:  [null, [Validators.required, Validators.maxLength(5)]],
      municipio:  [null, [Validators.required, Validators.maxLength(80)]]
    }, {});

    // Desabilitar formulário para edição
    this.instituicaoForm.disable();

    // Se existir `ID` realiza busca para trazer os dados
    if (this.instituicao.id != null) {
      this.instituicaoService.findOne(this.instituicao.id)
        .subscribe(instituicao => {
          this.instituicaoForm = this.builder.group(instituicao, {})
        })
    }
  }
}
