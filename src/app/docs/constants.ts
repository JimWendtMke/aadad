/**
* @ignore
*/

import { GuxTableColumnType } from "../gux/interfaces/gux-table-column";

export const MiscellaneousList: any = [{
  name: 'gux',
  location: 'src/app/gux'
}];

export const EnumerationIgnore: string[] = [];
export const TypealiasIgnore: string[] = [];
export const VariableIgnore: string[] = [
  'MODAL_DATA',
  'require',
  'testCardAddress'
];

export const EnumerationColumns: GuxTableColumnType[] = [{
  field: 'name',
  header: 'Name'
}, {
  field: 'value',
  header: 'Value'
}];
export const HostListenersColumns: GuxTableColumnType[] = [{
  field: 'name',
  header: 'Name'
}, {
  field: 'rawdescription',
  header: 'Description'
}];

export const InputColumns: GuxTableColumnType[] = [{
  field: 'name',
  header: 'Name'
}, {
  field: 'type',
  header: 'Type'
}, {
  field: 'defaultValue',
  header: 'Default Value'
}, {
  field: 'rawdescription',
  header: 'Description'
}];

export const InterfaceColumns: GuxTableColumnType[] = [{
  field: 'name',
  header: 'Name'
}, {
  field: 'type',
  header: 'Type'
}, {
  field: 'defaultValue',
  header: 'Default Value'
}, {
  field: 'optional',
  header: 'Optional'
}, {
  field: 'rawdescription',
  header: 'Description'
}];

export const MethodsColumns: GuxTableColumnType[] = [{
  field: 'name',
  header: 'Name'
}, {
  field: 'rawdescription',
  header: 'Description'
}];

export const OutputColumns: GuxTableColumnType[] = [{
  field: 'name',
  header: 'Name'
}, {
  field: 'type',
  header: 'Type'
}, {
  field: 'defaultValue',
  header: 'Default Value'
}, {
  field: 'rawdescription',
  header: 'Description'
}];

export const PropertiesColumns: GuxTableColumnType[] = [{
  field: 'name',
  header: 'Name'
}, {
  field: 'type',
  header: 'Type'
}, {
  field: 'defaultValue',
  header: 'Default Value'
}, {
  field: 'optional',
  header: 'Optional'
}, {
  field: 'rawdescription',
  header: 'Description'
}];