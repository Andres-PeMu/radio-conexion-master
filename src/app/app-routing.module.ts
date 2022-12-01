import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginComponentModule)
  },
  {
    path: 'recuperarEmail',
    loadChildren: () => import('./components/check-mail/check-mail.module').then(m => m.CheckMailModule)
  },
  {
    path: 'recuperarContraseña',
    loadChildren: () => import('./pages/recover-password/recover-password.module').then(m => m.RecoverPasswordComponentModule)
  },
  {
    path: 'registrarUsuario',
    loadChildren: () => import('./pages/registerUser/register-user.module').then(m => m.RegisterUserComponentModule)
  },
  {
    path: 'tab0',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
