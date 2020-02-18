import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmGuard } from './core/guards/confirm.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'entry',
  },
  {
    path: 'entry',
    loadChildren: () => import('./entry/entry.module').then(m => m.EntryModule),
  },
  {
    path: 'confirm',
    loadChildren: () => import('./confirm/confirm.module').then(m => m.ConfirmModule),
    canActivate: [ConfirmGuard],
  },
  {
    path: 'success',
    loadChildren: () => import('./success/success.module').then(m => m.SuccessModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
