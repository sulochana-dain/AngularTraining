import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SystemOverviewComponent } from './system-overview/system-overview.component';
import { MineralsComponent } from './minerals/minerals.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  {
    path: 'about', children: [
      { path: '', component: AboutComponent },
      { path: 'system-overview', component: SystemOverviewComponent },
      { path: 'minerals', component: MineralsComponent}
    ]
  },
  {path: 'component1', component: Component1Component},
  {path: 'component2', component: Component2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const myRouting = [
  HomeComponent, AboutComponent, SystemOverviewComponent, MineralsComponent, Component1Component, Component2Component
]
