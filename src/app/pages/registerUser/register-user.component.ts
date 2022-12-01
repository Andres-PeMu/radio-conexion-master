import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/firebase/auth/auth.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss'],
})
export class RegisterUserComponent implements OnInit {

  registerUser: FormGroup;

  constructor(
    private fb: FormBuilder,
    private firebaseAuth: AuthService,
    private router: Router,
  ) {
    this.registerUser = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      birthday: ['', Validators.required],
      genders: ['', Validators.required],
    });
  }

  ngOnInit() { }

  register() {
    console.log(this.registerUser);
    this.firebaseAuth.register({
      email: this.registerUser.value.email,
      password: this.registerUser.value.password,
    }).then(()=>{
      this.checkMail();
    }).catch(()=>{

    });
  }

  checkMail() {
    this.firebaseAuth.checkMailAuth().then(()=>{
      this.router.navigate(['/login']);
    });
  }

}
