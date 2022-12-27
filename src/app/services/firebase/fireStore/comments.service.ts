import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, updateDoc, getDoc, setDoc } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

import Comment from 'src/app/interface/comment.interface';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private firestore: Firestore) { }

  async addComment(comment) {
    const commentsRef = collection(this.firestore, `${comment.id.toString()}`);
    return await addDoc(commentsRef, {
      id: comment.id,
      photoURL: comment.photoURL,
      name: comment.name,
      lastName: comment.lastName,
      comment: comment.comment,
    });
  }

  getComment(comment) {
    const commentsRef = collection(this.firestore, `${comment.id.toString()}`);
    return collectionData(commentsRef, { idField: 'id' }) as Observable<any>;
  }

}


