import { Component, OnInit, ViewChild } from '@angular/core';
import { FirestoreService } from 'src/app/services/firebase/fireStore/Firestore.service';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import News from 'src/app/interface/news.interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  public data= [];
  public results= [...this.data];
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string;

  constructor( private firestoreService: FirestoreService ) {}

  handleChange(event) {
    const query = event.target.value.toLowerCase();
    console.log(this.results);
    this.results = this.data.filter(d => d.title.toLowerCase().indexOf(query) > -1);
  }

  newNews(event){
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  ngOnInit(): void {
    this.firestoreService.getNews().subscribe(news => {
      console.log(news);
      this.data= news;
      this.results= [...this.data];
    });
  }

}
