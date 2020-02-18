import { Injectable } from '@angular/core';
import { CoreService } from './../core/services/core.service';

@Injectable()
export class ConfirmService {

  entry$ = this.core.entry$;

  constructor(
    private core: CoreService,
  ) { }

  async cancel() {
    this.core.cancel();
  }

  async confirm() {
    this.core.confirm();
  }

}
