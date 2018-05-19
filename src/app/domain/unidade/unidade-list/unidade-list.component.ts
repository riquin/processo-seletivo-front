import { Component, OnInit, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs/Subject';

//MODAL
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { DATATABLE_OPTIONS } from '../../../app.api';

import { UnidadeService } from "../unidade.service";
import { Unidade } from "../unidade";

@Component({
  selector: 'app-unidade-list',
  templateUrl: './unidade-list.component.html',
  styleUrls: ['./unidade-list.component.css']
})
export class UnidadeListComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<Unidade> = new Subject();

  modalRef: BsModalRef;

  selectedUnidade: Unidade;
  selectedIndex: number;
  unidades: Unidade[];

  constructor(
    private modalService: BsModalService,
    public unidadeService: UnidadeService
  ) { }

  ngOnInit() {
     // this.layout.title = 'Lista de Unidades';
     this.dtOptions = DATATABLE_OPTIONS;

     this.unidadeService.findAll()
       .subscribe(unidades => {
         this.unidades = unidades;
         this.dtTrigger.next();
       });
  }
  openModal(template: TemplateRef<any>, unidade: Unidade, index: number) {
    this.selectedUnidade = unidade;
    this.selectedIndex = index;
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  deleteUnidade(): void {

    this.unidadeService.delete(this.selectedUnidade.id)
      .subscribe(response => {
        this.unidades.splice(this.selectedIndex, 1);
        this.modalRef.hide();

      });
  }

  hideModal(): void {
    this.modalRef.hide();
  }


}
