import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/firebase/auth/auth.service';
import { FirebaseErrorService } from 'src/app/services/firebase/Error/firebase-error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginUser: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private firebaseAuth: AuthService,
    private router: Router,
    private codeError: FirebaseErrorService,
  ) {
    this.loginUser = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() { }

  login() {
    console.log(this.loginUser.value.email);
    this.loading = true;
    this.firebaseAuth.login({
      email: this.loginUser.value.email,
      password: this.loginUser.value.password,
    }).then((user)=>{
      this.loading = false;
      if(user.user.emailVerified){
        this.router.navigate(['/tab0']);
      }
      this.router.navigate(['/recuperarEmail']);
    }).catch((error)=>{
      this.loading = false;
    });
  }

}
