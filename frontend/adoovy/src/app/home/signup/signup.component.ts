import { Component } from '@angular/core';
import { account, ID } from '../../../lib/appwrite';
import Swal from 'sweetalert2';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private mainService: ServiceService) { }
  userFullName: any
  userEmail: any
  userPword: any
  async registerUser() {

    let obj: any = {}

    obj.name = this.userFullName
    obj.email = this.userEmail
    obj.password = this.userPword

    try {
      let resp = await account.create(ID.unique(), obj.email, obj.password, obj.name);
      if (resp.$id) {
        let obj2: any = {}
        obj2.fullName = resp.name
        obj2.email = resp.email
        obj2.password = this.userPword
        obj2.le_id = resp.$id
        let resp2 = await this.mainService.RegisterUser(obj2);
        if(resp2['error'] == false ){
          Swal.fire('Success', 'Registration Successfull', 'success');
        }
      } else {
        console.log(' account not created')
      }
    } catch (error) {
      console.log('Regisatration Failed =>', error)
    }

  }


  /* logut code 
  localStorage.removeItem('1001')  
  const promise = account.deleteSessions();
  console.log('s' , promise) 
  return
  */
}
