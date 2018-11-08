import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

// Store
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../../store';

// Models
import { Coin } from '../../model/coin';

// Material
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-coins',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {
  coins$: Observable<Coin[]>;
  dataSource$ = new MatTableDataSource<Coin>();

  constructor(
    private store: Store<fromStore.CoinState>
  ) { }

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadAllCoins());
    this.coins$ = this.store.select(fromStore.getCoinsArray);
    this.store.select(fromStore.getCoinsArray).subscribe(
      (coins: Coin[]) => {
        this.dataSource$.data = coins;
      }
    );    
  }

  goToCoinDetail(id: number): void {
    this.store.dispatch(new fromStore.LoadCoin(id));
  }

}
