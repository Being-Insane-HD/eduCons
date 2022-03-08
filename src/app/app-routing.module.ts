import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AppointComponent } from './landing-page/appoint/appoint.component';
import { BookComponent } from './landing-page/book/book.component';
import { ConsultComponent } from './landing-page/consult/consult.component';
import { ProfileComponent } from './landing-page/profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'team', component: TeamComponent },
  { path: 'appoint', component: AppointComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'book', component: BookComponent },
  { path: 'consult', component: ConsultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
