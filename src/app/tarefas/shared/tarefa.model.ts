export interface Tarefa {
    id: number;
    name:string;
}

export interface ResponseTarefas {
    tarefas: Tarefa[];
}