import { Component, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('popover') popover;
  loginUser: FormGroup;
  isOpen = false;
  messageError = '';
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
    this.loading = true;
    this.firebaseAuth.login({
      email: this.loginUser.value.email,
      password: this.loginUser.value.password,
    }).then((user)=>{
      this.loading = false;
      console.log(user);
      console.log(user.user.emailVerified);
      if(user.user.emailVerified){
        return this.router.navigate(['/tab0']);
      }
      if(!user.user.emailVerified){
        return this.router.navigate(['/validarEmail']);
      }
    }).catch((error)=>{
      this.loading = false;
      console.log(error.code);
      this.messageError = this.codeError.firebaseError(error.code);
      this.isOpen = true;
    });
  }

}
