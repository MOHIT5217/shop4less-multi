import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { ConcatComponent } from './concat/concat.component';
import { CustomObservableComponent } from './custom-observable/custom-observable.component';
import { DebouncetimeComponent } from './debouncetime/debouncetime.component';
import { ExhaustmapComponent } from './exhaustmap/exhaustmap.component';
import { FilterComponent } from './filter/filter.component';
import { IntervalComponent } from './interval/interval.component';
import { MapComponent } from './map/map.component';
import { MargeComponent } from './marge/marge.component';
import { ObservableComponent } from './observable/observable.component';
import { OfFromComponent } from './of-from/of-from.component';
import { PluckComponent } from './pluck/pluck.component';
import { ReplayComponent } from './replay/replay.component';
import { RetryComponent } from './retry/retry.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { SubjectComponent } from './subject/subject.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { TakeComponent } from './take/take.component';
import { TapComponent } from './tap/tap.component';
import { ToArrayComponent } from './to-array/to-array.component';

const routes: Routes = [
  {path: '', redirectTo: '/rxjs/home',pathMatch: 'full'},
  {path: 'home', component: RxjsComponent},
  {path: 'observatble', component: ObservableComponent},
  {path: 'interval', component: IntervalComponent},
  {path: 'of-from', component: OfFromComponent},
  {path: 'to-array', component: ToArrayComponent},
  {path: 'custom-observable', component: CustomObservableComponent},
  {path: 'map', component: MapComponent},
  {path: 'pluck', component: PluckComponent},
  {path: 'filter', component: FilterComponent},
  {path: 'tap', component: TapComponent},
  {path: 'take', component: TakeComponent},
  {path: 'retry', component: RetryComponent},
  {path: 'debouncetime', component: DebouncetimeComponent},
  {path: 'subject', component: SubjectComponent},
  {path: 'replay', component: ReplayComponent},
  {path: 'asyncsubject', component: AsyncSubjectComponent},
  {path: 'concat-map', component: ConcatMapComponent},
  {path: 'concat', component: ConcatComponent},
  {path: 'marge', component: MargeComponent},
  {path: 'switch-map', component: SwitchMapComponent},
  {path: 'exhaust-map', component: ExhaustmapComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class RxjsSeriseRoutingModule { }
