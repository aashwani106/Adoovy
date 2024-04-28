import { Component } from '@angular/core';
import { ServiceService } from './home/services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adoovy';
  constructor( private myService : ServiceService  , private router : Router){  }

  erpUser: any
  async ngOnInit() {
    this.erpUser = JSON.parse(atob(localStorage.getItem('1001') as any));
    console.log('user==>', this.erpUser)
    if (this.erpUser.id) {
      console.log('alreday login');
      this.router.navigateByUrl('seller')
    }
  }
}
