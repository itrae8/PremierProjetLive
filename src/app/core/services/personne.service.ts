import { Injectable } from '@angular/core';
import { Personne } from '../model/personne.model';

@Injectable({
  providedIn: 'root',
})
export class PersonneService {
  constructor() {}

  getPersonnes(): Personne[] {
    return [
      {
        age: 32,
        nom: 'Bob',
        dateDeNaissance: new Date('1990-10-25'),
        color: 100,
      },
      {
        age: 22,
        nom: 'Alice',
        dateDeNaissance: new Date('2000-05-05'),
        color: 200,
      },
      {
        age: 45,
        nom: 'Robert',
        dateDeNaissance: new Date('1977-01-01'),
        color: 300,
      },
    ];
  }
}
