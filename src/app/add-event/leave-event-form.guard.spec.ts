import { TestBed } from '@angular/core/testing';

import { LeaveEventFormGuard } from './leave-event-form.guard';

describe('LeaveEventFormGuard', () => {
  let guard: LeaveEventFormGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LeaveEventFormGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
