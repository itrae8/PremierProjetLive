import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directive/highlight.directive';
import { ExponentielPipe } from './pipe/exponentiel.pipe';



@NgModule({
  declarations: [HighlightDirective, ExponentielPipe],
  imports: [
    CommonModule
  ],
  exports:[
    HighlightDirective, ExponentielPipe
  ]
})
export class SharedModule { }
