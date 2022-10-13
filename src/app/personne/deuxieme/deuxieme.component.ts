import { Component, OnInit } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-deuxieme',
  templateUrl: './deuxieme.component.html',
  styleUrls: ['./deuxieme.component.scss']
})
export class DeuxiemeComponent extends ParentComponent implements OnInit {

  constructor() {super() }

  override ngOnInit(): void {
  }

  override incrementNbrClick(event: Event) {
    this.nbrClick+=2;
    console.log(event);
  }

}
