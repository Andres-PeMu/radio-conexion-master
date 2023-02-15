import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firebase/fireStore/Firestore.service';
import { LocalStorageUserService } from 'src/app/services/localStorage/user.service';
import { UserDataService } from 'src/app/services/servicesData/user-data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class Tab1Page implements OnInit {
  data= [];
  isModalOpen = false;

  constructor(
    private firestoreService: FirestoreService,
    private localStorageUserService: LocalStorageUserService,
    private dataUser: UserDataService
    ) {}

  ngOnInit(): void {
    this.firestoreService.getNews().subscribe(news => {
      this.data= news;
    });
    const datUser = this.localStorageUserService.getItem();
    const { photoURL, name, lastName, email, password, birthday, gender } = datUser;
    this.dataUser.userDataLogin({
      photoURL,
      name,
      lastName,
      email,
      password,
      birthday,
      gender,
    });
  }

}
