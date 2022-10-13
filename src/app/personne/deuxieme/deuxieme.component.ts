import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, filter, interval, Observable, switchMap, tap } from 'rxjs';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-deuxieme',
  templateUrl: './deuxieme.component.html',
  styleUrls: ['./deuxieme.component.scss'],
})
export class DeuxiemeComponent extends ParentComponent implements OnInit {
  subjectActiverTimer$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  interval$ = this.subjectActiverTimer$.pipe(
    filter((valeur) => valeur != false),
    switchMap(() => this.intervalComponent())
  );

  intervalComponent() : Observable<number>{
    return interval(1000).pipe(
      tap((valeur) => console.log(`valeur timer : ${valeur}`))
    )
  }

  constructor() {
    super();
  }

  override ngOnInit(): void {}

  activerOuReinitTimer() {
    this.subjectActiverTimer$.next(true);
  }
}
