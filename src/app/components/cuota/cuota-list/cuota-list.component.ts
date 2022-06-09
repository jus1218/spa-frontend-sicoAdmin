import { Component, OnInit } from '@angular/core';
import { CuotaService } from '../../../services/cuota.service';

@Component({
  selector: 'app-cuota-list',
  templateUrl: './cuota-list.component.html',
  styleUrls: ['./cuota-list.component.css'],
  providers: [CuotaService],
})
export class CuotaListComponent implements OnInit {
  public cuotas: any;

  constructor(public _cuotaService: CuotaService) {
    this.loadCoutas();
  }

  ngOnInit(): void {}
  loadCoutas() {
    this._cuotaService.getCuotas().subscribe({
      next: (response: any) => {
        if (response.status == 'success') {
          console.log('Datos');

          console.log(response.data);

          this.cuotas = response.data;
        } else {
          this.cuotas = null;
        }
        //console.log('hola'+response.status);
        
        console.log(response);
      },
      error: (err: Error) => {
        console.log('Estamos en el error');
        console.log(err);
      },
    });
  }
}
