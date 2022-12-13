import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { FirebaseErrorService } from 'src/app/services/firebase/Error/firebase-error.service';
import { FirestoreService } from 'src/app/services/firebase/fireStore/Firestore.service';

@Component({
  selector: 'app-modal-new-news',
  templateUrl: './modal-new-news.component.html',
  styleUrls: ['./modal-new-news.component.scss'],
})
export class ModalNewNewsComponent implements OnInit {
  @ViewChild('popover') popover;
  registerNewNews: FormGroup;
  isOpen = false;
  messageError = '';
  loading = false;

  constructor(
    private fb: FormBuilder,
    private firestore: FirestoreService,
    private router: Router,
    private codeError: FirebaseErrorService,
  ) {
    this.registerNewNews = this.fb.group({
      title: ['', Validators.required],
      urlImage: ['', Validators.required],
      subTitle: ['', [Validators.required]],
      description: ['', [Validators.required]],
      summaryDescription: ['', [Validators.required]],
    });
  }

  ngOnInit() { }

  register() {
    this.loading = true;
    this.firestore.addNews({
      title: this.registerNewNews.value.title,
      image: this.registerNewNews.value.urlImage,
      subtitle: this.registerNewNews.value.subTitle,
      summaryDescription: this.registerNewNews.value.summaryDescription,
      description: this.registerNewNews.value.description,
    }).then(()=>{
      this.loading = false;
      this.messageError = 'Guardado con exito';
      this.isOpen = true;
    }).catch((error)=>{
      this.loading = false;
      this.messageError = this.codeError.firebaseError(error.code);
      this.isOpen = true;
    });
  }

}
