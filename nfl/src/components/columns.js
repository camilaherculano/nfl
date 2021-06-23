import { ColumnFilter } from './ColumnFilter'

export const COLUMNS = [
    {
        Header: 'Player\'s name',
        accessor: 'Player',
        Filter: ColumnFilter,
        disableSortBy: true
    },
    {
        Header: 'Team',
        accessor: 'Team',
        Filter: ColumnFilter,
        disableFilters: true,
        disableSortBy: true
    },
    {
        Header: 'Position',
        accessor: 'Pos',
        Filter: ColumnFilter,
        disableFilters: true,
        disableSortBy: true
    },
    {
        Header: 'Rushing Attempts Per Game Average',
        accessor: 'Att/G',
        Filter: ColumnFilter,
        disableFilters: true,
        disableSortBy: true
    },
    {
        Header: 'Rushing Attempts',
        accessor: 'Att',
        Filter: ColumnFilter,
        disableFilters: true,
        disableSortBy: true
    },
    {
        Header: 'Total Rushing Yards',
        accessor: 'Yds',
        Filter: ColumnFilter,
        disableFilters: true
    },
    {
        Header: 'Rushing Average Yards Per Attempt',
        accessor: 'Avg',
        Filter: ColumnFilter,
        disableFilters: true,
        disableSortBy: true
    },
    {
        Header: 'Rushing Yards Per Game',
        accessor: 'Yds/G',
        Filter: ColumnFilter,
        disableFilters: true,
        disableSortBy: true
    },
    {
        Header: 'Total Rushing Touchdowns',
        accessor: 'TD',
        Filter: ColumnFilter,
        disableFilters: true
    },
    {
        Header: 'Longest Rush',
        accessor: 'Lng',
        Filter: ColumnFilter,
        disableFilters: true
    },
    {
        Header: 'Rushing First Downs',
        accessor: '1st',
        Filter: ColumnFilter,
        disableFilters: true,
        disableSortBy: true
    },
    {
        Header: 'Rushing First Downs %',
        accessor: '1st%',
        Filter: ColumnFilter,
        disableFilters: true,
        disableSortBy: true
    },
    {
        Header: '20+ Yards Each',
        accessor: '20+',
        Filter: ColumnFilter,
        disableFilters: true,
        disableSortBy: true
    },
    {
        Header: '40+ Yards Each',
        accessor: '40+',
        Filter: ColumnFilter,
        disableFilters: true,
        disableSortBy: true
    },
    {
        Header: 'Fumbles',
        accessor: 'FUM',
        Filter: ColumnFilter,
        disableFilters: true,
        disableSortBy: true
    }
]