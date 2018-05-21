import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { MantenedoraService } from "../mantenedora.service";
import { Mantenedora } from "../mantenedora";

@Component({
  selector: 'app-mantenedora-details',
  templateUrl: './mantenedora-details.component.html',
  styleUrls: ['./mantenedora-details.component.css']
})
export class MantenedoraDetailsComponent implements OnInit {

  mantenedora: Mantenedora;
  mantenedoraForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private builder: FormBuilder,
    public mantenedoraService: MantenedoraService
  ) { }

  ngOnInit() {

    this.mantenedora = new Mantenedora();

    /* Obter o `ID` passado por parâmetro na URL */
    this.mantenedora.id = this.route.snapshot.params['id'];

    /* Define o titulo da página */
    // this.layout.title = 'Visualizar Mantenedora';

    /* Reactive Forms */
    this.mantenedoraForm = this.builder.group({
      id: [],
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
    this.mantenedoraForm.disable();

    // Se existir `ID` realiza busca para trazer os dados
    if (this.mantenedora.id != null) {
      this.mantenedoraService.findOne(this.mantenedora.id)
        .subscribe(mantenedora => {
          this.mantenedoraForm = this.builder.group(mantenedora, {})
        })
    }
  }
}
