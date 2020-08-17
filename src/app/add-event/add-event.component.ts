import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {from, Observable, Subject, Subscription} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map, switchMap, tap} from 'rxjs/operators';
import {EventsService} from '../events.service';
import {Router} from '@angular/router';

@Component({
  selector: 'mouse-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddEventComponent implements OnInit, OnDestroy {
  public form: FormGroup = new FormGroup({});
  private subscription: Subscription = new Subscription();
  public add$$: Subject<void> = new Subject<void>();

  public titlePreview$: Observable<string> | undefined;
  public addressPreview$: Observable<string> | undefined;
  public datePreview$: Observable<string> | undefined;

  constructor(
    private events: EventsService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.form.addControl('name', new FormControl('', [Validators.required]));
    this.form.addControl('address', new FormControl('', [Validators.required]));
    this.form.addControl('date', new FormControl('', [Validators.required]));
    this.subscription.add(
      this.add$$.asObservable().pipe(
        filter(() => this.form.valid),
        map(() => this.form.value),
        switchMap(this.events.add$.bind(this.events)),
        filter(result => !!result),
        tap(() => this.form.markAsPristine()),
        switchMap(() => {
          return from(this.router.navigate(['/']));
        })
      ).subscribe()
    );
    const previewPipe = (source: Observable<string>): Observable<string> => {
      return source.pipe(
        debounceTime(500),
        distinctUntilChanged(),
        map(_ => _ as string)
      );
    };

    this.titlePreview$ = this.form.get('name')?.valueChanges.pipe(
      previewPipe
    );
    this.addressPreview$ = this.form.get('address')?.valueChanges.pipe(
      previewPipe
    );
    this.datePreview$ = this.form.get('date')?.valueChanges.pipe(
      previewPipe
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  get minDate(): Date {
    return new Date();
  }

}
