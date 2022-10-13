import { Component } from '@angular/core';
import { Personne } from 'src/app/core/model/personne.model';
import { PersonneService } from './core/services/personne.service';

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
      chiffre: 5
    }
  };
}
