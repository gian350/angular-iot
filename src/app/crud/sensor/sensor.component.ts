import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.scss']
})
export class SensorComponent implements OnInit {

  lat: number;
  lng: number;
  zoom: number;
  mapTypeId: string; 

  constructor() { 
    this.lat = 40;
    this.lng = -3;
    this.zoom = 6;
    this.mapTypeId = 'hybrid';
  }

  ngOnInit(): void {
  }

}
