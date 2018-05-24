import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from "../../shared/shared.module";

import { ModalModule } from 'ngx-bootstrap/modal';

// Component
import { UnidadeRouting } from "./unidade-routing.module";
import { UnidadeService } from "./unidade.service";
import { UnidadeDetailsComponent } from "./unidade-details/unidade-details.component";
import { UnidadeFormComponent } from "./unidade-form/unidade-form.component";
import { UnidadeListComponent } from "./unidade-list/unidade-list.component";
import { InstituicaoService } from '../instituicao/instituicao.service';

@NgModule({
  declarations: [
    UnidadeDetailsComponent,
    UnidadeFormComponent,
    UnidadeListComponent
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
    UnidadeRouting
  ],
  providers: [
    // services
    InstituicaoService,
    UnidadeService
  ]
})
export class UnidadeModule { }
