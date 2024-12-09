import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'connexion', loadChildren: () => import('./connexion/connexion.module').then(m => m.ConnexionPageModule) },
  { path: '', redirectTo: 'connexion', pathMatch: 'full' },
  { path: 'moovlyhome', loadChildren: () => import('./moovlyhome/moovlyhome.module').then(m => m.MoovlyhomePageModule) },
  { path: 'profil', loadChildren: () => import('./profil/profil.module').then(m => m.ProfilPageModule) },
  { path: 'infos', loadChildren: () => import('./infos/infos.module').then(m => m.InfosPageModule) },
  { path: 'signaler', loadChildren: () => import('./signaler/signaler.module').then(m => m.SignalerPageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
