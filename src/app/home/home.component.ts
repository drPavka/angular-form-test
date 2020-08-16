import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Observable} from 'rxjs';
import {EventsService, Event} from '../events.service';

@Component({
  selector: 'mouse-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  constructor(private events: EventsService) {
  }

  ngOnInit(): void {
  }

  get events$(): Observable<Event[]> {
    return this.events.list$$.asObservable();
  }

}
