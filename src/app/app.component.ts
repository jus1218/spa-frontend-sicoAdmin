import { Component } from '@angular/core';
import { UserService } from "./services/user.service";
import { User } from "./models/user";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[
    UserService
  ]
})

export class AppComponent {
  //title = 'spa-frontend-sico';
  public times:number;
  public usuarios:any;
  constructor(
    public _userService:UserService

  ){
    this.times = 0;
  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log(this.times);
    
    if (this.times == 0) {
      this.loadUsers();
    }
    this.times++;
 
  }
 

  public loadUsers() {
    this._userService.getUsers().subscribe(
      response=>{
        //this.usuarios = response.data;
        console.log(response);
          
      },
      error=>{
        this.usuarios =null;
        console.log(error);
          
      }
    );
  }
  
}