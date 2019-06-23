import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KontaktComponent } from './kontakt/kontakt.component';
import { OfertaComponent } from './oferta/oferta.component';
import { MiejsceComponent } from './miejsce/miejsce.component';
import { TrasyComponent } from './trasy/trasy.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  {
    path: 'kontakt',
    component: KontaktComponent
  },
  {
    path: 'oferta',
    component: OfertaComponent
  },
  {
    path: 'start',
    component: StartComponent
  },
  {
    path: 'miejsce',
    component: MiejsceComponent
  },
  {
    path: 'trasy',
    component: TrasyComponent
  },

  // {
  //   path: '**',
  //   component: PagenonfoundComponent
  // }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
