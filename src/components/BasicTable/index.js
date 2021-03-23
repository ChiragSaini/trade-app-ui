import React, { useEffect } from "react";
import { useTable, usePagination } from 'react-table'
import { Container } from "reactstrap";
import "./styles.css"

const Table = (props) => {
    const data = React.useMemo(
        () => props.data,
        []
    )

    const columns = React.useMemo(
        () => props.columns,
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        page, // Instead of using 'rows', we'll use page,
        // which has only the rows for the active page

        // The rest of these things are super handy, too ;)
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data,
            initialState: {
                pageIndex: 0,
                pageSize: 5
            },
        },
        usePagination
    )

    useEffect(() => {
        const myTableBody = document.querySelector("table.scroll-to-bottom-table tbody")
        myTableBody.scrollIntoView(false)
    })

    return (
        <div >
            {
                props.toPaginate
                    ?
                    <Container>
                        <div className="pagination">
                            <div>
                                <button className="btn btn-sm" onClick={() => previousPage()} disabled={!canPreviousPage}>
                                    {'Prev'}
                                </button>{' '}
                                <button className="btn btn-sm" onClick={() => nextPage()} disabled={!canNextPage}>
                                    {'Next'}
                                </button>{' '}
                            </div>
                            <div>
                                <span>
                                    <strong>
                                        {pageIndex + 1} of {pageOptions.length}
                                    </strong>{' '}
                                </span>
                            </div>
                            <div>
                                <span style={{ marginRight: "5px" }}>
                                    | Go to page:{' '}
                                    <input
                                        type="number"
                                        defaultValue={pageIndex + 1}
                                        className="custom-input-number"
                                        onChange={e => {
                                            const page = e.target.value ? Number(e.target.value) - 1 : 0
                                            gotoPage(page)
                                        }}
                                        style={{ width: '50px', fontSize: "0.875rem" }}
                                    />
                                </span>{' '}
                                <select
                                    value={pageSize}
                                    className='custom-select-menu'
                                    onChange={e => {
                                        setPageSize(Number(e.target.value))
                                    }} >
                                    {[5, 10, 20, 30, 40, 50].map(pageSize => (
                                        <option key={pageSize} value={pageSize}>
                                            Show {pageSize}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </Container>
                    : null
            }
            <div className={props.toPaginate ? "fix-the-height" : ""}>
                <table  {...getTableProps()} className={props.scrollToBottom ? "scroll-to-bottom-table" : null} onClick={props.onRowClick} >
                    <thead className={props.hideth ? "hide-th" : null}>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th
                                        {...column.getHeaderProps()}>
                                        {column.render('Header')}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {
                            props.toPaginate
                                ?
                                page.map(row => {
                                    prepareRow(row)
                                    return (
                                        <tr {...row.getRowProps()}>
                                            {row.cells.map(cell => {
                                                return (
                                                    <td {...cell.getCellProps()} >
                                                        {cell.render('Cell')}
                                                    </td>
                                                )
                                            })}
                                        </tr>
                                    )
                                })
                                :
                                rows.map(row => {
                                    prepareRow(row)
                                    return (
                                        <tr {...row.getRowProps()} >
                                            {row.cells.map(cell => {
                                                return (
                                                    <td {...cell.getCellProps()} >
                                                        {cell.render('Cell')}
                                                    </td>
                                                )
                                            })}
                                        </tr>
                                    )
                                })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table