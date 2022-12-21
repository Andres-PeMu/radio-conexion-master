import { Injectable } from '@angular/core';
import News from 'src/app/interface/News.interface';

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

  constructor() { }

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
  }

}
