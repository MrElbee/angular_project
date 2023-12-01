import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BlockComponent } from './block/block.component';
import { GridComponent } from './grid/grid.component';
import { MyButtonComponent } from './my-button/my-button.component';
import { AppRoutingModule } from './app-routing.module'
import { HomePageComponent } from './home-page/home-page.component';
import { SecondPageComponent } from './small-layout/second-page/second-page.component';
import { BigHederComponent } from './small-layout/big-heder/big-heder.component';
import { BlackButtonComponent } from './small-layout/black-button/black-button.component';
import { DescriptionComponent } from './small-layout/description/description.component';
import { HedingSectionComponent } from './small-layout/heding-section/heding-section.component';
import { LogoComponent } from './small-layout/logo/logo.component';
import { PlanetImageComponent } from './small-layout/planet-image/planet-image.component';
import { SmallHederComponent } from './small-layout/small-heder/small-heder.component';

@NgModule({
  declarations: [AppComponent, MyButtonComponent, GridComponent, 
    BlockComponent, HomePageComponent, SecondPageComponent, 
    BigHederComponent, BlackButtonComponent, DescriptionComponent,
    HedingSectionComponent, LogoComponent, PlanetImageComponent,
    SmallHederComponent,
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }