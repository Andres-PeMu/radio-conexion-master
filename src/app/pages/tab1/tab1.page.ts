import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firebase/fireStore/Firestore.service';

import { Router } from '@angular/router';

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
    private router: Router,
    ) {}

  ngOnInit(): void {
    this.firestoreService.getNews().subscribe(news => {
      this.data= news;
    });
  }

}
