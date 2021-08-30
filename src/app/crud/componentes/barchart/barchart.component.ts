import { formatDate } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartDataSets } from 'chart.js';
import { Color } from 'ng2-charts';
import { elementAt } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit {

  // variables
  selectedvalue: any;
  listaTipos: any = ["Lleno", "Vacio", "Semilleno"];

  public lineChartData: ChartDataSets[] = [
    { data: [5427, 5243, 5514, 3933, 1326, 687, 1271, 1638], label: '' }
  ];


  constructor() {

  }



  ngOnInit(): void {

    //----
    this.createbarchar();

    //----

  }

  createbarchar(): Chart{

  var myChart = new Chart("myChart", {
    type: 'bar',
    data: {
      labels: ["En", "Fe", "Mar", "Ab", "May", "Jun", "Jul", "Ago"],
      datasets: [{
        label: 'Vacios',
        data: [12, 19, 3, 5, 10, 3, 9, 8],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(196, 172, 246, 0.2)',
          'rgba(80, 236, 97, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(196, 172, 246, 1)',
          'rgba(80, 236, 97, 1)'
        ],
        borderWidth: 1
      }]
    }
  });

  return myChart;

}


}
