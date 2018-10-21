import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// NgRx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// reducers and effects
import { reducers, effects } from './store';


import { CoinsComponent } from './containers/coins/coins.component';
//


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    CoinsRoutingModule,
    StoreModule.forFeature('coins', reducers),
    EffectsModule.forFeature(effects),
  ],
  declarations: [...fromContainers.containers, ...fromComponents.components, CoinsComponent],
  exports: [...fromContainers.containers, ...fromComponents.components],
})
export class CoinsModule { }
