import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

import * as coinsActions from '../actions/coins.action';
import * as fromServices from '../../../core/services/crypto.service';

@Injectable()
export class CoinsEffects {
    constructor(
        private actions$: Actions,
        private cryptoService: fromServices.CryptoService
    ) {}

    @Effect()
    loadAllCoins$ = this.actions$.ofType(coinsActions.LOAD_ALL_COINS)
        .pipe(
            switchMap(() => {
                return this.cryptoService.getAllCoins().pipe(
                    map(coins => new coinsActions.LoadAllCoinsSuccess(coins)),
                    catchError(error => of(new coinsActions.LoadAllCoinsFailed(error)))
                );
            })
        );

}
