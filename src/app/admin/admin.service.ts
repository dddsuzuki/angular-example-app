import { Injectable } from '@angular/core';
import { CoreService } from '../core/services/core.service';
import { AdminStore } from './admin.store';

@Injectable()
export class AdminService {

  entries$ = this.store.entries$;

  constructor(
    private store: AdminStore,
    private coreService: CoreService,
  ) { }

  async fetchEntries() {
    const entries = await this.coreService.fetch();

    this.store.updateEntries(entries);
  }

}
