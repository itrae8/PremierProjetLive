import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeuxiemeComponent } from './personne/deuxieme/deuxieme.component';

const routes: Routes = [
  {
    path: 'liste',
    loadChildren: () =>
      import('./personne/personne.module').then(
        (module) => module.PersonneModule
      ),
  },
  { path: 'deuxiemeComponent', component: DeuxiemeComponent },
  { path: '', redirectTo: '/liste', pathMatch: 'full' },
  { path: '**', component: DeuxiemeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
