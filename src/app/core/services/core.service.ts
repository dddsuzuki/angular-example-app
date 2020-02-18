import { Injectable } from '@angular/core';
import { CoreStore } from '../core.store';
import { Entry } from './../models/entry.model';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  entry$ = this.store.entry$;

  constructor(private store: CoreStore) { }

  submit(entry: Entry) {
    this.store.updateEntry(entry);
  }

  confirm() {
  }

  cancel() {
  }

}
