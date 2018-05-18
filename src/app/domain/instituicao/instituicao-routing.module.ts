import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstituicaoListComponent } from "./instituicao-list/instituicao-list.component";
import { InstituicaoFormComponent } from "./instituicao-form/instituicao-form.component";
import { InstituicaoDetailsComponent } from "./instituicao-details/instituicao-details.component";

const InstituicaoRoutes: Routes = [
    { path: '', component: InstituicaoListComponent },
    { path: 'visualizar/:id', component: InstituicaoDetailsComponent },
    { path: 'novo', component: InstituicaoFormComponent },
    { path: 'alterar/:id', component: InstituicaoFormComponent },
];

@NgModule({
    imports: [RouterModule.forChild(InstituicaoRoutes)],
    exports: [RouterModule]
})

export class InstituicaoRouting { }
