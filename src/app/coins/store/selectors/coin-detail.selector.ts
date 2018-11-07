import { createSelector } from '@ngrx/store';
// Import root
import * as fromRoot from '../../../store';
// Import the feature reducer
import * as fromFeature from '../reducers';
// Import individual reducers
import * as fromCoinDetail from '../reducers/coin-detail.reducer';

// coin state slice
export const getSelectedCoinStateSlice = createSelector(
    fromFeature.getCoinsState,
    (state: fromFeature.CoinState) => state.selectedCoin

);

// coin data slice
export const getSelectedCoinData = createSelector(
    getSelectedCoinStateSlice,
    fromCoinDetail.getCoinData
);

// coin data actual
export const getCoin = createSelector(
    getSelectedCoinData,
    (coin) => {
        return coin;
    }
);

export const getSelectedCoinLoaded = createSelector(
    getSelectedCoinStateSlice,
    fromCoinDetail.getCoinLoaded
);

export const getSelectedCoinLoading = createSelector(
    getSelectedCoinStateSlice,
    fromCoinDetail.getCoinLoading
);

export const getSelectedCoinError = createSelector(
    getSelectedCoinStateSlice,
    fromCoinDetail.getCoinError
);



