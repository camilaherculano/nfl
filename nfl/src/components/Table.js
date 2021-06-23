import React, { useMemo } from 'react'
import { useTable, useSortBy, useFilters } from 'react-table'
import { useExportData } from 'react-table-plugins'
import Papa from 'papaparse'
import { COLUMNS } from './columns'
import MOCK_DATA from './rushing.json'
import './table.css'

export const Table = () => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    function DefaultColumnFilter({
        column: { filterValue, preFilteredRows, setFilter },
      }) {
        const count = preFilteredRows.length
      
        return (
          <input
            value={filterValue || ''}
            onChange={e => {
              setFilter(e.target.value || undefined)
            }}
            placeholder={`Search ${count} records...`}
          />
        )
      }
      
    const defaultColumn = {
        Filter: DefaultColumnFilter,
    }

    function getExportFileBlob({ columns, data, fileType, fileName }) {
        if (fileType === 'csv') {
          const headerNames = columns.map(col => col.exportValue)
          const csvString = Papa.unparse({ fields: headerNames, data })
          return new Blob([csvString], { type: 'text/csv' })
        } 
    }

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        exportData,
    } = useTable({
        columns: columns,
        data: data,
        defaultColumn,
        getExportFileBlob,
    },
    useFilters,
    useSortBy,
    useExportData)

    return (
        <div>
            <button
                onClick={() => {exportData('csv', false)}}
            >
                Export as CSV
            </button>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) =>(
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                                    {
                                        (column.id === 'Yds' || column.id === 'Lng' || column.id === 'TD') ? 
                                        <span>{column.isSorted ? (column.isSortedDesc ?  ' ⬇️' : ' ⬆️') : ' ⏬'}</span> : 
                                        null
                                    }
                                    <div>{column.canFilter ? column.render('Filter') : null}</div>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}