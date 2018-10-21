import { Component, ViewChild, AfterViewInit, Input } from '@angular/core';
import { Coin } from '../../model/coin';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-coins-list',
  templateUrl: './coins-list.component.html',
  styleUrls: ['./coins-list.component.css']
})
export class CoinsListComponent implements AfterViewInit {
  @Input() dataSource: MatTableDataSource<Coin>;

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

}
