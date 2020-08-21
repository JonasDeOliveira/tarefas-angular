import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TarefaService } from '../shared/tarefa.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html'
})
export class EditarComponent implements OnInit {

  @ViewChild('formTarefa', {static: true}) formTarefa: NgForm;

  id: string;
  request: any;

  constructor(
    private tarefaService: TarefaService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.tarefaService.getTarefa(this.id).subscribe(response => this.request = response);
  }

  update() :void {
    if (this.formTarefa.form.valid) {
      this.tarefaService.updateTarefa(this.id, this.request).subscribe();
      this.router.navigate(['/tarefas']);
    }
  }

}
