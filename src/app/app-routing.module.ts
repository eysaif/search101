import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { SeedrComponent } from './pages/seedr/seedr.component';
import { FavouriteComponent } from './pages/favourite/favourite.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  {
    path: 'welcome',
    component: WelcomeComponent,
    children: [{ path: ':id', component: WelcomeComponent }],
  },
  { path: 'seedr', component: SeedrComponent },
  { path: 'favourite', component: FavouriteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
