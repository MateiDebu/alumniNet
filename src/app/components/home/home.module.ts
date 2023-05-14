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
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { ConfirmationDialogComponent } from './confirmation-dialog-component/confirmation-dialog.component';
import { PostComponentComponent } from './post-component/post-component.component';
import {MatMenuModule} from '@angular/material/menu';
import { ExperienceComponentComponent } from './experience-component/experience-component.component';
import { AddExperienceComponentComponent } from './add-experience-component/add-experience-component.component';
import { AddStudiesComponentComponent } from './add-studies-component/add-studies-component.component';
import { FilterPipe } from 'src/app/utilities/filter.pipe';
import { StudiesUserComponentComponent } from './studies-user-component/studies-user-component.component';

@NgModule({
  declarations: [
    HomeComponentComponent,
    EditProfileComponentComponent,
    SearchComponentComponent,
    ConfirmationDialogComponent,
    PostComponentComponent,
    ExperienceComponentComponent,
    AddExperienceComponentComponent,
    AddStudiesComponentComponent,
    FilterPipe,
    StudiesUserComponentComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatDialogModule,
    MatMenuModule
  ]
})
export class HomeModule { }
