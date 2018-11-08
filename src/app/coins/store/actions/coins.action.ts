import { Action } from '@ngrx/store';

// models
import { CryptoRequest } from '../../../core/models/crypto-request';

export const LOAD_ALL_COINS = '[Coins] Load All Coins';
export const LOAD_ALL_COINS_SUCCESS = '[Coins] Load All Coins Success';
export const LOAD_ALL_COINS_FAILED = '[Coins] Load All Coins Failed';

export class LoadAllCoins implements Action {
    readonly type = LOAD_ALL_COINS;
}

export class LoadAllCoinsSuccess implements Action {
    readonly type = LOAD_ALL_COINS_SUCCESS;
    constructor(public payload: CryptoRequest) {}
}

export class LoadAllCoinsFailed implements Action {
    readonly type = LOAD_ALL_COINS_FAILED;
    constructor (public payload: any) {}
}

export type CoinsAction = LoadAllCoins | LoadAllCoinsSuccess | LoadAllCoinsFailed;
