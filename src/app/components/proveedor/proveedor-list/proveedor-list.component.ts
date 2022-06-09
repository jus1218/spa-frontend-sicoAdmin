import { Component, OnInit } from '@angular/core';
import { ProveedorService } from '../../../services/proveedor.service';
import { Proveedor } from '../../../models/proveedor';

@Component({
  selector: 'app-proveedor-list',
  templateUrl: './proveedor-list.component.html',
  styleUrls: ['./proveedor-list.component.css'],
  providers: [ProveedorService],
})
export class ProveedorListComponent implements OnInit {
  public proveedores: any;
  constructor(public _proveedorService: ProveedorService) {
    this.loadProveedores();
  }

  ngOnInit(): void {}

  loadProveedores() {
    this._proveedorService.getProveedores().subscribe({
      next: (res) => {
        if (res.status == 'success') {
          this.proveedores = res.data;
        } else this.proveedores = null;
      },
      error: (er) => console.log(er),
    });
  }
}
