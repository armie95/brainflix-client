import React from 'react'
import './Loader.scss'

const Loader = () => {
  return (
    <div className="loader-body">
      <h4 className="loader-body__text">Loading...</h4>
      <div className="loader-body__loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default Loader
