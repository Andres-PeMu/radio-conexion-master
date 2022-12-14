import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firebase/fireStore/Firestore.service';

@Component({
  selector: 'app-modal-search',
  templateUrl: './modal-search.component.html',
  styleUrls: ['./modal-search.component.scss'],
})
export class ModalSearchComponent implements OnInit {
  isModalOpen = false;
  public data= [];
  public results= [];

  constructor( private firestoreService: FirestoreService ) { }

  ngOnInit() {
    this.firestoreService.getNews().subscribe(news => {
      console.log(news);
      this.data= news;
    });
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  handleChange(event) {
    const query = event.target.value.toLowerCase();
    if(query.length !== 0){
      return this.results = this.data.filter(d => d.title.toLowerCase().indexOf(query) > -1);
    }
    return this.results= [];
  }

}
