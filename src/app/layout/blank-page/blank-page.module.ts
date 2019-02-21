import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BlankPageRoutingModule} from './blank-page-routing.module';
import {BlankPageComponent} from './blank-page.component';
import {
  ModalComponent,
} from './modal/modal.component';
import {
  SingleGifComponent,
} from './singe-gif/single-gif.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import {LazyLoadImageModule} from 'ng-lazyload-image';

@NgModule({
  imports: [CommonModule, BlankPageRoutingModule, LazyLoadImageModule, InfiniteScrollModule],
  declarations: [BlankPageComponent, ModalComponent, SingleGifComponent]
})
export class BlankPageModule {
}
