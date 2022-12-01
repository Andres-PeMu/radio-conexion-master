import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/firebase/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-with-google',
  templateUrl: './with-google.component.html',
  styleUrls: ['./with-google.component.scss'],
})
export class WithGoogleComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {}

  googleAuth(){
    this.authService.loginWinthGoogle().then((res: any) =>{
      console.log(res);
      this.router.navigate(['/tab0']);
    });
  }

}
