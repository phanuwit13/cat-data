import React, { useEffect, useState } from 'react'

function Search(props) {
  // const [search, setSearch] = useState('')
  // const handleSetSearchData = () => {
  //   props.setSearchData(search)
  // }
  return (
    <div className='d-flex' style={{ columnGap: '10px' }}>
      <input
        type='search'
        onChange={(e) => {
          props.setSearchData(e.target.value)
        }}
        className='form-control'
        placeholder='Search...'
        aria-label='Search'
      ></input>
    </div>
  )
}
export default Search
