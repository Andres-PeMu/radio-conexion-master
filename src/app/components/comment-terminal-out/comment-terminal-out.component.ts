import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { IonModal } from '@ionic/angular';
import News from '../../interface/news.interface';
import { CommentsService } from 'src/app/services/firebase/fireStore/comments.service';
import { UserDataService } from 'src/app/services/servicesData/user-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comment-terminal-out',
  templateUrl: './comment-terminal-out.component.html',
  styleUrls: ['./comment-terminal-out.component.scss'],
})
export class CommentTerminalOutComponent implements OnInit {
  @Input() dat: News;
  @Output() numberComments = new EventEmitter();
  @ViewChild(IonModal) modalComment: IonModal;
  @ViewChild(IonModal) modalLike: IonModal;
  commentUser: FormGroup;
  comments;
  commentsNumber;
  likes;
  likesNumber;
  likeTrue;
  colore = 'danger';

  constructor(
    private fb: FormBuilder,
    private commentsService: CommentsService,
    private dataUser: UserDataService,
  ) {
    this.commentUser = this.fb.group({
      comment: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.commentsService.getComment({
      id: this.dat.id,
    }).subscribe(comments => {
      this.comments = comments;
      this.commentsNumber = comments.length;
    });
    this.commentsService.getLike({
      email: this.dataUser.email,
      id: this.dat.id,
    }).then(e => this.likeTrue = e.exists);
    this.commentsService.getLikes({
      id: this.dat.id,
    }).subscribe(comments => {
      this.likes = comments;
      this.likesNumber = comments.length;
    });
  }

  save(dat: News) {
    this.commentsService.addComment({
      id: dat.id,
      photoURL: this.dataUser.photoURL,
      name: this.dataUser.name,
      lastName: this.dataUser.lastName,
      comment: this.commentUser.value.comment,
      email: this.dataUser.email
    });
    this.numberComments.emit(this.comments.length);
    this.commentUser.reset();
  }

  newsLike(dat){
    this.commentsService.addLike({
      id: dat.id,
      photoURL: this.dataUser.photoURL,
      name: this.dataUser.name,
      lastName: this.dataUser.lastName,
      email: this.dataUser.email
    });
    this.likeTrue = !this.likeTrue;
  }

}

