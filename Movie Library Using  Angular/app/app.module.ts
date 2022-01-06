import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinkbarComponent } from './linkbar/linkbar.component';
import { ImagedivComponent } from './imagediv/imagediv.component';
import { LeftpanelComponent } from './leftpanel/leftpanel.component';
import { Titlediv1Component } from './titlediv1/titlediv1.component';
import { Content1Component } from './content1/content1.component';
import { Titlediv2Component } from './titlediv2/titlediv2.component';
import { Content2Component } from './content2/content2.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LinkbarComponent,
    ImagedivComponent,
    LeftpanelComponent,
    Titlediv1Component,
    Content1Component,
    Titlediv2Component,
    Content2Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
