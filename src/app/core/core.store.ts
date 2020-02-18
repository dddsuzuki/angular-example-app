import { Injectable } from '@angular/core';
import { Store } from 'src/libs/store';
import { CoreState, initialState } from './core.state';
import { Entry } from './models/entry.model';

@Injectable({
  providedIn: 'root'
})
export class CoreStore extends Store<CoreState> {

  get entry$() {
    return this.select(state => state.entry);
  }

  constructor() {
    super(initialState);
  }

  updateEntry(entry: Entry) {
    this.update(state => ({
      ...state,
      entry,
    }));
  }

}
