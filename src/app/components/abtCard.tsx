import React from 'react'

const AbtCards = ({name, desc, email}: any) => {
  return (
    <div className='abt-card-container my-3'>
        <img src='/assets/images/card-img.png' />
        <h2>{name}</h2>
        <h5>{desc}</h5>
        {email && <p>{email}</p>}
    </div>
  )
}

export default AbtCards