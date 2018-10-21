import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// NgRx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// Reducers and Effects
import { reducers, effects } from './store';
// Material
import { MaterialModule } from '../material';
// Routing
import { CoinsRoutingModule } from './coins-routing.module';
// Containers
import * as fromContainers from './containers';
// components
import * as fromComponents from './components';
import { CoinDetailComponent } from './containers/coin-detail/coin-detail.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    CoinsRoutingModule,
    StoreModule.forFeature('coins', reducers),
    EffectsModule.forFeature(effects),
  ],
  declarations: [...fromContainers.containers, ...fromComponents.components, CoinDetailComponent],
  exports: [...fromContainers.containers, ...fromComponents.components],
})
export class CoinsModule { }
