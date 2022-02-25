import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThumbnailItemComponent } from './thumbnail-item/thumbnail-item.component';
import { ThumbnailListComponent } from './thumbnail-list/thumbnail-list.component';
import {AngularMaterialsModule} from "../../../shared/angular-materials.module";
import {NgxsModule} from "@ngxs/store";
import {StatusState} from "../../../state/status/status.state";
import { SelectThumbnailComponent } from './select-thumbnail/select-thumbnail.component';

@NgModule({
  declarations: [
    ThumbnailItemComponent,
    ThumbnailListComponent,
    SelectThumbnailComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialsModule,
    NgxsModule.forRoot(),
    NgxsModule.forFeature([StatusState]),
  ],
  exports: [
    ThumbnailItemComponent,
    ThumbnailListComponent,
    SelectThumbnailComponent
  ],
})
export class ThumbnailModule { }
