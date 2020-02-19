import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoreStore } from '../core.store';
import { Entry } from './../models/entry.model';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  entry$ = this.store.entry$;

  constructor(
    private http: HttpClient,
    private store: CoreStore,
  ) { }

  submit(entry: Entry) {
    this.store.updateEntry(entry);
  }

  async confirm() {
    const entry = this.store.entry;
    await this.http.post('/api/entry', entry).toPromise();
  }

  cancel() {
  }

  async fetch() {
    const entries = await this.http.get<Entry[]>('/api/entry').toPromise();

    return entries;
  }

}
