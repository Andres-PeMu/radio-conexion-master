import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, updateDoc, getDoc, getDocs, setDoc } from '@angular/fire/firestore';
import News from 'src/app/interface/News.interface';
import User from 'src/app/interface/User.interface';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore) { }

  addNews(news: News) {
    const newsRef = collection(this.firestore, 'news');
    return addDoc(newsRef, news);
  }

  async addUser(user: User) {
    const usersRef = collection(this.firestore, 'users');
    const docRef = doc(this.firestore, 'users', `${user.email.toString()}`);
    const docSnap = await getDoc(docRef);
    if (!(docSnap.exists())) {
      await setDoc(doc(usersRef, `${user.email.toString()}`), {
        photoURL: user.photoURL,
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        birthday: user.birthday,
        gender: user.gender,
      });
    }
  }

  getNews(): Observable<News[]> {
    const newsRef = collection(this.firestore, 'news');
    return collectionData(newsRef, { idField: 'id' }) as Observable<News[]>;
  }

  deleteNews(news: News) {
    const newsDocRef = doc(this.firestore, `news/${news.id}`);
    return deleteDoc(newsDocRef);
  }

  editNews(news) {
    const newsDocRef = doc(this.firestore, `news/${news.id}`);
    return updateDoc(newsDocRef, news);
  }

}
