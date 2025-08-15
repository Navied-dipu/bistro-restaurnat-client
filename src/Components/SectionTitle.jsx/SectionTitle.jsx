import React from 'react'

export default function SectionTitle({subheading , heading }) {
  return (
    <div className='mx-auto md:w-4/12 text-center my-8'>
      <p className='text-yellow-300 mb-2'>--{subheading}--</p>
      <h3 className='text-4xl uppercase border-y-3 py-4'>{heading}</h3>
    </div>
  )
}
