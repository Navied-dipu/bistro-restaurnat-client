import React from 'react'

export default function MenuItem({item}) {
    const {image, name , recipe, price}=item
  return (
    <div className='flex space-x-2'>
      <img style={{borderRadius:'0 200px 200px 200px'}} className='w-[100px]' src={image} alt="" />
      <div>
        <h3 className='text-2xl'>{name}----------------</h3>
        <p>{recipe}</p>
      </div>
      <p className='text-yellow-300'>${price}</p>
    </div>
  )
}
