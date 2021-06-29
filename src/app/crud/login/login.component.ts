import { Component, OnInit, ViewChild  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User} from '../../shared/user';
import { TextFieldModule } from '@angular/cdk/text-field';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  feedbackForm: FormGroup;
  feedback: User;  
  //@ViewChild('fform') feedbackFormDirective;

  private emailPatron = /\S+@\S+\.\S+/;
  
  

  constructor(private fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit(): void {
  }

  
  createForm() {
    this.feedbackForm = this.fb.group({ 
      email: ['',[Validators.required, Validators.pattern(this.emailPatron)]],
      password: ['',[Validators.required]]
    });
    
    this.feedbackForm.valueChanges 
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // reestablecer los mensajes de validación*/
  }

  onSubmit() {
    /* this.feedback = this.feedbackForm.value;
     console.log(this.feedback);
     this.feedbackForm.reset(); // vuelve a null todos los formControl*/
     this.feedback = this.feedbackForm.value;
     console.log(this.feedback);

    // this.feedbackFormDirective.resetForm(); // este resetea el formulario osea la plantilla
     this.feedbackForm.reset({ // resetea el feedbackForm
       email: '',
       password: ''
     });
   }



  formErrors :any = {
    'email': '',
    'password': ''
  };

   // mensajes de validación
  validationMessages :any = {
    'password': {
      'required':      'Password is required.',
      'minlength':     'Password must be at least 2 characters long.',
      'maxlength':     'Password cannot be more than 25 characters long.'
    },
    'email': {
      'required':      'Email is required.',
      'pattern':       'Email not in valid format.'
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
  


  

}
