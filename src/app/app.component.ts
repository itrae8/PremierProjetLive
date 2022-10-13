import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'PremierProjet';

  valeursTemplate = {
    valeurs: {
      nom: 'templateTest',
      chiffre: 5,
    },
  };

  interval$ = interval(1000);

  ngOnInit(){

  }
}
