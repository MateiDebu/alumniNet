import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponentComponent } from './admin-component/admin-component.component';

import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatStepperModule} from '@angular/material/stepper';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatDialogModule} from '@angular/material/dialog';
import { MatMenuModule} from '@angular/material/menu';

import { PostsControlComponentComponent } from './posts-control-component/posts-control-component.component';

@NgModule({
  declarations: [
    AdminComponentComponent,
    PostsControlComponentComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatMenuModule
  ]
})
export class AdminModule { }
