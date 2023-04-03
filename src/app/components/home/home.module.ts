import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponentComponent } from './home-component/home-component.component';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { EditProfileComponentComponent } from './edit-profile-component/edit-profile-component.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    HomeComponentComponent,
    EditProfileComponentComponent,
    SearchComponentComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class HomeModule { }
