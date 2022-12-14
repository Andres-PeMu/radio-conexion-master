import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ModalSearchComponent } from './modal-search.component';
import { ModalSearchRoutingModule } from './modal-search-routing.module';
import { NewsCardModule } from '../news-card/news-card.module';


@NgModule({
    declarations: [ModalSearchComponent],
    exports: [ModalSearchComponent],
    imports: [
        CommonModule,
        ModalSearchRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        NewsCardModule
    ]
})
export class ModalSearchModule { }
