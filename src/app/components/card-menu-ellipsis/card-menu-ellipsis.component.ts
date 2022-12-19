import { Component, OnInit, Input, ViewChild } from '@angular/core';
import News from 'src/app/interface/news.interface';

import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/firebase/fireStore/Firestore.service';

@Component({
  selector: 'app-card-menu-ellipsis',
  templateUrl: './card-menu-ellipsis.component.html',
  styleUrls: ['./card-menu-ellipsis.component.scss'],
})
export class CardMenuEllipsisComponent implements OnInit {
  @Input() dat: News;
  @ViewChild(IonModal) modal: IonModal;

  constructor(
    private firestoreService: FirestoreService,
    private router: Router,
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

}
