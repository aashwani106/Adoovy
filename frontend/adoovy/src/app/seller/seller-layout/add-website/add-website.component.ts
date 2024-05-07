import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-website',
  templateUrl: './add-website.component.html',
  styleUrls: ['./add-website.component.css']
})
export class AddWebsiteComponent {
  websiteUrl: string = '';
  websiteStatus: string = 'active'; // Default status

  constructor(private router: Router, private http: HttpClient) { }

  submitForm(): void {
    // Retrieve le_id from local storage
    const leIdFromLocalStorage = localStorage.getItem('le_id');
    if (!leIdFromLocalStorage) {
      console.error('le_id not found in local storage');
      return;
    }

    // Check if all inputs are filled
    if (this.websiteUrl && this.websiteStatus) {
      const websiteData = {
        website: this.websiteUrl,
        le_id: leIdFromLocalStorage, // Use le_id from local storage
        status: this.websiteStatus
      };

      // Submit form data to backend URL
      this.http.post<any>('/api/v1/seller/createWebsite', websiteData)
        .subscribe({
          next: () => {
            console.log('Form data submitted successfully:', websiteData);
            this.resetForm();
            this.goBack();
          },
          error: (error) => {
            console.error('Error submitting form data:', error);
            alert('Error submitting form data. Please try again.');
          }
        });
    } else {
      // If any input is missing, show an alert
      alert('Please fill in all fields.');
    }
  }

  goBack(): void {
    // Navigate back to the seller route
    this.router.navigate(['/seller']);
  }

  private resetForm(): void {
    // Reset form values
    this.websiteUrl = '';
    this.websiteStatus = 'active'; // Reset status to default
  }
}
