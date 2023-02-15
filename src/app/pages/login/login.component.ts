import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/firebase/auth/auth.service';
import { FirebaseErrorService } from 'src/app/services/firebase/Error/firebase-error.service';
import { UserService } from 'src/app/services/firebase/fireStore/user.service';
import { LocalStorageUserService } from 'src/app/services/localStorage/user.service';
import { UserDataService } from 'src/app/services/servicesData/user-data.service';

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
    private userService: UserService,
    private dataUser: UserDataService,
    private localStorageUserService: LocalStorageUserService,
  ) {
    this.loginUser = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {
  }

  login() {
    this.loading = true;
    this.userService.getUser( this.loginUser.value.email.toString() ).then( (user) => {
      const datUser = user.data();
      const { photoURL, name, lastName, email, password, birthday, gender } = datUser;
      this.localStorageUserService.postItem({
        photoURL,
        name,
        lastName,
        email,
        password: '',
        birthday,
        gender,
      });
      this.dataUser.userDataLogin({
        photoURL,
        name,
        lastName,
        email,
        password,
        birthday,
        gender,
      });
    });
    this.firebaseAuth.login({
      email: this.loginUser.value.email,
      password: this.loginUser.value.password,
    }).then((user)=>{
      this.loading = false;
      if(user.user.emailVerified){
        return this.router.navigate(['/tab0']);
      }
      if(!user.user.emailVerified){
        return this.router.navigate(['/validarEmail']);
      }
    }).catch((error)=>{
      this.loading = false;
      this.messageError = this.codeError.firebaseError(error.code);
      this.isOpen = true;
    });
  }

}
