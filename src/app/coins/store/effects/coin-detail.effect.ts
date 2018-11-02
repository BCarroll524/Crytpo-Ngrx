import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

import * as coinDetailActions from '../actions/coin-detail.action';
import * as fromServices from '../../../core/services/crypto.service';

@Injectable()
export class CoinDetailEffects {
    constructor(
        private actions$: Actions,
        private cryptoService: fromServices.CryptoService
        // need model for coin api
    ) {}

    // @Effect()
    // loadCoin$ = this.actions$.ofType(coinDetailActions.LOAD_COIN),
    //     map(action => action.payload),
    //     .pipe(
    //         switchMap((action) => {
    //             return this.cryptoService.getCoin(action.payload.id).pipe(
    //                 map(coins => new coinsActions.LoadAllCoinsSuccess(coins)),
    //                 catchError(error => of(new coinsActions.LoadAllCoinsFailed(error)))
    //             );
    //         })
    //     );

    @Effect()
    getUser$ = this.actions$.pipe(
        ofType<coinDetailActions.LoadCoin>(coinDetailActions.LOAD_COIN),
        map(action => action.payload),
        switchMap(id => this.cryptoService.getCoin(id)),
        map(res => {
            console.log('res::', res);

            return new coinDetailActions.LoadCoinSuccess(res);
        }),
        catchError(error => of(new coinDetailActions.LoadCoinFailed(error)))
    );


}
