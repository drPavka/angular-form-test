import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import {tap} from 'rxjs/operators';

export interface Event {
  name: string;
  address: string;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  public created$$: Subject<Event> = new Subject<Event>();
  public list$$: BehaviorSubject<Event[]> = new BehaviorSubject<Event[]>([]);

  constructor() {
    this.created$$.asObservable().pipe(

    ).subscribe();
  }

  add$(eventData: Event): Observable<boolean> {
    this.created$$.next(eventData);
    return of(true);
  }

}
