import React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  sortable,
  SortByDirection,
  headerCol,
  TableVariant,
  expandable,
  cellWidth
} from '@patternfly/react-table';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          title: 'ID',
          cellFormatters: [expandable]
        },
        'Branches',
        { title: 'Pull requests' },
        '' // deliberately empty
      ],
      rows: [
        {
            rowKey: ({ rowData, rowIndex }) => rowIndex,
            cells: ['one', 'two', 'three', 'four']
        },
        {
          rowKey: ({ rowData, rowIndex }) => rowIndex,
          cells: ['parent - 1', 'two', 'three', 'four']
        },
        {
          rowKey: ({ rowData, rowIndex }) => rowIndex,
          cells: ['parent - 2', 'two', 'three', 'four']
        },
        {
          rowKey: ({ rowData, rowIndex }) => rowIndex,
          cells: ['parent - 3', 'two', 'three', 'four']
        },
      ]
    };
  }

  render() {
    const { columns, rows } = this.state;

    return (
      <Table
        caption="Compact table"
        variant={TableVariant.compact}
        rows={rows}
        cells={columns}
      >
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}
