import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

// models
import { CryptoRequest, CryptoRequestSingle } from 'src/app/core/models/crypto-request';
import { Coin } from '../../coins/model/coin';


@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  endpoints = [
    'https://api.coinmarketcap.com/v2/ticker/?limit=100&sort=rank',
    'https://api.coinmarketcap.com/v2/ticker/',
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

  getCoin(id: number): Observable<CryptoRequestSingle> {
    const endpoint = this.endpoints[1] + id;
    return this.http
      .get<CryptoRequestSingle>(endpoint)
      .pipe(
          catchError((error: any) => Observable.throw(error.json()))
      );
  }

}
