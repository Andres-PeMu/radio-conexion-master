import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import News from '../../interface/news.interface';
import Comment from 'src/app/interface/comment.interface';
import { CommentsService } from 'src/app/services/firebase/fireStore/comments.service';

@Component({
  selector: 'app-comment-terminal-out',
  templateUrl: './comment-terminal-out.component.html',
  styleUrls: ['./comment-terminal-out.component.scss'],
})
export class CommentTerminalOutComponent implements OnInit {
  @Input() dat: News;
  @ViewChild(IonModal) modal: IonModal;
  comment: Comment;

  constructor(private commentsService: CommentsService) { }

  ngOnInit() {
  }

  save(dat: News){}

}
