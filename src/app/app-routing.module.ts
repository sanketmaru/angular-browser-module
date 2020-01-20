import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyModule } from './lazy-module/lazy-module.module';
const routes: Routes = [
    {
        path: 'lazy',
        loadChildren: () => import('./lazy-module/lazy-module.module').then(m => m.LazyModule),
        data: {}
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
