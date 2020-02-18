import { Injectable } from '@angular/core';
import { ValidationErrors, AbstractControl } from '@angular/forms';
import { map } from 'rxjs/operators';
import { CoreService } from './../core/services/core.service';
import { EntryStore } from './entry.store';
import { Entry } from './../core/models/entry.model';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  get valid$() {
    return this.statuses$.pipe(
      map(statuses => {
        for (const key in statuses) {
          if (statuses[key] !== 'success') {
            return false;
          }
        }

        return true;
      }),
    );
  }

  statuses$ = this.store.statuses$;
  errors$ = this.store.errors$;
  entry$ = this.core.entry$;

  constructor(
    private store: EntryStore,
    private core: CoreService,
  ) { }

  async submit(entry: Entry) {
    this.core.submit(entry);
  }

  async checkFirstName(name: AbstractControl) {
    if (!name.value) {
      this.store.updateStatus('firstName', 'none');
      this.store.updateError('firstName', '');
      return;
    }

    if (name.invalid) {
      this.invalidFirstName(name.errors);
      return;
    }

    this.store.updateStatus('firstName', 'success');
    this.store.updateError('firstName', '');
  }

  async checkLastName(name: AbstractControl) {
    if (!name.value) {
      this.store.updateStatus('lastName', 'none');
      this.store.updateError('lastName', '');
      return;
    }

    if (name.invalid) {
      this.invalidLastName(name.errors);
      return;
    }

    this.store.updateStatus('lastName', 'success');
    this.store.updateError('lastName', '');
  }

  async checkEmail(email: AbstractControl) {
    if (!email.value) {
      this.store.updateStatus('email', 'none');
      this.store.updateError('email', '');
      return;
    }

    if (email.invalid) {
      this.invalidEmail(email.errors);
      return;
    }

    this.store.updateStatus('email', 'success');
    this.store.updateError('email', '');
  }

  async checkAddress(address: AbstractControl) {
    if (address.invalid) {
      this.invalidAddress(address.errors);
      return;
    }

    this.store.updateStatus('address', 'success');
    this.store.updateError('address', '');
  }

  private invalidFirstName(errors: ValidationErrors) {
    this.store.updateStatus('firstName', 'error');

    if (errors.minlength) {
      this.store.updateError('firstName', `Please enter at least ${errors.minlength.requiredLength} characters.`);
      return;
    }

    if (errors.maxlength) {
      this.store.updateError('firstName', `Please enter within ${errors.maxlength.requiredLength} characters.`);
      return;
    }
  }

  private invalidLastName(errors: ValidationErrors) {
    this.store.updateStatus('lastName', 'error');

    if (errors.minlength) {
      this.store.updateError('lastName', `Please enter at least ${errors.minlength.requiredLength} characters.`);
      return;
    }

    if (errors.maxlength) {
      this.store.updateError('lastName', `Please enter within ${errors.maxlength.requiredLength} characters.`);
      return;
    }
  }

  private invalidEmail(errors: ValidationErrors) {
    this.store.updateStatus('email', 'error');

    if (errors.email) {
      this.store.updateError('email', 'Please enter a valid email address.');
      return;
    }

    if (errors.maxlength) {
      this.store.updateError('email', `Please enter within ${errors.maxlength.requiredLength} characters.`);
      return;
    }
  }

  private invalidAddress(errors: ValidationErrors) {
    this.store.updateStatus('address', 'error');

    if (errors.minlength) {
      this.store.updateError('address', `Please enter at least ${errors.minlength.requiredLength} characters.`);
      return;
    }

    if (errors.maxlength) {
      this.store.updateError('address', `Please enter within ${errors.maxlength.requiredLength} characters.`);
      return;
    }
  }

}
