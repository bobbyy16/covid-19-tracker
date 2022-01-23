import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { StateWiseComponent } from './state-wise/state-wise.component';
import { DistrictWiseComponent } from './district-wise/district-wise.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationbarComponent,
    StateWiseComponent,
    DistrictWiseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'state_wise',
        component: StateWiseComponent
      },
      {
        path: 'district_wise',
        component: DistrictWiseComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
