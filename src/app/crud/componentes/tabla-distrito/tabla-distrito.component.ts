import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {District} from '../../../shared/district';
import {DistrictService} from '../../../services/district.service';




@Component({
  selector: 'app-tabla-distrito',
  templateUrl: './tabla-distrito.component.html',
  styleUrls: ['./tabla-distrito.component.scss']
})
export class TablaDistritoComponent implements OnInit {

  ListaUsuarios : District[] = [];

  displayedColumns: string[] = ['_id', 'Distrito', 'Provincia', 'Region','Acciones'];
  dataSource!:MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private districtService: DistrictService 
  ) {}

  ngOnInit(): void {
    this.cargardistritos()
  }

  cargardistritos(){
    /*  
    this.ListaUsuarios = this.districtService.getlista();
    this.dataSource = new MatTableDataSource(this.ListaUsuarios);
    */
    
    this.districtService.getDistricts().subscribe((listdis)=> {
      this.ListaUsuarios = listdis;
      this.dataSource = new MatTableDataSource(this.ListaUsuarios);
      this.dataSource.paginator = this.paginator;
    });
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}

