import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { IonModal } from '@ionic/angular';
import News from '../../interface/news.interface';
import { CommentsService } from 'src/app/services/firebase/fireStore/comments.service';
import { UserDataService } from 'src/app/services/servicesData/user-data.service';
import { exists } from 'fs';

@Component({
  selector: 'app-comment-terminal-out',
  templateUrl: './comment-terminal-out.component.html',
  styleUrls: ['./comment-terminal-out.component.scss'],
})
export class CommentTerminalOutComponent implements OnInit {
  @Input() dat: News;
  @Output() numberComments = new EventEmitter();
  @ViewChild(IonModal) modal: IonModal;
  comments;
  commentsNumber;
  likeTrue;

  constructor(
    private commentsService: CommentsService,
    private dataUser: UserDataService,
  ) { }

  ngOnInit() {
    this.commentsService.getComment({
      id: this.dat.id,
    }).subscribe(comments => {
      this.comments = comments;
      this.commentsNumber = comments.length;
    });
    this.commentsService.getlike({
      email: this.dataUser.email,
      id: this.dat.id,
    }).then(e => this.likeTrue = e.exists);
  }

  save(dat: News) {
    this.commentsService.addComment({
      id: dat.id,
      photoURL: this.dataUser.photoURL,
      name: this.dataUser.name,
      lastName: this.dataUser.lastName,
      comment: 'todo funciona bien',
      email: this.dataUser.email
    });
    this.numberComments.emit(this.comments.length);
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

