import { Component } from '@angular/core';
import News from 'src/app/interface/News.interface';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  datDetail(dat){
    console.log(dat);
  }

}
