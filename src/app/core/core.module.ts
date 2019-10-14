import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';


import { HeaderComponent } from './header/header.component';
import { WorkoutHistoryTrackerService } from './workout-history-tracker.service';
import { LocalStorageService } from './local-storage.service';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ModalModule.forRoot(),
    BootstrapModalModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  // providers: [
  //   WorkoutHistoryTrackerService,
  //   LocalStorageService
  // ],
})
export class CoreModule { }
