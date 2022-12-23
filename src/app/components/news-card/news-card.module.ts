import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { NewsCardComponent } from './news-card.component';
import { NewsCardRoutingModule } from './news-card-routing.module';
import { CardMenuEllipsisModule } from '../card-menu-ellipsis/card-menu-ellipsis.module';
import { ModalNewNewsModule } from '../modal-new-news/modal-new-news.module';
import { CommentTerminalOutModule } from '../comment-terminal-out/comment-terminal-out.module';


@NgModule({
    declarations: [NewsCardComponent],
    exports: [NewsCardComponent],
    imports: [
        CommonModule,
        NewsCardRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        CardMenuEllipsisModule,
        ModalNewNewsModule,
        CommentTerminalOutModule
    ]
})
export class NewsCardModule { }
