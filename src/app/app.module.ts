import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainBodyComponent } from './main-body/main-body.component';
import { CardComponent } from './shared/card/card.component';
import { TherapiesComponent } from './main-body/therapies/therapies.component';
import { TestomonialsComponent } from './main-body/testomonials/testomonials.component';
import { ReviewCardComponent } from './shared/review-card/review-card.component';
import { GeolocationComponent } from './shared/geolocation/geolocation.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainBodyComponent,
    CardComponent,
    TherapiesComponent,
    TestomonialsComponent,
    ReviewCardComponent,
    GeolocationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
