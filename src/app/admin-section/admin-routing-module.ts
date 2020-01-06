import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ProdectsComponent } from './prodects/prodects.component';
const routes: Routes= [
    {
        path: '',
        component: AdminHomeComponent
    },{
        path: 'prodects',
        component: ProdectsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdminRoutingModule {
    
}