import { Component, OnInit } from '@angular/core';
import { CondominoService } from '../../../services/condomino.service';


@Component({
  selector: 'app-condomino-list',
  templateUrl: './condomino-list.component.html',
  styleUrls: ['./condomino-list.component.css'],
  providers: [CondominoService]
})
export class CondominoListComponent implements OnInit {

  public condominos: any;
  constructor(public _CondominoService: CondominoService) {
    this.loadCondo();
   }

   ngOnInit(): void {
  }




  loadCondo() {
    this._CondominoService.getCondominos().subscribe({
      next: (response: any) => {
        
        if (response.status == "success") {
          console.log('Datos');
          
          console.log(response.data);
          
          this.condominos = response.data;
        }else{
          this.condominos=null;
        }
        console.log(response);
      },
      error: (err: Error) => {
        console.log('Estamos en el error');
        
        console.log(err);
      },
    });
  }

 

}
