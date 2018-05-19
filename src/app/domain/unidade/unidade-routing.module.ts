import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnidadeListComponent } from "./unidade-list/unidade-list.component";
import { UnidadeFormComponent } from "./unidade-form/unidade-form.component";
import { UnidadeDetailsComponent } from "./unidade-details/unidade-details.component";

const UnidadeRoutes: Routes = [
    { path: '', component: UnidadeListComponent },
    { path: 'visualizar/:id', component: UnidadeDetailsComponent },
    { path: 'novo', component: UnidadeFormComponent },
    { path: 'alterar/:id', component: UnidadeFormComponent },
];

@NgModule({
    imports: [RouterModule.forChild(UnidadeRoutes)],
    exports: [RouterModule]
})

export class UnidadeRouting { }
