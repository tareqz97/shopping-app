import {NgModule} from "@angular/core";
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing-module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ProdectsComponent } from './prodects/prodects.component';
import { HeaderComponent } from '../header/header.component';

@NgModule({
    declarations: [
        AdminHomeComponent,
        ProdectsComponent,
        HeaderComponent
    ],imports :[
        RouterModule,
        AdminRoutingModule
    ]
})

export class AdminModule {
    
}