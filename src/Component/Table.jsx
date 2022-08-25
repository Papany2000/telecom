import React, {useState} from 'react'
import { useTable, useGlobalFilter, useAsyncDebounce, usePagination } from 'react-table'  

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
    <span style = {{margin: '130px'}}>
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

function Table({columns, data}) {
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
    setGlobalFilter,
     
  } = useTable({
      columns,
       data
      },
      useGlobalFilter,
      usePagination, 
      )
       

      return(
        <>
        <h1 className='text-center italic font-bold my-5'>Список организаций партнёров Телеком СП</h1>
          <GlobalFilter 
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={state.globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
        <table className='mx-auto mt-3' {...getTableProps()}>
        <thead>
          {
          headerGroups.map(headerGroup => (
            <tr className='border' {...headerGroup.getHeaderGroupProps()}>
              {
              headerGroup.headers.map(column => (
                <th className='border' {...column.getHeaderProps()}>
                  {
                  column.render('Header')}
                 
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody  {...getTableBodyProps()}>
          {
          page.map((row, i) => {
            prepareRow(row)
            return (
              <tr className='border' {...row.getRowProps()}>
                {
                row.cells.map(cell => {
                  return (
                    <td className='border px-2 py-2' {...cell.getCellProps()}>
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
      <div style = {{marginLeft: '130px', marginTop: '15px'}}>
        <button className='border' onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
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
        <span>
          Page{' '}
          <strong>
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
       </>
      )
}

export default Table