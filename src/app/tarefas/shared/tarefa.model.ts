export interface Tarefa {
    id: number;
    name:string;
}

//GET Tarefas
export interface ResponseTarefas {
    tarefas: Tarefa[];
}