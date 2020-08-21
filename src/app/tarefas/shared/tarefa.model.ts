export interface Tarefa {
    id: number;
    name:string;
}

//GET Tarefas
export interface ResponseTarefas {
    tarefas: Tarefa[];
}

//GET Tarefa
export interface ResponseTarefa {
    data: Tarefa
}
