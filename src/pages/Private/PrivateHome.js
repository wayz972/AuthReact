import React from 'react'
import cat from './cat.gif'
export default function PrivateHome() {
  return (
    <div className='container p-5'>
      <h3 className="display-3 text-light mb-4">Private home</h3>
   <img src={cat} alt="cat.gif"  />
    </div>
  )
}
