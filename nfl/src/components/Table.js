import React, { useMemo } from 'react'
import { useTable, useSortBy, useFilters } from 'react-table'
import { COLUMNS } from './columns'
import MOCK_DATA from './rushing.json'
import './table.css'

export const Table = () => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns: columns,
        data: data
    },
    useFilters,
    useSortBy)

    return (
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
    )
}