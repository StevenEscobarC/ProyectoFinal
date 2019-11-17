import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './public/masterPage/nav-bar/nav-bar.component';
import { FooterComponent } from './public/masterPage/footer/footer.component';
import { HeroComponent } from './public/masterPage/hero/hero.component';
import { NavbarComponent } from './public/masterPage/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HeroComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
