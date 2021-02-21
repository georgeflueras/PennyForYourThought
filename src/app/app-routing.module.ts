import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ThoughtsComponent } from './components/thoughts/thoughts.component';
import { RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'thoughts', component: ThoughtsComponent },
  { path: 'signup', component: LoginComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login'}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
