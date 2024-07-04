import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsSeriseRoutingModule } from './rxjs-serise-routing.module';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ObservableComponent } from './observable/observable.component';
import { IntervalComponent } from './interval/interval.component';
import { OfFromComponent } from './of-from/of-from.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { CustomObservableComponent } from './custom-observable/custom-observable.component';
import { MapComponent } from './map/map.component';
import { PluckComponent } from './pluck/pluck.component';
import { FilterComponent } from './filter/filter.component';
import { TapComponent } from './tap/tap.component';
import { TakeComponent } from './take/take.component';
import { RetryComponent } from './retry/retry.component';
import { DebouncetimeComponent } from './debouncetime/debouncetime.component';
import { SubjectComponent } from './subject/subject.component';
import { Comp1Component } from './comps/comp1/comp1.component';
import { Comp2Component } from './comps/comp2/comp2.component';
import { Comp3Component } from './comps/comp3/comp3.component';
import { ReplayComponent } from './replay/replay.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { ConcatComponent } from './concat/concat.component';
import { MargeComponent } from './marge/marge.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ExhaustmapComponent } from './exhaustmap/exhaustmap.component';
import { ShareReplayComponent } from './share-replay/share-replay.component';


@NgModule({
  declarations: [
    RxjsComponent,
    ObservableComponent,
    IntervalComponent,
    OfFromComponent,
    ToArrayComponent,
    CustomObservableComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    RetryComponent,
    DebouncetimeComponent,
    SubjectComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    ReplayComponent,
    AsyncSubjectComponent,
    ConcatMapComponent,
    ConcatComponent,
    MargeComponent,
    SwitchMapComponent,
    ExhaustmapComponent,
    ShareReplayComponent,
  ],
  imports: [
    CommonModule,
    RxjsSeriseRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class RxjsSeriseModule { }
