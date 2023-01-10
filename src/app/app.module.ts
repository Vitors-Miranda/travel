import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { modalComponent } from './modal/modal.component';
import { navbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    navbarComponent,
    modalComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
