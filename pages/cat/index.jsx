import React, { useEffect, useState } from 'react'
import ListCat from '/components/ListCat'
import SearchCat from '/components/SearchCat'

import { Service } from '/service/index'
function Cat() {
  const [catData, setCatData] = useState(null)
  const [showCatData, setShowCatData] = useState(null)
  const [searchData, setSearchData] = useState(null)

  const getCatData = async () => {
    let data = await Service.GetCatData()
    console.log(data)
    setCatData(data)
    setShowCatData(data)
  }

  // const searchCatData = async () => {
  //   let data = await Service.SearchCat(searchData)
  //   console.log(data)
  //   setCatData(data)
  //   setShowCatData(data)
  // }

  const searchArray = (event) => {
    const q = event
    let data = catData
    data = data.filter(function (value) {
      return value.name.toLowerCase().indexOf(q.toLowerCase()) !== -1 // returns true or false
    })
    setShowCatData(data)
  }

  useEffect(() => {
    getCatData()
  }, [])

  useEffect(() => {
    if (searchData != null) {
      searchArray(searchData)
    }
  }, [searchData])

  return (
    <div className='mt-3 d-flex justify-content-center'>
      {showCatData ? (
        <div
          className='mt-3 d-flex flex-column justify-content-center'
          style={{ width: '80%' }}
        >
          <div>
            <SearchCat setSearchData={setSearchData} />
          </div>
          <div className='mt-3'>
            <ListCat catData={showCatData} />
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Cat
