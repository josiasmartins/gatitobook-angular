import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    // pathMath: remove os espaços
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    // import: retorna uma promise
    loadChildren: () => import('./home/home.module')
      .then(m => m.HomeModule)
  },
  {
    path: 'animais',
    loadChildren: () => import('./animais/animais.module').then(m => m.AnimaisModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
