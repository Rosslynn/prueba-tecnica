import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MenuComponent } from './menu/menu.component';
import { NgmaterialModule } from '../ngmaterial/ngmaterial.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    NgmaterialModule,
    RouterModule
  ],
  exports: [
    MenuComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule { }
