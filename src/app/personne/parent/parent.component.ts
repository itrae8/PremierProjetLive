import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from 'src/app/core/model/personne.model';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  @Input() personne!: Personne;

  @Output() renommageEvent = new EventEmitter<string>();

 /* nom: string = 'Johnny Depp';
  age: number = 58;
  dateDeNaissance: Date = new Date();
  attributSansInit!: string;

  imgUrl: string =
    'https://vignette.wikia.nocookie.net/disney/images/9/90/Pirates4JackSparrowPosterCropped.jpg/revision/latest/scale-to-width-down/2000?cb=20170420003820&path-prefix=es';
*/
  nbrClick: number = 0;

  //@ViewChild('buttonACliquer') buttonACliquer!: ElementRef;

  nomFormulaire: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  incrementNbrClick(event: Event) {
    this.nbrClick++;
    console.log(event);
  }

}
