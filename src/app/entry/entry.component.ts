import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { delay, switchMap, first } from 'rxjs/operators';
import { EntryService } from './entry.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {

  entryForm: FormGroup;
  errorMessage: string;
  valid$ = this.entryService.valid$;
  statuses$ = this.entryService.statuses$;
  errors$ = this.entryService.errors$;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private entryService: EntryService,
  ) { }

  ngOnInit() {
    this.entryForm = this.formBuilder.group({
      firstName: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(16)
      ]],
      lastName: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(16)
      ]],
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.maxLength(255),
      ]],
      address: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(64),
      ]],
    });

    this.entryForm.get('firstName').valueChanges.pipe(
      switchMap(name => of(name).pipe(delay(1000)))
    ).subscribe(() => {
      this.entryService.checkFirstName(this.entryForm.get('firstName'));
    });

    this.entryForm.get('lastName').valueChanges.pipe(
      switchMap(name => of(name).pipe(delay(1000)))
    ).subscribe(() => {
      this.entryService.checkLastName(this.entryForm.get('lastName'));
    });

    this.entryForm.get('email').valueChanges.pipe(
      switchMap(email => of(email).pipe(delay(1000)))
    ).subscribe(() => {
      this.entryService.checkEmail(this.entryForm.get('email'));
    });

    this.entryForm.get('address').valueChanges.pipe(
      switchMap(address => of(address).pipe(delay(1000)))
    ).subscribe(() => {
      this.entryService.checkAddress(this.entryForm.get('address'));
    });

    this.entryService.entry$.pipe(
      first(),
    ).subscribe(entry => {
      if (entry) {
        this.entryForm.setValue(entry);
      }
    });
  }

  submit() {
    const entry = {
      firstName: this.entryForm.get('firstName').value,
      lastName: this.entryForm.get('lastName').value,
      email: this.entryForm.get('email').value,
      address: this.entryForm.get('address').value,
    };

    this.entryService.submit(entry).then(() => {
      this.router.navigate(['confirm']);
    });
  }

}
