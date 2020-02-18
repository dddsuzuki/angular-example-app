import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { ConfirmRoutingModule } from './confirm-routing.module';
import { ConfirmComponent } from './confirm.component';
import { ConfirmService } from './confirm.service';

@NgModule({
  declarations: [ConfirmComponent],
  providers: [ConfirmService],
  imports: [
    SharedModule,
    ConfirmRoutingModule,
  ]
})
export class ConfirmModule { }
