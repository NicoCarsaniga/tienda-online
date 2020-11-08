import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeekopolisAboutComponent } from './geekopolis-about/geekopolis-about.component';
import { GeekopolisContactComponent } from './geekopolis-contact/geekopolis-contact.component';
import { GeekopolisHomeComponent } from './geekopolis-home/geekopolis-home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: GeekopolisHomeComponent
  },
  {
    path: 'about',
    component: GeekopolisAboutComponent
  },
  {
    path: 'contacto',
    component: GeekopolisContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
