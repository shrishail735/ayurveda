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
import { AboutComponent } from './main-body/about/about.component';
import { GalleryComponent } from './main-body/gallery/gallery.component';
import { HttpClientModule } from '@angular/common/http';
import { TreatmentsComponent } from './main-body/treatments/treatments.component';
import {MatMenuModule} from '@angular/material/menu';
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
    FooterComponent,
    AboutComponent,
    GalleryComponent,
    TreatmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    MatMenuModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
