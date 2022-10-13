import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListePersonnesComponent } from './liste-personnes/liste-personnes.component';
import { PremierComponent } from './premier/premier.component';

const routes: Routes = [
  {
    path: '',
    component: ListePersonnesComponent,
    children: [
        { path: 'personne/:nom', component: PremierComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonneRoutingModule {}
