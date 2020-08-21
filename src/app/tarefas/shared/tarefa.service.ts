import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarefa, ResponseTarefas, ResponseTarefa} from './tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor(private http: HttpClient) { }

  private readonly API = 'http://localhost:3000/tarefas';

  getTarefas() {
    return this.http.get<ResponseTarefas[]>(this.API);
  }

  createTarefa(request: Tarefa): Observable<Tarefa> {
      return this.http.post<Tarefa>(this.API, request);
  }

  getTarefa(id: string): Observable<ResponseTarefa> {
    const URL = `${this.API}/${id}`;
    
    return this.http.get<ResponseTarefa>(URL);
  }

  updateTarefa(id: string, request: Tarefa): Observable<Tarefa> {
    const URL = `${this.API}/${id}`;

    return this.http.put<Tarefa>(URL, request);
  }
  
}
