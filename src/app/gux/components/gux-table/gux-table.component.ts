import { Component, Input, OnInit } from '@angular/core';

import { GuxTableColumnType } from '../../interfaces/gux-table-column';

@Component({
  selector: 'gux-table',
  templateUrl: './gux-table.component.html',
  styleUrls: ['./gux-table.component.scss']
})
export class GuxTableComponent implements OnInit {
  /**
  * When present, it specifies the header of the table
  */
  @Input() caption: string;
  /**
  * Collection of the row values to display
  */
  @Input() rowData: {}[] = [];
  /**
  * Collection of the columns to display
  */
  @Input() columns: GuxTableColumnType[] = [];
  /**
  * When present, it specifies the columns should be displayed at the bottom of the table
  */
  @Input() footer: boolean = false;
  /**
  * When present, it contains the text to display when there is no value to display
  */
  @Input() emptyText: string = '';
  /**
  * When present, it contains the text to display after the table
  */
  @Input() summaryText: string = '';
  /**
  * When present, it defines the row height
  */
  @Input() rowHeight: string = 'md';

  rowClass = 'gux-row-';

  constructor() { }

  ngOnInit(): void {
    this.rowClass += this.rowHeight;
  }

}
