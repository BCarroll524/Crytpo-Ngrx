import { Coin } from '../../coins/model/coin';

export interface CryptoRequest {
    data?: { [id: number]: Coin };
    metadata?: {};
}

export interface CryptoRequestSingle {
    data?: Coin;
    metadata?: {};
}
