import { Component, OnInit, Input, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FirestoreService } from 'src/app/services/firebase/fireStore/Firestore.service';

import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import News from 'src/app/interface/News.interface';
import { CommentsService } from 'src/app/services/firebase/fireStore/comments.service';
import { UserDataService } from 'src/app/services/servicesData/user-data.service';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent implements OnInit {
  @Input() data= [];
  @ViewChild(IonModal) modal: IonModal;
  numCommt;
  like: boolean;
  constructor(
    private firestoreService: FirestoreService,
    private router: Router,
    private commentService: CommentsService,
    private dataUser: UserDataService,
  ) { }

  ngOnInit() {}

  detailNews(){
    this.router.navigate(['tab0/tab2']);
    this.modal.dismiss(null, 'cancel');
  }

  deleteNews(dat: News){
    this.firestoreService.deleteNews(dat)
    .then()
    .catch();
    this.modal.dismiss(dat.id, 'cancel');
  }

  numberCommentchild(num){
    this.numCommt = num;
  }

}
