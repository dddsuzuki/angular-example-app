import { Injectable } from '@angular/core';
import { Store } from 'src/libs/store';
import { AdminState, initialState } from './admin.state';
import { Entry } from './../core/models/entry.model';

@Injectable()
export class AdminStore extends Store<AdminState> {

  get entries$() {
    return this.select(state => state.entries);
  }

  constructor() {
    super(initialState);
  }

  updateEntries(entries: Entry[]) {
    this.update(state => ({
      ...state,
      entries,
    }));
  }

}
