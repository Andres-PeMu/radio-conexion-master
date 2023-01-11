import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import News from 'src/app/interface/News.interface';
import { CommentsService } from 'src/app/services/firebase/fireStore/comments.service';
import { DetailService } from 'src/app/services/localStorage/detail.service';
import { DataService } from 'src/app/services/servicesData/data.service';
import { UserDataService } from 'src/app/services/servicesData/user-data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  commentUser: FormGroup;
  comments;
  commentsNumber;
  likes;
  likesNumber;
  likeTrue;
  dataDetail;

  constructor(
    public dataService: DataService,
    private fb: FormBuilder,
    private commentsService: CommentsService,
    private detailService: DetailService,
  ) {
    this.commentUser = this.fb.group({
      comment: ['', [Validators.required]],
    });
    this.dataDetail = this.detailService.getItem();
    this.dataService.cardMenuEllipsis(this.dataDetail);
  }

  ngOnInit(){
    this.commentsService.getComment({
      id: this.dataService.id,
    }).subscribe(comments => {
      this.comments = comments;
      this.commentsNumber = comments.length;
    });
    this.commentsService.getLikes({
      id: this.dataService.id,
    }).subscribe(comments => {
      this.likes = comments;
      this.likesNumber = comments.length;
    });
  }

}
