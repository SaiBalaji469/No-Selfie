import React from 'react'
import './toggle.css'

const Desc = ({desc}) => {
  return (
    <div className='desc-container'>
      {desc && desc.map((descData) => (
        <div className="desc-box" key={descData.id}>
        <img src={descData.image} alt="desc-img" className='desc-img'/>
         <h5>{descData.head}</h5>
         <p>{descData.p}</p>
         </div>
      ))}
    </div>
  )
}

export default Desc