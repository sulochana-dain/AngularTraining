import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, myRouting } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SystemOverviewComponent } from './system-overview/system-overview.component';
import { MineralsComponent } from './minerals/minerals.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    myRouting,
    HomeComponent,
    AboutComponent,
    SystemOverviewComponent,
    MineralsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
