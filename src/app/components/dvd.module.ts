import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DvdDetailsComponent } from './dvd-details/dvd-details.component';
import { DvdListComponent } from './dvd-list/dvd-list.component';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';

@NgModule({
  declarations: [
    DvdListComponent,
    DvdDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DvdListComponent,
    DvdDetailsComponent
  ],
  providers: [ ApiService ]
})
export class DvdModule { }