import React, { useState } from 'react'
import { useTable, useGlobalFilter, useAsyncDebounce, useSortBy, usePagination, useFilters } from 'react-table'
import { DefaultColumnFilter } from './DefaultColumnFilter'
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length
  const [value, setValue] = useState(globalFilter)
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, 200)

  return (
    <span>
      Search:{' '}
      <input
        value={value || ""}
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
      />
    </span>
  )
}
function Table({ columns, data, a, b}) {
  const filterTypes = React.useMemo(
    () => ({
      text: (rows, id, filterValue) => {
        return rows.filter(row => {
          const rowValue = row.values[id]
          return rowValue !== undefined
            ? String(rowValue)
              .toLowerCase()
              .startsWith(String(filterValue).toLowerCase())
            : true
        })
      },
    }),
    []
  );
  const defaultColumn = React.useMemo(
    () => ({
      Filter: DefaultColumnFilter,
    }),
    []
  );



  const hiddenPropsInitial = JSON.parse(localStorage.getItem('hidenProps')) || ["id"];
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state,
    preGlobalFilteredRows,
    allColumns,
    setGlobalFilter,
  } = useTable({
    initialState: {
      hiddenColumns: hiddenPropsInitial
    },
    columns,
    data,
    defaultColumn,
    filterTypes,
    a
  },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
  )
  const IndeterminateCheckbox = React.forwardRef(
    ({ indeterminate, ...rest }, ref) => {
      const defaultRef = React.useRef()
      const resolvedRef = ref || defaultRef

      React.useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate
      }, [resolvedRef, indeterminate])

      return <input type="checkbox" ref={resolvedRef} {...rest} />
    }
  )

  const test = (event) => {
    if(!event.target.checked) {
      const props = JSON.parse(localStorage.getItem('hidenProps')) || [];
      props.push(b[event.target.labels[0].innerText.trim()])
      localStorage.setItem('hidenProps', JSON.stringify(props))
    } else {
      const props = JSON.parse(localStorage.getItem('hidenProps')) || []
      localStorage.setItem('hidenProps', JSON.stringify(props.filter(el => el !== b[event.target.labels[0].innerText.trim()])))
    }
  }
 
  return (
    <>
      <div className="mt-2 flex flex-col">
        <div className="my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"></div>
            <div  className='mx-6 flex'>
              {allColumns.map(column => (
                <div key={column.id} className='mx-6 my-3.5'>
                  <label>
                    <input type="checkbox" {...column.getToggleHiddenProps()} onClick={test}/>{' '}
                    {a[column.id]}
                  </label>
                </div>
              ))}
              <br />
            </div>
            <GlobalFilter
              preGlobalFilteredRows={preGlobalFilteredRows}
              globalFilter={state.globalFilter}
              setGlobalFilter={setGlobalFilter}
            />
            <table className="w-100% divide-y divide-gray-200 " {...getTableProps()}>
              <thead className="bg-gray-50 border-spacing-1">
                {
                  headerGroups.map(headerGroup => (
                    <tr className='border-spacing-1' {...headerGroup.getHeaderGroupProps()}>
                      {
                        headerGroup.headers.map(column => (
                          <th scope="col" className=" text-center text-xs font-medium text-gray-500 uppercase tracking-wider" {...column.getHeaderProps({ ...column.getSortByToggleProps(), style: { width: column.width, minwidth: column.minwidth, whiteSpace: column.whiteSpace } })}>
                            {
                              column.render('Header')}
                            <div>
                              {column.canFilter ? column.render("Filter") : null}
                            </div>
                            <span>
                              {column.isSorted ? (column.isSortedDesc ? '🔽' : '🔼') : ''}
                            </span>
                          </th>
                        ))}
                    </tr>
                  ))}
              </thead>
              <tbody  {...getTableBodyProps()} className="">
                {
                  page.map((row, i) => {
                    prepareRow(row)
                    return (
                      <tr className='border hover:bg-white' {...row.getRowProps()}>
                        {
                          row.cells.map(cell => {
                            return (
                              <td {...cell.getCellProps({
                                style: {
                                  width: cell.column.width,
                                  whiteSpace: cell.column.whiteSpace,
                                  minwidth: cell.column.minwidth,
                                }
                              })} className="px-6 py-4 whitespace-nowrap">
                                {
                                  cell.render('Cell')}

                              </td>
                            )
                          })}
                      </tr>
                    )
                  })}
              </tbody>
            </table>

            <div style={{ marginLeft: '120px', marginTop: '15px' }}>
              <button className='border-2' onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                {'<<'}
              </button>{' '}
              <button className='border' onClick={() => previousPage()} disabled={!canPreviousPage}>
                {'<'}
              </button>{' '}
              <button className='border' onClick={() => nextPage()} disabled={!canNextPage}>
                {'>'}
              </button>{' '}
              <button className='border' onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                {'>>'}
              </button>{' '}
              <span className='border'>
                Page{' '}
                <strong >
                  {state.pageIndex + 1} of {pageOptions.length}
                </strong>{' '}
              </span>
              <select className='border'
                value={state.pageSize}
                onChange={e => {
                  setPageSize(Number(e.target.value))
                }}
              >
                {[5, 10, 20].map(pageSize => (
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Table