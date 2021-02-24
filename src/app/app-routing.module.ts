import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ThoughtsComponent } from './components/thoughts/thoughts.component';
import { RouterModule } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { TermsComponent } from './components/terms/terms.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'thoughts', component: ThoughtsComponent, canActivate: [AuthGuardService] },
  { path: 'signup', component: LoginComponent },
  { path: 'terms', component: TermsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login'}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
