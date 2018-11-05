import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

import * as coinDetailActions from '../actions/coin-detail.action';
import * as fromServices from '../../../core/services/crypto.service';
import * as fromRoot from '../../../store';

@Injectable()
export class CoinDetailEffects {
    constructor(
        private actions$: Actions,
        private cryptoService: fromServices.CryptoService
        // need model for coin api
    ) {}

    @Effect()
    loadCoin$ = this.actions$.pipe(
        ofType<coinDetailActions.LoadCoin>(coinDetailActions.LOAD_COIN),
        map(action => action.payload),
        switchMap(id => this.cryptoService.getCoin(id)),
        map(res => {
            console.log('res:: ' + res);
            return new coinDetailActions.LoadCoinSuccess(res);
        }),
        catchError(error => of(new coinDetailActions.LoadCoinFailed(error)))
    );

    @Effect()
    loadCoinSuccess$ = this.actions$.pipe(
        ofType<coinDetailActions.LoadCoinSuccess>(coinDetailActions.LOAD_COIN_SUCCESS),
        map((action) => {
            const id = action.payload.data.id;
            return new fromRoot.Go({
                path: [`/coin/${id}`]
            });
        })
    );

}
