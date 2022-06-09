import { Component, OnInit } from '@angular/core';
import { Proveedor } from '../../../models/proveedor';
import { ProveedorService } from '../../../services/proveedor.service';
import { SweetAlertIcon } from 'sweetalert2';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proveedor-register',
  templateUrl: './proveedor-register.component.html',
  styleUrls: ['./proveedor-register.component.css'],
  providers:[ProveedorService]
})
export class ProveedorRegisterComponent implements OnInit {
  public proveedor:Proveedor;
  constructor(public _proveedorService:ProveedorService) {

    this.proveedor = new Proveedor(1,'','','');
   }

  ngOnInit(): void {
  }

  onSubmit(form:any){

    this._proveedorService.register(this.proveedor).subscribe({
      next: (response:any)=>{
        console.log(response);
        if(response.code==200){
          form.reset();
          this.alertMessage('success','Exitoso!!',60000,'Se ha creado el proveedor correctamente');
         }else{
          this.alertMessage('error','Oops...',60000,'Datos enviados no cumplen con las reglas establecidas');
         }
      },
      error:(er:any)=>{
        console.log(er);
        if(er['error'].code == 406){
          console.log('Entro');
          this.alertMessage('error','Oops...',60000,'<p>Datos enviados no cumplen con las reglas establecidas</p><span style="color:red">correo ya registrado<span/>');
        }else
          this.alertMessage('error','Oops...',60000,'Datos enviados no cumplen con las reglas establecidas');
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
