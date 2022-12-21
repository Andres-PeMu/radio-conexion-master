import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import News from 'src/app/interface/News.interface';

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
  @Output() datDetail = new EventEmitter<News>();
  @ViewChild(IonModal) modal: IonModal;

  constructor(
    private firestoreService: FirestoreService,
    private router: Router,
  ) { }

  ngOnInit() {}

  detailNews(dat: News){
    this.datDetail.emit(dat);
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
