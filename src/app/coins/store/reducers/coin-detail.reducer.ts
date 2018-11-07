// start with importing the actions
import * as fromCoinDetail from '../actions/coin-detail.action';

// import coin interface
import { Coin } from '../../model/coin';

// define an interface first that will be the state

export interface CoinDetailState {
    // dictionary of all coins
    data: Coin;
    error: string;
    loaded: boolean;
    loading: boolean;
}

// define the initial state
export const initialState: CoinDetailState = {
    data: undefined,
    error: undefined,
    loaded: false,
    loading: false,
};

export function reducer(
    state = initialState,
    action: fromCoinDetail.CoinDetailAction,
): CoinDetailState {

    switch (action.type) {
        case fromCoinDetail.LOAD_COIN: {
            const payload = action.payload;

            return {
                ...state,
                error: undefined,
                loaded: false,
                loading: true,
            };
        }

        case fromCoinDetail.LOAD_COIN_FAILED: {
            const errorData = action.payload;
            return {
                ...state,
                error: errorData,
                loaded: false,
                loading: false
            };
        }

        case fromCoinDetail.LOAD_COIN_SUCCESS: {
            const coinData = action.payload;
            return {
                ...state,
                data: coinData.data,
                loaded: true,
                loading: false
            };
        }

        default: {
            return state;
        }
    }
}

export const getCoinData = (state: CoinDetailState) => state.data;
export const getCoinLoading = (state: CoinDetailState) => state.loading;
export const getCoinLoaded = (state: CoinDetailState) => state.loaded;
export const getCoinError = (state: CoinDetailState) => state.error;
