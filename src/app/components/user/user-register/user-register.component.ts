import { Component, OnInit } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';
import { timer } from 'rxjs';
//import { Swal } from "sweetalert2";

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
  providers: [UserService],
})
export class UserRegisterComponent implements OnInit {
  public status: Number;
  public user: User;
  constructor(private _userService: UserService) {
    //tiene que ser agregado aqui para poder ser utilizado ya que no pertenece a este archivo y viene de otro
    this.status = -1;
    this.user = new User(1, '', '', '', 'user_role', '1');
  }

  ngOnInit(): void {}

  onSubmit(form:any){
    console.log(this.user);
    console.log('Datos ------ arriba');
    
    this._userService.register(this.user).subscribe({
      next: (response:any)=>{
        console.log(response);
        if(response.code==200){
          form.reset();
          this.alertMessage('success','Exitoso!!',60000,'Se ha creado el usuario correctamente');
         }else{
          this.alertMessage('error','Oops...',60000,'Datos enviados no cumplen con las reglas establecidas');
         }
      },
      error:(er:any)=>{
        console.log(er);
        if(er['error'].code == 406){
          console.log('Entro');
          this.alertMessage('error','Oops...',60000,'<p>Datos enviados no cumplen con las reglas establecidas</p><span style="color:red">correo ya registrado<span/>');
        }
      }
    });
  }

  alertMessage (pIcon:SweetAlertIcon,pTitle:string,pTime:number,pHtml?:string) {

    Swal.fire({
      icon: pIcon,
      title: pTitle,
      html:pHtml,
      timer: pTime
    });
  }
}
