import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

// reducer
import * as fromCoins from './coins.reducer';
import * as fromCoinDetail from './coin-detail.reducer';

// define the state
export interface CoinState {
    coins: fromCoins.CoinState;
    selectedCoin: fromCoinDetail.CoinDetailState;
}


export const reducers: ActionReducerMap<CoinState> = {
    coins: fromCoins.reducer,
    selectedCoin: fromCoinDetail.reducer
};

// creates base level of state object
// a const which holds a selector for entire lazy loaded module
// 'coins' comes from the string set in the module
export const getCoinsState = createFeatureSelector<CoinState>('coins');

