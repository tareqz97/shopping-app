import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ProdectsComponent } from './prodects/prodects.component';
import { ProdectDetailsComponent } from './prodects/prodect-details/prodect-details.component';
const routes: Routes= [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: AdminHomeComponent
    },{
        path: 'prodects',
        component: ProdectsComponent
    },
    {
        path: 'prodects/:id',
        component: ProdectDetailsComponent
    },
    {
        path: 'prodects/:id/details',
        component: ProdectDetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdminRoutingModule {
    
}