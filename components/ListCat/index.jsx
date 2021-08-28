/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'

export default function index(props) {
  return (
    <div
      className='d-flex justify-content-center'
      style={{ columnGap: '10px', flexWrap: 'wrap', rowGap: '20px' }}
    >
      {props.catData?.map((item, index) => {
        return (
          <React.Fragment key={`cat-${index}`}>
            <div
              key={`cat-${index}`}
              className='card'
              style={{ width: '260px' }}
            >
              <img
                src={
                  item.image?.url
                    ? item.image.url
                    : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png'
                }
                className='card-img-top'
                alt='Picture of cat'
                style={{ width: '260px', height: '260px', objectFit: 'cover' }}
              />
              <div className='card-body'>
                <h5 className='card-title'>{item.name}</h5>
                <p
                  className='card-text'
                  style={{ height: '100px', overflow: 'hidden' }}
                >
                  {item.description}
                </p>
                <a href='#' className='btn btn-info' style={{color:'#fff'}}>
                  Details
                </a>
              </div>
            </div>
          </React.Fragment>
        )
      })}
    </div>
  )
}
