import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { MovieInfoComponentComponent } from './movie-info-component/movie-info-component.component';
import { MainInfoComponentComponent } from './main-info-component/main-info-component.component';
import { ThumbnailComponentComponent } from './thumbnail-component/thumbnail-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    FooterBarComponent,
    MovieInfoComponentComponent,
    MainInfoComponentComponent,
    ThumbnailComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
