import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-table',
  templateUrl: './seller-table.component.html',
  styleUrls: ['./seller-table.component.css']
})
export class SellerTableComponent implements OnInit {
  websites: any[] = [];

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.fetchWebsites();
  }

  fetchWebsites() {
    // Retrieve le_id from local storage
    const leIdFromLocalStorage = localStorage.getItem('le_id');
    if (!leIdFromLocalStorage) {
      console.error('le_id not found in local storage');
      return;
    }

    // Make HTTP request with le_id
    this.http.get<any[]>(`/api/v1/seller/getWebsitesByOwner?le_id=${leIdFromLocalStorage}`).pipe(
      tap(data => {
        this.websites = data;
      })
    ).subscribe({
      next: () => {},
      error: (error) => {
        console.error('Error fetching websites:', error);
      }
    });
  }

  openPopup(): void {
    this.router.navigateByUrl('/seller/add-website');
  }
}
