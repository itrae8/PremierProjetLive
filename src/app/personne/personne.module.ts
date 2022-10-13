import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PremierComponent } from './premier/premier.component';
import { ParentComponent } from './parent/parent.component';
import { DeuxiemeComponent } from './deuxieme/deuxieme.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ListePersonnesComponent } from './liste-personnes/liste-personnes.component';
import { PersonneRoutingModule } from './personne-routing.module';


@NgModule({
  declarations: [PremierComponent, ParentComponent, DeuxiemeComponent, ListePersonnesComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    PersonneRoutingModule
  ],
  exports: [
    PremierComponent,
    ParentComponent,
    DeuxiemeComponent,
    ListePersonnesComponent
  ]
})
export class PersonneModule { }
