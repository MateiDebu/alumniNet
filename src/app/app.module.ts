import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AngularFireModule} from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import { AppSetting } from './settings/app.settings';
import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AuthGuard } from './auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    AngularFireAuthModule,
    
  ],
  providers: [AppSetting,
  HttpClient,
  AuthService,
  DataService,
  AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
