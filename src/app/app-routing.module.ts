import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import { FromOperatorComponent } from './from-operator/from-operator.component';
import { MapComponent } from './map/map.component';
import { ObservablesComponent } from './observables/observables.component';
import { OfOperatorComponent } from './of-operator/of-operator.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';


const routes: Routes = [
  { path: 'observable', component: ObservablesComponent },
  { path: 'of-operator', component: OfOperatorComponent },
  { path: 'form-operator', component: FromOperatorComponent },
  { path: 'from-event', component: FromOperatorComponent },
  { path: 'subjects', component: SubjectsComponent },
  { path: 'map', component: MapComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'switch-map', component: SwitchMapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
