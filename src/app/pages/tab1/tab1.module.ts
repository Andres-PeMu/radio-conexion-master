import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { ModalNewNewsModule } from '../../components/modal-new-news/modal-new-news.module';
import { ModalSearchModule } from '../../components/modal-search/modal-search.module';
import { NewsCardModule } from '../../components/news-card/news-card.module';

@NgModule({
    declarations: [Tab1Page],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        Tab1PageRoutingModule,
        ModalNewNewsModule,
        ModalSearchModule,
        NewsCardModule
    ]
})
export class Tab1PageModule {}
