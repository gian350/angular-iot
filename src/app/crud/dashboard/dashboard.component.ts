import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // Doughnut
  public doughnutChartLabels: Label[] = ['Download Sales'];
  public doughnutChartData: MultiDataSet = [[450],];
  color1: Color[] = [{backgroundColor: ['#0396FF',]}];
  color2: Color[] = [{backgroundColor: ['#0396FF',]}];
  color3: Color[] = [{backgroundColor: ['#0396FF',]}];
  color4: Color[] = [{backgroundColor: ['#0396FF',]}];
  public doughnutChartLegend: boolean = false;

  public doughnutChartType: ChartType = 'doughnut';

  

  constructor() { }

  ngOnInit(): void {
  }


  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }



}
