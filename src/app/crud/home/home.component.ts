import { Component, OnInit } from '@angular/core';
import {district} from '../../shared/district';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  districts: district[] = [];
  name: string= '';

  constructor(private UserService: UserService) {
    this.name="hola DARIUS / CARLOS / BRUNO / JESPOL Marikong"
   }

  ngOnInit(): void {
    this.UserService.getDistrict().subscribe(dis => this.districts = dis)
  }

 

}
