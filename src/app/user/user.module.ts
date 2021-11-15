import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { NgmaterialModule } from '../ngmaterial/ngmaterial.module';
import { MapComponent } from './components/map/map.component';
import { FormProfileComponent } from './components/form-profile/form-profile.component';


@NgModule({
  declarations: [
    ProfileComponent,
    MapComponent,
    FormProfileComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    UserRoutingModule,
    NgmaterialModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class UserModule { }
