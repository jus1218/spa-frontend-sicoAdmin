import { Component, OnInit } from '@angular/core';
import { CondominoService } from '../../../services/condomino.service';
import { Condomino } from '../../../models/condomino';
import { SweetAlertIcon } from 'sweetalert2';
import Swal from 'sweetalert2';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-condomino-register',
  templateUrl: './condomino-register.component.html',
  styleUrls: ['./condomino-register.component.css'],
  providers: [CondominoService,UserService],
})
export class CondominoRegisterComponent implements OnInit {

  public users:any;
  public condomino:Condomino;
  constructor(private _condominoService: CondominoService, public _userService: UserService) { 
    //
    this.condomino = new Condomino(1,'',0,null);
    this.users = this.loadUsers();
  }

  ngOnInit(): void {


  }



  onSubmit(form:any){
    console.log(this.condomino);
    console.log('Datos ------ arriba');
    
    this._condominoService.register(this.condomino).subscribe({
      next: (response:any)=>{
        console.log(response);
        if(response.code==201){
          form.reset();
          this.alertMessage('success','Exitoso!!',60000,'Se ha creado el usuario correctamente');
         }else{
          this.alertMessage('success','Exitoso!!',60000,'Se ha creado el usuario correctamente');
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

 


  
  
  
   public loadUsers() {
    this._userService.getUsers().subscribe({
      next: (response: any) => {
        
        if (response.status == "success") {
          this.users = response.data;
        }else{
          this.users=null;
        }
        console.log("Usuarios:");
        
        console.log(response);
      },
      error: (err: Error) => {
        console.log(err);
      },
    });
  }
  
  
  
}
