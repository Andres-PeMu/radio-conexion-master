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

  async addLike(like) {
    const likeUserRef = collection(this.firestore, `${like.email.toString()}like`);
    const likeRef = collection(this.firestore, `${like.id.toString()}like`);
    const docRef = doc(likeUserRef, `${like.id.toString()}`);
    const docUserRef = doc(likeUserRef, `${like.id.toString()}like`);
    const docSnap = await getDoc(docRef);
    if (!(docSnap.exists())) {
      await setDoc(doc(likeUserRef, `${like.id.toString()}`), {
        id: `${like.id.toString()}`,
      });
      await setDoc(doc(likeRef, `${like.id.toString()}`), {
        id: `${like.id.toString()}`,
        photoURL: like.photoURL,
        name: like.name,
        lastName: like.lastName,
      });
      return true;
    } else {
      await deleteDoc(docRef);
      await deleteDoc(docUserRef);
      return false;
    }
  }

  async getlike(like){
    const likeUserRef = collection(this.firestore, `${like.email.toString()}like`);
    const docUserRef = doc(likeUserRef, `${like.id.toString()}`);
    const docSnap = await getDoc(docUserRef);
    if (docSnap.exists()) { return { exists: true };  }
    return { exists: false };
  }

  getLikes(like) {
    const likeRef = collection(this.firestore, `${like.id.toString()}like`);
    return collectionData(likeRef, { idField: 'id' }) as Observable<any>;
  }

}


