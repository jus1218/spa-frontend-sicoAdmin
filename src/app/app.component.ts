import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService],
})
export class AppComponent {

  constructor(){}

  /*
  
    //title = 'spa-frontend-sico';
  public usuarios: any;
  private checkUsers;
  constructor(public _userService: UserService) {
    this.loadUsers();

    this.checkUsers = setInterval(() => {
      this.loadUsers();
    }, 10000);
  }

  public loadUsers() {
    this._userService.getUsers().subscribe({
      next: (response: any) => {
        
        if (response.status == "success") {
          this.usuarios = response.data;
        }else{
          this.usuarios=null;
        }
        console.log(response);
      },
      error: (err: Error) => {
        console.log(err);
      },
    });
  }
  
  
  
  
  */
}
