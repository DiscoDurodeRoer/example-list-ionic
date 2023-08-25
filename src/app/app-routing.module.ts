import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'list-standard',
    loadChildren: () => import('./list-standard/list-standard.module').then( m => m.ListStandardPageModule)
  },
  {
    path: 'list-sliding',
    loadChildren: () => import('./list-sliding/list-sliding.module').then( m => m.ListSlidingPageModule)
  },
  {
    path: 'list-reorder',
    loadChildren: () => import('./list-reorder/list-reorder.module').then( m => m.ListReorderPageModule)
  },
  {
    path: 'list-group',
    loadChildren: () => import('./list-group/list-group.module').then( m => m.ListGroupPageModule)
  },
  {
    path: '',
    redirectTo: 'list-standard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
