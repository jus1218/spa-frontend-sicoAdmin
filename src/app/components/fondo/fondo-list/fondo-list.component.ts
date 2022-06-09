import { Component, OnInit } from '@angular/core';
import { FondoService } from '../../../services/fondo.service';

@Component({
  selector: 'app-fondo-list',
  templateUrl: './fondo-list.component.html',
  styleUrls: ['./fondo-list.component.css'],
  providers:[FondoService]
})
export class FondoListComponent implements OnInit {

  public fondo:any;
  constructor(public _fondoService: FondoService) {
    this.loadFondo();
   }
  loadFondo() {
    console.log('entro');
    
    this._fondoService.getFondos().subscribe({
      next: (response: any) => {
        if (response.status == 'success') {
          console.log(response);
          
          this.fondo = response.data;
        } else {
          this.fondo = null;
          console.log(response);
        }
      },
      error: (err: Error) => {
        console.log('Estamos en el error');
        console.log(err);
      },
    });
  }

  ngOnInit(): void {
    
  }

}
