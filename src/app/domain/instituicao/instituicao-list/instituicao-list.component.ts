import { Component, OnInit, TemplateRef } from '@angular/core';
import { InstituicaoService } from '../instituicao.service';

import { Instituicao } from "../instituicao";

import { Subject } from 'rxjs/Subject';

//MODAL
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { DATATABLE_OPTIONS } from '../../../app.api';

@Component({
  selector: 'app-instituicao-list',
  templateUrl: './instituicao-list.component.html',
  styleUrls: ['./instituicao-list.component.css']
})
export class InstituicaoListComponent implements OnInit {
  
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<Instituicao> = new Subject();

  modalRef: BsModalRef;

  selectedInstituicao: Instituicao;
  selectedIndex: number;
  instituicoes: Instituicao[];

  constructor(
    private modalService: BsModalService,
    public instituicaoService: InstituicaoService 
  ) { }

  ngOnInit() {
  
    // this.layout.title = 'Lista de Instituicoes';
    this.dtOptions = DATATABLE_OPTIONS;

    this.instituicaoService.findAll()
      .subscribe(instituicoes => {
        this.instituicoes = instituicoes;
        this.dtTrigger.next();
      });

  }

  openModal(template: TemplateRef<any>, instituicao: Instituicao, index: number) {
    this.selectedInstituicao = instituicao;
    this.selectedIndex = index;
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  deleteInstituicao(): void {

    this.instituicaoService.delete(this.selectedInstituicao.id)
      .subscribe(response => {
        this.instituicoes.splice(this.selectedIndex, 1);
        this.modalRef.hide();

      });
  }

  hideModal(): void {
    this.modalRef.hide();
  }

}