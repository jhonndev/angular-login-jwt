import { Component } from '@angular/core';
import { UserService } from '../users/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = "";
  password: string = "";
  confirmPassword: string = "";
  passwordError: boolean = false;

  constructor(public userService: UserService){}

  register() {
    const user = {
      email: this.email,
      password: this.password
    };

    this.userService.register(user).subscribe(data => {
      console.log(data);
    });
  }

}