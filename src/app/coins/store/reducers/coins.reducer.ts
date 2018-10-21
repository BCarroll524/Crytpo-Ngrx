// start with importing the actions
import * as fromCoins from '../actions/coins.action';

// import coin interface
import { Coin } from '../../model/coin';

// define an interface first that will be the state
export interface CoinState {
    // dictionary of all coins
    coinsEntities: { [id: number]: Coin };
    error: string;
    loaded: boolean;
    loading: boolean;
}

// define the initial state
export const initialState: CoinState = {
    coinsEntities: {},
    error: undefined,
    loaded: false,
    loading: false,
};

export function reducer(
    state = initialState,
    action: fromCoins.CoinsAction,
): CoinState {

    switch (action.type) {
        case fromCoins.LOAD_ALL_COINS: {
            return {
                ...state,
                loading: true,
                error: undefined
            };
        }

        case fromCoins.LOAD_ALL_COINS_FAILED: {
            const errorData = action.payload;
            return {
                ...state,
                error: errorData,
                loaded: false,
                loading: false
            };
        }

        case fromCoins.LOAD_ALL_COINS_SUCCESS: {
            const coinsData = action.payload.data;
            return {
                ...state,
                coinsEntities: coinsData,
                loaded: true,
                loading: false
            };
        }

        default: {
            return state;
        }
    }
}

export const getCoinsEntities = (state: CoinState) => state.coinsEntities;
export const getCoinsLoading = (state: CoinState) => state.loading;
export const getCoinsLoaded = (state: CoinState) => state.loaded;
