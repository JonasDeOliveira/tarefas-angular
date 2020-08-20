import { Routes } from '@angular/router';
import { ListarComponent } from './listar/listar.component';


export const TarefasRoutes: Routes = [
    {
        path:'tarefas',
        redirectTo: 'tarefas/listar'

    },
    {
        path:'tarefas/listar',
        component: ListarComponent

    }
];