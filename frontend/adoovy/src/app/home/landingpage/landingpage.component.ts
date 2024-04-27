import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent {
  constructor(private router: Router) { }

  async login() {
    console.log('login');
    this.router.navigateByUrl('/signin')

  }

  async signUp() {
    console.log('signup');
    this.router.navigateByUrl('/signup')
  }
}
