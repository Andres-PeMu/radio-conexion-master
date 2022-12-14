import { Component, OnInit, Input } from '@angular/core';
import { FirestoreService } from 'src/app/services/firebase/fireStore/Firestore.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent implements OnInit {
  @Input() data= [];

  constructor(
  ) { }

  ngOnInit() {}

}
