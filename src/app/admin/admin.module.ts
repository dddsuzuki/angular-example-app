import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminStore } from './admin.store';
import { AdminService } from './admin.service';

@NgModule({
  declarations: [AdminComponent],
  providers: [
    AdminStore,
    AdminService,
  ],
  imports: [
    SharedModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
