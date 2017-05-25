import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Firebase imports
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import {AngularFireModule} from "angularfire2";

export const firebaseConfig = {
  apiKey: "AIzaSyD9Fi71kdGheIgEBzLrB-H1eX9YqyIQYrY",
  authDomain: "whatido-bb3b4.firebaseapp.com",
  databaseURL: "https://whatido-bb3b4.firebaseio.com",
  projectId: "whatido-bb3b4",
  storageBucket: "whatido-bb3b4.appspot.com",
  messagingSenderId: "136265393070"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
