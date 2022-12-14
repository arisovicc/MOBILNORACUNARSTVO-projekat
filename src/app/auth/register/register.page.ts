import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;

  constructor() { }

  ngOnInit() {

  this.registerForm = new FormGroup({ //kroz validatore stavljamo da su ova polja obavezna
    name: new FormControl('Ana', Validators.required),
    surname: new FormControl(null,Validators.required),
    email: new FormControl (null, [Validators.required, Validators.email]), //ovde porosledjujemo niz
    password: new FormControl(null, [Validators.required, Validators.minLength(7)])
});
}


onRegister() {
  console.log(this.registerForm);
}

}
