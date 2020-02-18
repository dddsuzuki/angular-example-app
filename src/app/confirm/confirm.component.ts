import { Component, OnInit } from '@angular/core';
import { ConfirmService } from './confirm.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  entry$ = this.confirmService.entry$;

  constructor(
    private router: Router,
    private confirmService: ConfirmService,
  ) { }

  ngOnInit(): void {
  }

  confirm() {
    this.confirmService.confirm().then(() => {
      this.router.navigate(['success']);
    });
  }

  cancel() {
    this.router.navigate(['entry']);
  }

}
