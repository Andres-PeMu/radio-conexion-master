import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/firebase/auth/auth.service';
import { FirebaseErrorService } from 'src/app/services/firebase/Error/firebase-error.service';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss'],
})
export class RecoverPasswordComponent implements OnInit {
  @ViewChild('popover') popover;
  isOpen = false;
  messageError = '';
  loading = false;
  recoverPassword: FormGroup;

  constructor(
    private fb: FormBuilder,
    private codeError: FirebaseErrorService,
    private firebaseAuth: AuthService,
    private router: Router,
    ) {
    this.recoverPassword = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit() {}

  recoverPasswordUser(){
    this.firebaseAuth.recoverPassword(this.recoverPassword.value.email)
    .then(()=>{
      this.router.navigate(['/tab0']);
    }).catch((error)=>{
      console.log(error.code);
      this.messageError = this.codeError.firebaseError(error.code);
      this.isOpen = true;
    });
  }

}
