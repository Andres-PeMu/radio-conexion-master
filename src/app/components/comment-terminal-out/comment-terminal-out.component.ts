import { Component, OnInit, Input, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { IonModal } from '@ionic/angular';
import News from '../../interface/news.interface';
import { CommentsService } from 'src/app/services/firebase/fireStore/comments.service';
import { UserDataService } from 'src/app/services/servicesData/user-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comment-terminal-out',
  templateUrl: './comment-terminal-out.component.html',
  styleUrls: ['./comment-terminal-out.component.scss'],
  changeDetection : ChangeDetectionStrategy.Default,
})
export class CommentTerminalOutComponent implements OnInit {
  @Input() dat: News;
  @ViewChild(IonModal) modal: IonModal;
  comment: string;
  comments: any;
  numberComments: Observable<number>;

  constructor(
    private commentsService: CommentsService,
    private dataUser: UserDataService
  ) { }

  ngOnInit() {
    this.commentsService.getComment({
      id: this.dat.id,
      photoURL: this.dataUser.photoURL,
      name: this.dataUser.name,
      lastName: this.dataUser.lastName,
      comment: 'todo funciona bien',
      email: this.dataUser.email
    }).subscribe(comments => {
      this.comments = comments;
      this.numberComments = this.comments.length;
    });
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
  }
}

