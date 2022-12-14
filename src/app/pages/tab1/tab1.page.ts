import { Component, OnInit, ViewChild } from '@angular/core';
import { FirestoreService } from 'src/app/services/firebase/fireStore/Firestore.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  isModalOpen = false;
  public data= [];
  public results= [...this.data];


  constructor(
    private firestoreService: FirestoreService,
    private router: Router,
    ) {}





  ngOnInit(): void {
    this.firestoreService.getNews().subscribe(news => {
      console.log(news);
      this.data= news;
      this.results= [...this.data];
    });
  }

}
