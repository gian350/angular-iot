import { Element } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { SensorService } from '../../services/sensor.service';
import { HistoryService } from '../../services/history.service';
import { Sensor } from '../../shared/sensor';
import { History } from '../../shared/history';
import { Nodo } from '../../shared/nodo';

import { Observable, of, Subject } from 'rxjs';


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

  //sensor
  listaSensores: Sensor[];
  listaMedidas: History[];

  //nodos
  listaNodo: Nodo[];

  constructor(private sensorService: SensorService,
    private historyService: HistoryService) {
    this.lat = -12.043384;
    this.lng = -77.043007;
    this.zoom = 12;
  }

  ngOnInit(): void {
    this.getsensores();
  }

  getsensores() {

    this.listaNodo = new Array<Nodo>();
    // retornar medidas actuales
    this.historyService.getMedidaActuales().subscribe((med) => {
      this.listaMedidas = med;
      //retornar sensores
      this.sensorService.getSensores().subscribe((listaSen) => {
        this.listaSensores = listaSen;

        this.getNodos(this.listaSensores, this.listaMedidas);

        console.log(this.listaSensores);
        console.log("++++++++++++++");
        console.log(this.listaMedidas);
        console.log(this.listaNodo);

      })
    });

  }

  getNodos(array1: Sensor[], array2: History[]) {

    array1.forEach((element1) => {
      array2.forEach((element2) => {
        if (element1._id == element2.sensorId) {
          let nodo = new Nodo();
          nodo.sensor = element1;
          nodo.history = element2;
          this.listaNodo.push(nodo);
        }
      });
    });

  }



}
