import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarefa, ResponseTarefas} from './tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor(private http: HttpClient) { }

  private readonly API = 'http://localhost:3000/tarefas';

  getTarefas() {
    return this.http.get<ResponseTarefas[]>(this.API);
  }
  
}
