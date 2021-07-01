import { Component, OnInit, ViewChild  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User} from '../../shared/user';
import { TextFieldModule } from '@angular/cdk/text-field';
import {Router} from "@angular/router";// extraigo el router de la configuración del core de angular
import {UserService} from '../../services/user.service';
import {Loginuser} from '../../shared/loginuser';

import {MatDialog, MatDialogRef} from '@angular/material/dialog';
//import { DialogSpinnerComponent } from '../componentes/dialog-spinner/dialog-spinner.component';
import Swal from'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  feedbackForm: FormGroup;
  feedback: User;  
  //@ViewChild('fform') feedbackFormDirective;
  usersing: Loginuser;

  private emailPatron = /\S+@\S+\.\S+/;
  
  

  constructor(private fb: FormBuilder,private router: Router,
    private userService:UserService, public dialog: MatDialog) 
  { 
     
    this.createForm();
  }

  ngOnInit(): void {
  }

  
  createForm() {
    this.feedbackForm = this.fb.group({ 
      email: ['',[Validators.required, Validators.pattern(this.emailPatron)]],
      password: ['',[Validators.required]]
    });
    this.feedbackForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged(); // reestablecer los mensajes de validación*/
  }

  onSubmit() {
    /* this.feedback = this.feedbackForm.value;
     console.log(this.feedback);
     this.feedbackForm.reset(); // vuelve a null todos los formControl*/
     this.feedback = this.feedbackForm.value;
     console.log(this.feedback);
     //this.openDialogSpinner();
     this.showspinner();
     this.userService.getSignin(this.feedback.email,this.feedback.password).subscribe((logeo) => {
        this.usersing = logeo;
        console.log(this.usersing);
        setTimeout(() => {

          const token0 = "0";
          const token1 = "1";
          const token2 = "2";
          /*
          if(!this.usersing){
            this.showModaltoken0();
          }else{
            if(this.usersing.token = "1"){
              this.router.navigate(['/home']); 
              this.dialog.closeAll()
            }else{
              this.showModaltoken0();
            }
          }
          */

          switch(this.usersing.token) { 
            case token0: { //email incorrecto
               //statements; 
               this.showModaltoken0();
               break; 
            } 
            case token1: { //password incorrecto
               //statements; 
               this.showModaltoken1();
               
               break; 
            } 
            case token2: { //Usuario Correcto
              //statements; 
              this.showModaltoken2();
              break; 
            } 
            default: { //email incorrecto
               //statements; 
               this.showModaltoken0();
               break; 
            } 
         } 
          

        }, 1000);
      })

    // this.feedbackFormDirective.resetForm(); // este resetea el formulario osea la plantilla
     this.feedbackForm.reset({ // resetea el feedbackForm
       email: '',
       password: ''
     });
   }

  //--- Validaciones
  formErrors :any = {
    'email': '',
    'password': ''
  };

  //--- mensajes de validación
  validationMessages :any = {
    'password': {
      'required':      'La contraseña es requerida.',
      'minlength':     'Password must be at least 2 characters long.',
      'maxlength':     'Password cannot be more than 25 characters long.'
    },
    'email': {
      'required':      'El Email es requerido.',
      'pattern':       'Formato incorrecto de Email'
    }
  };
  
  onValueChanged(data?: any) { // recibe un dato o ninguno
    if (!this.feedbackForm) {
      return; // si el formulario no esta creado no retorna nada 
    }
    
    const form = this.feedbackForm; // form equivale al formulario en si

    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {// verifica si la propiedad "field" esta dentro de formErrors
        
        this.formErrors[field] = ''; // borrar el mensaje de error anterior (si corresponde) 
        const control = form.get(field); // obtenemos el AbstractControl segun el field osea campo
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field]; // obtiene los errores posibles y sus mensajes
          for (const key in control.errors) { // recorrer el 
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }
  

  /* abrir spinner dialog
  openDialogSpinner(){
    this.dialog.open(DialogSpinnerComponent, {width: '200px', height: '180px'});

  }*/

  showModaltoken2() {
    Swal.fire({
        title: 'Contraseña Incorrecta!',
        icon: 'error',
        width: '40%',
        heightAuto: false,
    });
  }

  showModaltoken0() {
    Swal.fire({
        title: 'Email Incorrecto!',
        icon: 'error',
        width: '40%',
        heightAuto: false,
    });
  }

  showModaltoken1() {
    Swal.fire({
        title: 'Usuario correcto',
        icon: 'success',
        width: '40%',
        heightAuto: false,
    }).then(()=> {this.router.navigate(['/home']);});
  }

  showspinner(){
    Swal.fire({
        title: 'Please Wait',
        allowEscapeKey: false,
        allowOutsideClick: false,
        width: '40%',
        showConfirmButton: false,
        heightAuto: false,
    });
    Swal.showLoading();
    
  }

  
}
