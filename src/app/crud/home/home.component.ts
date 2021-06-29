import { Component, OnInit } from '@angular/core';
import {District} from '../../shared/district';
import {DistrictService} from '../../services/district.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  districts: District[] = [];
  name: string= '';

  constructor(private districtService: DistrictService) {
    this.name="hola DARIUS / CARLOS / BRUNO / JESPOL Marikong"
   }

  ngOnInit(): void {
    this.districtService.getDistrict().subscribe(dis => this.districts = dis)
  }

 

}
