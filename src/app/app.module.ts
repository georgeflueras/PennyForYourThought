import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { ThoughtsComponent } from './components/thoughts/thoughts.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogActions, MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ThoughtsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule, 
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule, 
    MatToolbarModule,
    MatDialogModule    
  ],
  providers: [],
  entryComponents: [MatDialogModule, MatDialogActions],
  bootstrap: [AppComponent]
})
export class AppModule { }
