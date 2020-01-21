import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    {
        path: 'lazy',
        loadChildren: ('./lazy-module/lazy-module.module#LazyModule'),
        // loadChildren: () => import('./lazy-module/lazy-module.module').then(m => m.LazyModule),
        data: {}
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
