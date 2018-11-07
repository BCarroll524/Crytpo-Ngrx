import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { map } from 'rxjs/operators'

// Store
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../../store';

// Models
import { Coin } from '../../model/coin';

// Material, if need any other modules


@Component({
  selector: 'app-coin-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.css']
})
export class CoinDetailComponent implements OnInit {
  coin$: Observable<Coin>;

  constructor(
    private store: Store<fromStore.CoinState>
  ) { }

  ngOnInit() {
    this.coin$ = this.store.select(fromStore.getSelectedCoinData);
    console.log(this.coin$);
  }

}
