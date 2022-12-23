import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/firebase/auth/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/firebase/fireStore/user.service';
import { UserDataService } from 'src/app/services/servicesData/user-data.service';
@Component({
  selector: 'app-with-google',
  templateUrl: './with-google.component.html',
  styleUrls: ['./with-google.component.scss'],
})
export class WithGoogleComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private firestore: UserService,
    private dataUser: UserDataService,
  ) { }

  ngOnInit() {}

  googleAuth(){
    this.authService.loginWinthGoogle()
    .then((user) =>{
      this.firestore.addUser({
        photoURL: user.user.photoURL,
        name: user.user.displayName,
        lastName: user.user.displayName,
        email: user.user.email,
        password: '',
        birthday: '',
        gender: '',
      });
      this.dataUser.userDataLogin({
        photoURL: user.user.photoURL,
        name: user.user.displayName,
        lastName: user.user.displayName,
        email: user.user.email,
        password: '',
        birthday: '',
        gender: '',
      });
      this.router.navigate(['/tab0']);
    });
  }

  facebookAuth(){
    this.authService.loginWinthFacebook().then((res: any) =>{
      console.log(res);
      this.router.navigate(['/tab0']);
    });
  }

}
