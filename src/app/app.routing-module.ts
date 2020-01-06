import {NgModule} from "@angular/core";
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import { AuthComponent } from './auth/auth.component';
const appRoutes: Routes = [
    {
        path: '',
        component: AuthComponent
    },
    {
        path: 'admin',
        loadChildren: () => import(`./admin-section/admin.module`).then(m => m.AdminModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes,{preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})

export class AppRoutingModule {

}