import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { EntryRoutingModule } from './entry-routing.module';
import { EntryComponent } from './entry.component';
import { EntryStore } from './entry.store';
import { EntryService } from './entry.service';

@NgModule({
  declarations: [EntryComponent],
  providers: [
    EntryStore,
    EntryService,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    EntryRoutingModule,
  ]
})
export class EntryModule { }
