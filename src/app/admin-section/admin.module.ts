import {NgModule} from "@angular/core";
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing-module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ProdectsComponent } from './prodects/prodects.component';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { BreadcrumpComponent } from '../shared/breadcrump/breadcrump.component';
import { ProdectDetailsComponent } from './prodects/prodect-details/prodect-details.component';

@NgModule({
    declarations: [
        AdminHomeComponent,
        ProdectsComponent,
        HeaderComponent,
        BreadcrumpComponent,
        ProdectDetailsComponent
    ],imports :[
        RouterModule,
        AdminRoutingModule,
        CommonModule
    ]
})

export class AdminModule {
    
}