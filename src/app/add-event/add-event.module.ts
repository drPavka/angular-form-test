import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AddEventRoutingModule} from './add-event-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {AddEventComponent} from './add-event.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {SharedModule} from '../shared/shared.module';
import {AddEventProviderModule} from './add-event-provider.module';


@NgModule({
  declarations: [
    AddEventComponent
  ],
  imports: [
    AddEventProviderModule,
    SharedModule,
    AddEventRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class AddEventModule {
}
