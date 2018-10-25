import { Component, ViewChild, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { Coin } from '../../model/coin';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-coins-list',
  templateUrl: './coins-list.component.html',
  styleUrls: ['./coins-list.component.css']
})
export class CoinsListComponent implements AfterViewInit {
  @Input() dataSource: MatTableDataSource<Coin>;
  @Output() clicked: EventEmitter<number> = new EventEmitter<number>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = [
    'rank',
    'name',
    'marketCap',
    'price',
    'volume',
    'supply',
    'change'
  ];

  constructor() { }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  rowClicked(coin: Coin) {
    // handle event click
    console.log('Event Emitted with coin id ' + coin.name);
    this.clicked.emit(coin.id);
  }

}
