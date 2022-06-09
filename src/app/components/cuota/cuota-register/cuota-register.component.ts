import { Component, OnInit } from '@angular/core';
import { CuotaService } from 'src/app/services/cuota.service';
import { DetalleCuotaService } from 'src/app/services/detalleCuota.service';
import { DetalleCuota } from '../../../models/detalleCuota';
import { Cuota } from '../../../models/cuota';
import { SweetAlertIcon } from 'sweetalert2';
import Swal from 'sweetalert2';
import { FondoService } from '../../../services/fondo.service';
import { FondoCondominal } from 'src/app/models/fondoCondominal';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cuota-register',
  templateUrl: './cuota-register.component.html',
  styleUrls: ['./cuota-register.component.css'],
  providers: [CuotaService, DetalleCuotaService, FondoService],
})
export class CuotaRegisterComponent implements OnInit {
  public cuota: Cuota;
  public detalleCuota: DetalleCuota;
  constructor(
    private _cuotaService: CuotaService,
    public _detalleCuotaService: DetalleCuotaService,
    public _fondoService: FondoService
  ) {
    this.cuota = new Cuota(1, '', 0, 0);
    this.detalleCuota = new DetalleCuota(1, 0, 0, 0);
  }

  ngOnInit(): void {}
  onSubmit(form: any) {
    console.log('CUOTA:');
    console.log(this.cuota);
    this.detalleCuota.monto = this.cuota.monto;
    this.detalleCuota.fondoCondominal = 2;

    if (true) {
      this._cuotaService.register(this.cuota).subscribe({ // CUOTA
        next: (response: any) => {
          if (response.code == 201) {
            /**
             * response retorna en este caso el id de la cuota creada
             * con esto logramos relaciona la cuota creada con el detalleCuota
             * a crear
            */
            this.detalleCuota.cuota = response.ObjId; //Relacionamos la cuota recien creada con el detCuota
            console.log('DETALLE_CUOTA:');
            console.log(this.detalleCuota);
            // -------------------------
            this._detalleCuotaService.register(this.detalleCuota).subscribe({ // DETALLE_CUOTA
              next: (response2: any) => {
                console.log('Respuesta2:');
                console.log(response2);
                
                if ((response2.code == 200)) {
                  this._fondoService.getFondo(2).subscribe({// Obtenemos el los datos del fondo, ocupamos modificar el saldo
                    next: (response3: any) => {
                      let fondo = response3.data;

                      fondo.monto = Number(fondo.monto) + Number(this.detalleCuota.monto);//sumamos el fondo cuota anterior con el monto de la cuota
                      this._fondoService.editFondo(new FondoCondominal(fondo.id, fondo.monto)).subscribe({// FONDO_CONDOMINAL
                          next: (response3: any) => {
                            console.log(response3);
                            this.alertMessage('success','Exitoso!!',60000,'Se ha creado el usuario correctamente');
                          },
                          error: (er: any) => {
                            console.log('Error');
                            console.log(er);
                          },
                        });
                    },
                    error: (er: any) => {
                      console.log('Error');
                      console.log(er);
                      
                    },
                  });
                }
              },
              error: (er: any) => {
                console.log(er);
              },
            });

            form.reset();
          } else {
            this.alertMessage('success','Exitoso!!',60000,'Se ha creado el usuario correctamente');
          }
        },
        error: (er: any) => {
          console.log(er);
          if (er['error'].code == 406) {
            console.log('Entro');
            this.alertMessage(
              'error',
              'Oops...',
              60000,
              '<p>Datos enviados no cumplen con las reglas establecidas</p><span style="color:red">correo ya registrado<span/>'
            );
          }
        },
      });
    }
  }

  alertMessage(
    pIcon: SweetAlertIcon,
    pTitle: string,
    pTime: number,
    pHtml?: string
  ) {
    Swal.fire({
      icon: pIcon,
      title: pTitle,
      html: pHtml,
      timer: pTime,
    });
  }
}
