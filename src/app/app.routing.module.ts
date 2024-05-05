import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DvdListComponent } from './components/dvd-list/dvd-list.component';
import { DvdDetailsComponent } from './components/dvd-details/dvd-details.component';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'dvd',
    component: DvdListComponent,
  },
 
  {
    path: 'dvd/new',
    component: DvdDetailsComponent,
  },
  {
    path: 'dvd/edit/:id',
    component: DvdDetailsComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
