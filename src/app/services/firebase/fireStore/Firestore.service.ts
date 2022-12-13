import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import News from 'src/app/interface/news.interface';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore) { }

  addNews(news: News) {
    const newsRef = collection(this.firestore, 'news');
    return addDoc(newsRef, news);
  }

  getNews(): Observable<News[]> {
    const newsRef = collection(this.firestore, 'news');
    return collectionData(newsRef, { idField: 'id' }) as Observable<News[]>;
  }
}
