import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { OfertaComponent } from './oferta/oferta.component';
import { MiejsceComponent } from './miejsce/miejsce.component';
import { TrasyComponent } from './trasy/trasy.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    OfertaComponent,
    MiejsceComponent,
    TrasyComponent,
    KontaktComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
