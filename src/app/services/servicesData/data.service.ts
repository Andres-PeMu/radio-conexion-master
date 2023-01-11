import { Injectable } from '@angular/core';
import News from 'src/app/interface/News.interface';
import { DetailService } from '../localStorage/detail.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  id: string;
  title: string;
  image: string;
  subtitle: string;
  description: string;
  summaryDescription: string;
  comment: string;
  like: number;
  notLike: number;

  constructor(
    private detailService: DetailService,
  ) {}

  cardMenuEllipsis(dat: News) {
    this.id = dat.id;
    this.title = dat.title;
    this.image = dat.image;
    this.subtitle = dat.subtitle;
    this.description = dat.description;
    this.summaryDescription = dat.summaryDescription;
    this.comment = dat.comment;
    this.like = dat.like;
    this.notLike = dat.notLike;
    this.detailService.postItem({
      id: this.id,
      title: this.title,
      image: this.image,
      subtitle: this.subtitle,
      description: this.description,
      summaryDescription: this.summaryDescription,
      comment: this.comment,
      like: this.like,
      notLike: this.notLike,
    });
  }

}
