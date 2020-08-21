import { Routes } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EditarComponent } from './editar/editar.component';


export const TarefasRoutes: Routes = [
    {
        path:'tarefas',
        redirectTo: 'tarefas/listar'

    },
    {
        path:'tarefas/listar',
        component: ListarComponent

    },
    {
        path:'tarefas/cadastrar',
        component: CadastrarComponent

    },
    {
        path:'tarefas/editar/:id',
        component: EditarComponent

    }
];