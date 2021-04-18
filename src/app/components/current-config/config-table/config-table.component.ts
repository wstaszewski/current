import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ComputerElement } from '../../../models/ComputerElement';
import { DataService } from './../../../services/data.service';

@Component({
  selector: 'app-config-table',
  templateUrl: './config-table.component.html',
  styleUrls: ['./config-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ConfigTableComponent implements OnInit {
  @Input() configuration: string;

  dataSource = new MatTableDataSource();
  columnsToDisplay = ['action', 'type', 'producer', 'name'];
  detailsToDisplay = ['producer', 'name', 'parameters'];
  expandedElement: ComputerElement | null;
  filterValue: string = '';
  constructor(private readonly dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.loadComputerConfiguration(this.configuration)
      .subscribe(config => {
        this.dataSource = new MatTableDataSource((config as ComputerElement[]));
      })
  }

  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = this.filterValue.trim().toLowerCase();
  }

}
