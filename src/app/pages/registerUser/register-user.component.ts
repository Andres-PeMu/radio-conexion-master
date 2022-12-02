import { Component, OnInit, ViewChild  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/firebase/auth/auth.service';
import { FirebaseErrorService } from 'src/app/services/firebase/Error/firebase-error.service';

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
    private router: Router,
    private codeError: FirebaseErrorService,
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
    this.loading = true;
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
