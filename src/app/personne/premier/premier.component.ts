import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonneService } from 'src/app/core/services/personne.service';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-premier',
  templateUrl: './premier.component.html',
  styleUrls: ['./premier.component.scss'],
})
export class PremierComponent extends ParentComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private personneService: PersonneService
  ) {
    super();
  }

  override ngOnInit(): void {
    this.route.paramMap.subscribe((nomDansLURL) => {
      const personneNom = nomDansLURL.get('nom');
      if (personneNom) {
        this.personne = this.personneService
          .getPersonnes()
          .find((personneDeLaListe) => personneDeLaListe.nom === personneNom)!;
      }
      this.nomFormulaire = this.personne.nom;
    });
  }

  /*ngAfterViewInit() {
    this.buttonACliquer.nativeElement.addEventListener(
      'click',
      (e: Event) => {
        e.stopImmediatePropagation();
        e.preventDefault();
      },
      true
    );
  }*/

  renommerPersonne() {
    this.renommageEvent.emit(this.nomFormulaire);
  }
}
