import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, updateDoc, getDoc, setDoc } from '@angular/fire/firestore';
import Comment from 'src/app/interface/comment.interface';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private firestore: Firestore) { }

  async addComment(comment) {
    const commentsRef = collection(this.firestore, `${comment.id.toString()}`);
    await setDoc(doc(commentsRef), {
      id: comment.id,
      photoURL: comment.photoURL,
      name: comment.name,
      lastName: comment.lastName,
      comment: comment.comment,
    });
  }

}


