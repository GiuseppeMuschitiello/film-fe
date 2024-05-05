import { Component, OnInit } from '@angular/core';
import { Dvd } from '../../models/dvd.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-dvd-details',
  templateUrl: './dvd-details.component.html',
  styleUrl: './dvd-details.component.scss',
})
export class DvdDetailsComponent implements OnInit {
  model: Dvd = {
    name: '',
    director: '',
  };

  id: number | undefined = undefined;
  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  dvd: Dvd[] = [];
  ngOnInit(): void {
    this.route?.params?.subscribe((params) => {
      this.id = params['id'];
      if (this.id) {
        this.get(this.id);
      }
    });
    this.getAllDvd();
  }

  getAllDvd() {
    this.apiService.GetAllDvd().subscribe({
      next: (response) => {
        this.dvd = response;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  get(id: number) {
    this.apiService.GetDvd(id).subscribe({
      next: (response: Dvd) => {
        this.model = response;
      },
      error: (error) => console.error(error),
    });
  }

  save() {
    if (!this.id)
      this.apiService
        .CreateDvd(this.model)
        .subscribe({ complete: () => this.router.navigateByUrl('/dvd') });
    else this.apiService.UpdateDvd(this.model).subscribe({ complete: () => this.router.navigateByUrl('/dvd') });
  }
}