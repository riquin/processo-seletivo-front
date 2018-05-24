import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from "../../shared/shared.module";

import { ModalModule } from 'ngx-bootstrap/modal';

// Component
import { InstituicaoRouting } from "./instituicao-routing.module";
import { InstituicaoService } from "./instituicao.service";
import { InstituicaoDetailsComponent } from "./instituicao-details/instituicao-details.component";
import { InstituicaoFormComponent } from "./instituicao-form/instituicao-form.component";
import { InstituicaoListComponent } from "./instituicao-list/instituicao-list.component";
import { MantenedoraService } from '../mantenedora/mantenedora.service';

@NgModule({
  declarations: [
    InstituicaoDetailsComponent,
    InstituicaoFormComponent,
    InstituicaoListComponent
  ],
  imports: [
    // angular
    HttpModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    // plugins
    DataTablesModule,

    // shared
    SharedModule,

    // Component
    InstituicaoRouting
  ],
  providers: [
    // services
    InstituicaoService,
    MantenedoraService
  ]
})
export class InstituicaoModule { }
