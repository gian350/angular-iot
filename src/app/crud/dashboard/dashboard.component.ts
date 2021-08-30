import { Component, OnInit } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';
import { DistrictService } from 'src/app/services/district.service';
import { SensorService } from 'src/app/services/sensor.service';
import { UserService } from 'src/app/services/user.service';
import { VariableService } from 'src/app/services/variable.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // Doughnut
  public doughnutChartLabelsUser: Label[] = ['Usuarios : '];
  public doughnutChartLabelsSensores: Label[] = ['Sensores : ']
  public doughnutChartLabelsVariables: Label[] = ['Variables : ']
  public doughnutChartLabelsDistritos: Label[] = ['Distritos : ']

  public doughnutChartDataUser: MultiDataSet = [[450],];
  public doughnutChartDataSensores: MultiDataSet = [[450],];
  public doughnutChartDataVariables: MultiDataSet = [[450],];
  public doughnutChartDataDistritos: MultiDataSet = [[450],];

  color1: Color[] = [{backgroundColor: ['#0396FF',]}];
  color2: Color[] = [{backgroundColor: ['#0396FF',]}];
  color3: Color[] = [{backgroundColor: ['#0396FF',]}];
  color4: Color[] = [{backgroundColor: ['#0396FF',]}];
  
  public doughnutChartLegend: boolean = false;

  public doughnutChartType: ChartType = 'doughnut';

  //contadores
  countUsers:number;
  countSensors:number;
  countDistricts:number;
  countVariables:number;

  constructor(private userService:UserService,
    private sensorService: SensorService,
    private districtService: DistrictService,
    private variableService: VariableService) { }

  ngOnInit(): void {

    this.userService.getUsers().subscribe((us) => {
      this.countUsers = us.length;
      this.doughnutChartDataUser = [[us.length],];
    });
    this.sensorService.getSensores().subscribe((se) => {
      this.countSensors = se.length;
      this.doughnutChartDataSensores = [[se.length],];
    });
    this.districtService.getDistricts().subscribe((di) => {
      this.countDistricts = di.length;
      this.doughnutChartDataDistritos = [[di.length],];
    });
    this.variableService.getVariables().subscribe((va) => {
      this.countVariables = va.length;
      this.doughnutChartDataVariables = [[va.length],];
    });
  }


  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }



}
