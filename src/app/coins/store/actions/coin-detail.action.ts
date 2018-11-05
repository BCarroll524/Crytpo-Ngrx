import { Action } from '@ngrx/store';

// models
import { CryptoRequest } from '../../../core/models/crypto-request';
import { Coin } from '../../model/coin';

export const LOAD_COIN = '[Coin Detail] Load Coin';
export const LOAD_COIN_SUCCESS = '[Coin Detail] Load Coin Success';
export const LOAD_COIN_FAILED = '[Coin Detail] Load Coin Failed';

export class LoadCoin implements Action {
    readonly type = LOAD_COIN;
    constructor(public payload: number) {}
}

export class LoadCoinSuccess implements Action {
    readonly type = LOAD_COIN_SUCCESS;
    constructor(public payload: CryptoRequest) {}
}

export class LoadCoinFailed implements Action {
    readonly type = LOAD_COIN_FAILED;
    constructor (public payload: any) {}
}

export type CoinDetailAction = LoadCoin | LoadCoinSuccess | LoadCoinFailed;
