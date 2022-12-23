import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { CommentTerminalOutModule } from '../../components/comment-terminal-out/comment-terminal-out.module';

@NgModule({
    declarations: [Tab2Page],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        Tab2PageRoutingModule,
        CommentTerminalOutModule
    ]
})
export class Tab2PageModule {}
