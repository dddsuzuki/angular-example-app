import { Injectable } from '@angular/core';
import { Store } from 'src/libs/store';
import { EntryState, initialState } from './entry.state';

@Injectable()
export class EntryStore extends Store<EntryState> {

  get statuses$() {
    return this.select(state => state.statuses);
  }

  get errors$() {
    return this.select(state => state.errors);
  }

  get nameStatus$() {
    return this.select(state => state.nameStatus);
  }

  get nameError$() {
    return this.select(state => state.nameError);
  }

  get emailStatus$() {
    return this.select(state => state.emailStatus);
  }

  get emailError$() {
    return this.select(state => state.emailError);
  }

  get addressStatus$() {
    return this.select(state => state.addressStatus);
  }

  get addressError$() {
    return this.select(state => state.addressError);
  }

  constructor() {
    super(initialState);
  }

  updateStatus(key: string, status: string) {
    const newStatuses = {};
    newStatuses[key] = status;

    this.update(state => ({
      ...state,
      statuses: {
        ...state.statuses,
        ...newStatuses,
      }
    }));
  }

  updateError(key: string, error: string) {
    const newErrors = {};
    newErrors[key] = error;

    this.update(state => ({
      ...state,
      errors: {
        ...state.errors,
        ...newErrors,
      }
    }));
  }

  updateNameStatus(nameStatus: string) {
    this.update(state => ({
      ...state,
      nameStatus,
    }));
  }

  updateNameError(nameError: string) {
    this.update(state => ({
      ...state,
      nameError,
    }));
  }

  updateEmailStatus(emailStatus: string) {
    this.update(state => ({
      ...state,
      emailStatus,
    }));
  }

  updateEmailError(emailError: string) {
    this.update(state => ({
      ...state,
      emailError,
    }));
  }

  updateAddressStatus(addressStatus: string) {
    this.update(state => ({
      ...state,
      addressStatus,
    }));
  }

  updateAddressError(addressError: string) {
    this.update(state => ({
      ...state,
      addressError,
    }));
  }

}
