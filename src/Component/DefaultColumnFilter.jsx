import React from 'react'

export function DefaultColumnFilter({
    column: { filterValue, preFilteredRows, setFilter }
  }) {
    const count = preFilteredRows.length;
    return (
      <input className=''
        value={filterValue || ""}
        onChange={(e) => {
          setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
        }}
        placeholder={`Search ${count} records...`}
      />
    );
  }