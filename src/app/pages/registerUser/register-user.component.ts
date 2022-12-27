import { Component, OnInit, ViewChild  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/firebase/auth/auth.service';
import { FirebaseErrorService } from 'src/app/services/firebase/Error/firebase-error.service';
import { UserService } from 'src/app/services/firebase/fireStore/user.service';
import { UserDataService } from 'src/app/services/servicesData/user-data.service';
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss'],
})
export class RegisterUserComponent implements OnInit {
  @ViewChild('popover') popover;
  registerUser: FormGroup;
  isOpen = false;
  messageError = '';
  loading = false;

  constructor(
    private fb: FormBuilder,
    private firebaseAuth: AuthService,
    private userService: UserService,
    private router: Router,
    private codeError: FirebaseErrorService,
    private dataUser: UserDataService,
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

  ngOnInit() {
  }

  register() {
    this.loading = true;
    this.userService.addUser({
      photoURL: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      name: this.registerUser.value.name,
      lastName: this.registerUser.value.lastname,
      email: this.registerUser.value.email,
      password: this.registerUser.value.password,
      birthday: this.registerUser.value.birthday,
      gender: this.registerUser.value.genders,
    });
    this.dataUser.userDataLogin({
      photoURL: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      name: this.registerUser.value.name,
      lastName: this.registerUser.value.lastname,
      email: this.registerUser.value.email,
      password: this.registerUser.value.password,
      birthday: this.registerUser.value.birthday,
      gender: this.registerUser.value.genders,
    });
    this.firebaseAuth.register({
      email: this.registerUser.value.email,
      password: this.registerUser.value.password,
    }).then(()=>{
      this.checkMail();
    }).catch((error)=>{
      this.loading = false;
      this.messageError = this.codeError.firebaseError(error.code);
      this.isOpen = true;
    });
  }

  checkMail() {
    this.firebaseAuth.checkMailAuth().then(()=>{
      this.router.navigate(['/login']);
    });
  }

}
