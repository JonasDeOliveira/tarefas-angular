import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TarefaService } from '../shared/tarefa.service';
import { Tarefa } from '../shared/tarefa.model';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html'
})
export class CadastrarComponent implements OnInit {

  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm

  request: Tarefa = {
    id: null,
    name: ''
  }

  constructor(
    private tarefaService: TarefaService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  register():void {
    if(this.formTarefa.form.valid) {
      this.tarefaService.createTarefa(this.request).subscribe();
      this.router.navigate(["/tarefas"]);
    }
    
  }

}
