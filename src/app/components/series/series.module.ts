import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesListComponent } from './seires-list/series-list.component';
import { SeriesItemComponent } from './series-item/series-item.component';
import {AngularMaterialsModule} from "../../../shared/angular-materials.module";
@NgModule({
  declarations: [
    SeriesListComponent,
    SeriesItemComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialsModule,
  ],
  exports: [
    SeriesListComponent,
    SeriesItemComponent
  ]
})
export class SeriesModule { }
