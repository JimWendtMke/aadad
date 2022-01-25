import { GuxTableColumnType } from "./gux-table-column";

export interface GuxTableType {
  /**
  * When present, it specifies the caption of the table
  */
  caption?: string;
  /**
  * When present, it specifies the header of the table
  */
  header?: string;
  /**
  * Collection of the row values to display
  */
  rowData: {}[];
  /**
  * Collection of the columns to display
  */
  columns: GuxTableColumnType[];
  /**
  * When present, it specifies the columns should be displayed at the bottom of the table
  */
  footer?: boolean;
  /**
  * When present, it contains the text to display when there is no value to display
  */
  emptyText?: string;
  /**
  * When present, it contains the text to display after the table
  */
  summaryText?: string;
  /**
  * When present, it defines the row height
  */
  rowHeight?: undefined | 'sm' | 'md' | 'lg' | 'xl'
}