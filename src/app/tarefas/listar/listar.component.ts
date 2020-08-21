import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../shared/tarefa.service';
import { ResponseTarefas } from '../shared/tarefa.model';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html'
})
export class ListarComponent implements OnInit {

  responseTarefas: ResponseTarefas[];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.listarTodas();
  }

  listarTodas() {
    this.tarefaService.getTarefas().subscribe(response => this.responseTarefas = response);
  }

  remover(id: string, nome: string) {
    if (confirm(`Deseja remover a tarefa ${nome}?`)) {
      this.tarefaService.deleteTarefa(id).subscribe();
      this.listarTodas();
    }
  }

}
