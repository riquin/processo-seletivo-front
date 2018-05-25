import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';

import { InstituicaoService } from "../instituicao.service";
import { Instituicao } from "../instituicao";
import { Observable } from 'rxjs/Observable';
import { CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR } from 'ng2-currency-mask';
import { FormControl } from '@angular/forms/src/model';
import { MantenedoraService } from '../../mantenedora/mantenedora.service';
import { Mantenedora } from '../../mantenedora/mantenedora';


@Component({
  selector: 'app-instituicao-form',
  templateUrl: './instituicao-form.component.html',
  styleUrls: ['./instituicao-form.component.css']
})
export class InstituicaoFormComponent implements OnInit {

  instituicao: Instituicao
  instituicaoForm: FormGroup
  mantenedoras: Mantenedora[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private builder: FormBuilder,
    private imagem: FormBuilder,
    public instituicaoService: InstituicaoService,
    public mantenedoraService: MantenedoraService
  ) { }

  ngOnInit() {
    this.mantenedoraService.findAll()
    .subscribe( mantenedoras => this.mantenedoras = mantenedoras);

   /* console.log('mantenedoras: ' + this.mantenedoras.length); */

     this.instituicao = new Instituicao(); 

    /* Obter o `ID` passado por parâmetro na URL */
    this.instituicao.id = this.route.snapshot.params['id'];

    /* Reactive Forms */
    this.instituicaoForm = this.builder.group({
      id:[],
      mantenedora: this.builder.control(null, [Validators.required, Validators.maxLength(80)]),
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

  compareFn (c1,c2): boolean {
    return c1 && c2 ? c1.id === c2.id : c1===c2;
  }

}

