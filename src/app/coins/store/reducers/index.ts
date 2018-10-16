import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

// reducer
import * as fromCoins from './coins.reducer';

// define the state
export interface CoinState {
    coins: fromCoins.CoinState;
}

export const reducers: ActionReducerMap<CoinState> = {
    coins: fromCoins.reducer
};

// creates base level of state object
// a const which holds a selector for entire lazy loaded module
// 'coins' comes fromt he string set in the module
export const getCoinsState = createFeatureSelector<CoinState>('coins');

