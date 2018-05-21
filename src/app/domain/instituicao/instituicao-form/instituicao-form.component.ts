import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';

import { InstituicaoService } from "../instituicao.service";
import { Instituicao } from "../instituicao";
import { Observable } from 'rxjs/Observable';
import { CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR } from 'ng2-currency-mask';
import { FormControl } from '@angular/forms/src/model';

@Component({
  selector: 'app-instituicao-form',
  templateUrl: './instituicao-form.component.html',
  styleUrls: ['./instituicao-form.component.css']
})
export class InstituicaoFormComponent implements OnInit {

  instituicao: Instituicao
  instituicaoForm: FormGroup

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private builder: FormBuilder,
    private imagem: FormBuilder,
    public instituicaoService: InstituicaoService,
  ) { }

  ngOnInit() {
    this.instituicao = new Instituicao();

    /* Obter o `ID` passado por parâmetro na URL */
    this.instituicao.id = this.route.snapshot.params['id'];

    /* Define o titulo da página */
    // this.layout.title = (this.instituicao.id == null) ? 'Nova Instituicao' : 'Alterar Instituicao';

    /* Reactive Forms */
    this.instituicaoForm = this.builder.group({
      id:[],
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

    // Se existir `ID` realiza busca para trazer os dados
    if (this.instituicao.id != null) {
      this.instituicaoService.findOne(this.instituicao.id)
        .subscribe(instituicao => {
          this.instituicaoForm.patchValue(instituicao);
        });
    }
  }

  /* Método para salva instituicao */
  salvar(instituicao: Instituicao) {
    this.instituicaoService.save(instituicao)
      .subscribe(response => {
        /* Redireciona para lista */
        this.router.navigate(['/instituicao']);
      })
  }

}

