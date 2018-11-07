import { createSelector } from '@ngrx/store';
// Import root
import * as fromRoot from '../../../store';
// Import the feature reducer
import * as fromFeature from '../reducers';
// Import individual reducers
import * as fromCoinDetail from '../reducers/coin-detail.reducer';

// Coin detail state
export const getSelectedCoinStateSlice = createSelector(
    fromFeature.getCoinsState,
    (state: fromFeature.CoinState) => state.selectedCoin

);

// Coin detail data
export const getSelectedCoinData = createSelector(
    getSelectedCoinStateSlice,
    fromCoinDetail.getCoinData
);






