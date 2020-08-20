import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TarefaService } from './shared/tarefa.service';
import { ListarComponent } from './listar/listar.component';


@NgModule({
  declarations: [ListarComponent],
  imports: [
    CommonModule
  ],
  providers: [
    TarefaService,
    RouterModule
  ]
})
export class TarefasModule { }
