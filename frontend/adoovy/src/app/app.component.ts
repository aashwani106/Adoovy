import { Component } from '@angular/core';
import { ServiceService } from './home/services/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adoovy';
  constructor( private myService : ServiceService ){
     

  }
  async ngOnInit() {

  }
}
