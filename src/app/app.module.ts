import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfOperatorComponent } from './of-operator/of-operator.component';
import { ObservablesComponent } from './observables/observables.component';
import { FromOperatorComponent } from './from-operator/from-operator.component';
import { FromEventComponent } from './from-event/from-event.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { HeaderComponent } from './header/header.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { MapComponent } from './map/map.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';
import { SwitchMap2Component } from './switch-map2/switch-map2.component';

@NgModule({
  declarations: [
    AppComponent,
    OfOperatorComponent,
    ObservablesComponent,
    FromOperatorComponent,
    FromEventComponent,
    SubjectsComponent,
    HeaderComponent,
    SwitchMapComponent,
    MapComponent,
    FilterComponent,
    SwitchMap2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
