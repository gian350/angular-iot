import { formatDate } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartDataSets } from 'chart.js';
import { Color } from 'ng2-charts';
import { elementAt } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';

// History service
import { HistoryService } from "../../../services/history.service";
import { History } from '../../../shared/history';
import { Sensor } from 'src/app/shared/sensor';
import { SensorService } from 'src/app/services/sensor.service';


interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss']
})
export class LinechartComponent implements OnInit {

  // Linea char
  public lineChartData: ChartDataSets[] = [
    { data: [], label: '' }
  ];

  // Color char
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  //charts component
  chart: Chart;

  // variables de history
  listaHistorias: History[];
  date: Date;
  sensor: string;
  listaHistorialesxSensor: History[];
  promedioXmesHistorial: number[];

  // select form
  listaSensores: Sensor[];
  selectedvalue: Sensor;


  form: FormGroup;
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];
  cars: Car[] = [
    { value: 'volvo', viewValue: 'Volvo' },
    { value: 'saab', viewValue: 'Saab' },
    { value: 'mercedes', viewValue: 'Mercedes' }
  ];
  foodControl = new FormControl(this.foods[2].value);
  carControl = new FormControl(this.cars[1].value);

  constructor(private historyService: HistoryService,
    private sensorService: SensorService) {
    this.form = new FormGroup({
      food: this.foodControl,
      car: this.carControl
    });
    this.selectedvalue = new Sensor();
    this.selectedvalue._id= "3";
    this.selectedvalue.name="sensor3";
  }

  ngOnInit(): void {

    // recuperar los sensores

    this.sensorService.getSensores().subscribe((listaSen) => {
      this.listaSensores = listaSen;
      console.log(this.listaSensores);
    })

    // recuperar historia por sensor
    this.historyService.getHistories().subscribe((listhis) => {

      this.listaHistorias = listhis;
      const formattedDate = this.cambiarFormato(this.listaHistorias[0].date)

      console.log(formattedDate);
    });
    this.sensor = String(this.selectedvalue._id);
    console.log(this.selectedvalue);
    this.historyService.getHistoriesXsensor(this.sensor).subscribe((listhisxsensor) => {
      this.listaHistorialesxSensor = listhisxsensor;
      this.promedioXmesHistorial = this.calcularPromedioMensual(listhisxsensor);

      this.lineChartData[0].data = this.promedioXmesHistorial;
      this.lineChartData[0].label = String(this.selectedvalue.name);

      this.crearlinechart();
      console.log("-------------")
      //console.log(listhisxsensor);
    });

  }


  cambiarFormato(fecha: Date) {
    const format = 'dd/MM/yyyy';
    const myDate = fecha;
    const locale = 'en-US';
    const formattedDate = formatDate(myDate, format, locale);
    return formattedDate;
  }

  crearlinechart() {
    this.chart = new Chart("canvas", {
      type: "line",
      data: {
        labels: ["En", "Fe", "Mar", "Ab", "May", "Jun", "Jul", "Ago"],
        datasets: [{
          label: this.lineChartData[0].label,
          data: this.lineChartData[0].data,
          backgroundColor: this.lineChartColors[0].backgroundColor,
          borderColor: this.lineChartColors[0].borderColor,
          pointBackgroundColor: this.lineChartColors[0].pointBackgroundColor,
          pointBorderColor: this.lineChartColors[0].pointBorderColor,
          pointHoverBackgroundColor: this.lineChartColors[0].pointBackgroundColor,
          pointHoverBorderColor: this.lineChartColors[0].pointHoverBorderColor,
          fill: true,
        }
        ]
      }
    }
    )
  }


  calcularPromedioMensual(lista: History[]) {

    const vectorMeses = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    //const vectorPromedioMensual: [] | any ;
    const vectorSuma: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const vectorCantidad: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const vectorPromedio: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    // vectorSuma.forEach(element => element = 0);
    // vectorCantidad.forEach(element => element = 0);
    // vectorPromedio.forEach(element => element = 0);
    

    lista.forEach(element => {
      const fechaReal = this.cambiarFormato(element.date)
      const mesReal = this.getMonth(fechaReal);
      console.log(mesReal);


      switch (mesReal) {
        case vectorMeses[0]: { //email incorrecto
          //statements; 
          vectorSuma[0] += Number(element.value);
          vectorCantidad[0] += 1;
          break;
        }
        case vectorMeses[1]: { //password incorrecto
          //statements; 
          vectorSuma[1] += Number(element.value);
          vectorCantidad[1] += 1;
          break;
        }
        case vectorMeses[2]: { //password incorrecto
          //statements; 
          vectorSuma[2] += Number(element.value);
          vectorCantidad[2] += 1;
          break;
        }
        case vectorMeses[3]: { //password incorrecto
          //statements; 
          vectorSuma[3] += Number(element.value);
          vectorCantidad[3] += 1;
          break;
        }
        case vectorMeses[4]: { //password incorrecto
          //statements; 
          vectorSuma[4] += Number(element.value);
          vectorCantidad[4] += 1;
          break;
        }
        case vectorMeses[5]: { //password incorrecto
          //statements; 
          vectorSuma[5] += Number(element.value);
          vectorCantidad[5] += 1;
          break;
        }
        case vectorMeses[6]: { //password incorrecto
          //statements; 
          vectorSuma[6] += Number(element.value);
          vectorCantidad[6] += 1;
          break;
        }
        case vectorMeses[7]: { //password incorrecto
          //statements; 
          vectorSuma[7] += Number(element.value);
          vectorCantidad[7] += 1;
          break;
        }
        case vectorMeses[8]: { //password incorrecto
          //statements; 
          vectorSuma[8] += Number(element.value);
          vectorCantidad[8] += 1;
          break;
        }
        case vectorMeses[9]: { //password incorrecto
          //statements; 
          vectorSuma[9] += Number(element.value);
          vectorCantidad[9] += 1;
          break;
        }
        case vectorMeses[10]: { //password incorrecto
          //statements; 
          vectorSuma[10] += Number(element.value);
          vectorCantidad[10] += 1;
          break;
        }
        case vectorMeses[11]: { //password incorrecto
          //statements; 
          vectorSuma[11] += Number(element.value);
          vectorCantidad[11] += 1;
          break;
        }
      }
    });

    for (let i = 0; i < vectorMeses.length; i++) {
      if (vectorCantidad[i] != 0) vectorPromedio[i] = Math.round(((vectorSuma[i] / vectorCantidad[i]) + Number.EPSILON) * 100) / 100;

    }
    return vectorPromedio;
  }


  getMonth(fecha: string) {
    const mes = fecha.substr(3, 2); // tengo el mes
    return mes;
  }

  updateChart(selectedvalue:Sensor) {
    selectedvalue = new Sensor();
    selectedvalue._id= "2";
    selectedvalue.name="sensor2";
    
    this.selectedvalue  = selectedvalue;
    this.sensor = String(this.selectedvalue._id);
    console.log(this.selectedvalue._id);
    console.log(this.sensor);
    this.historyService.getHistoriesXsensor(this.sensor).subscribe((listhisxsensor) => {
      this.listaHistorialesxSensor = listhisxsensor;
      this.promedioXmesHistorial = this.calcularPromedioMensual(listhisxsensor);

      this.lineChartData[0].data = this.promedioXmesHistorial;
      this.lineChartData[0].label = String(this.selectedvalue.name);

      this.crearlinechart();
      console.log("-------------")
      //console.log(listhisxsensor);
    });

    this.chart.update(); // This re-renders the canvas element.
  }

}
