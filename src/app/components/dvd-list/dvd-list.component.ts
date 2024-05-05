import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Dvd } from '../../models/dvd.interface';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-dvd-list',
  templateUrl: './dvd-list.component.html',
  styleUrl: './dvd-list.component.scss'
})
export class DvdListComponent implements OnInit{
  constructor(private apiService: ApiService, private router: Router){}

  items: any = []

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.apiService.GetAllDvd().subscribe({
      next: (response) => {
        this.items = response;
      },
      error: (error) => console.error(error)
    })
  }

  create(){
    this.router.navigateByUrl("/dvd/new");
  }

  delete(id: number){
    this.apiService.DeleteDvd(id).subscribe({complete: () => this.getAll() });
    
  }
}