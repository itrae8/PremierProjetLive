import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from 'src/app/core/model/personne.model';
import { PersonneService } from 'src/app/core/services/personne.service';

@Component({
  selector: 'app-liste-personnes',
  templateUrl: './liste-personnes.component.html',
  styleUrls: ['./liste-personnes.component.scss']
})
export class ListePersonnesComponent implements OnInit {

  personnes: Personne[] = [];

  constructor(private personneService: PersonneService,
    private router: Router) { }

  ngOnInit(){
    this.personnes = this.personneService.getPersonnes();
  }

  renommerPersonne(personne: Personne, nouveauNom: string) {
    personne.nom = nouveauNom;
  }

  ouvertureDetailPersonne(nom: string){
    this.router.navigate(['liste','personne',nom]);
  }

}
