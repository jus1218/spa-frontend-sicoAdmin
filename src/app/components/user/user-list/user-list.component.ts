import { Component, OnInit } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserService]
})
export class UserListComponent implements OnInit {

  filterUser = '';
  public usuarios: any;
  private checkUsers;
  constructor(public _userService: UserService) {
    this.loadUsers();

    this.checkUsers = setInterval(() => {
      this.loadUsers();
    }, 10000);
  }

   ngOnInit(): void {
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
  

}
