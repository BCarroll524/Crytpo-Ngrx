import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

// models
import { CryptoRequest } from 'src/app/core/models/crypto-request';
import { Coin } from '../../coins/model/coin';


@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  endpoints = [
    'https://api.coinmarketcap.com/v2/ticker/?limit=100&sort=rank&',
    'https://api.coinmarketcap.com/v2/ticker/?limit=10&sort=percent_change_24h&structure=array',
    'https://api.coinmarketcap.com/v2/ticker/',
    'https://rest.coinapi.io/v1/symbols?filter_symbol_id=',
    'https://rest.coinapi.io/v1/quotes/',
    'https://api.coinmarketcap.com/v2/listings/'
  ];

  constructor (
      private http: HttpClient
  ) {}

  getAllCoins(): Observable<CryptoRequest> {
    return this.http
        .get<CryptoRequest>(this.endpoints[0])
        .pipe(
            catchError((error: any) => Observable.throw(error.json()))
        );
  }

}
