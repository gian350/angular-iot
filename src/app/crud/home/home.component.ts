import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {BreakpointObserver} from '@angular/cdk/layout';
import { Params, ActivatedRoute, ParamMap } from '@angular/router';
import { LoginComponent } from '../login/login.component';

// Modelos
import {District} from '../../shared/district';
import {Loginuser} from '../../shared/loginuser';

// Servicios
import {DistrictService} from '../../services/district.service';
import {UserService} from '../../services/user.service';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // diseño de sidebar
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  // variables de negocio
  districts: District[] = [];
  usuarioLogin: User | any;
  name: String= '';
  dni: string | any= '' ;
  url:string;
  fotourl: string;

  constructor(
    private districtService: DistrictService,
    private userService: UserService,
    private route: ActivatedRoute,
    private observer: BreakpointObserver
  ) 
  {
    this.name= "Hola Mundo"
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.dni = params.get('dni');
    });
    this.districtService.getDistricts().subscribe(dis => this.districts = dis);
    this.userService.getUser(this.dni).subscribe((user) => {
      console.log(user);
      this.usuarioLogin = user;

      if(this.usuarioLogin.photo == 0){
        this.fotourl = "../../../assets/img/default.jpg";
        console.log(this.fotourl);
      }else{
        this.fotourl = "../../../assets/img/"+this.dni+".jpg";
        console.log(this.fotourl);
      }

    });
    
    
    
    
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }

 

}
