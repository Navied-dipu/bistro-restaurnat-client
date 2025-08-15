import React from 'react'
import Banner from './Banner.jsx/Banner'
import Category from './Category/Category'
import PopularItems from '../PopularItems/PopularItems'
import FeatureItem from './FeatureItem/FeatureItem'
import Testimonial from '../Textimonials/Testimonial'

export default function Home() {
  return (
    <div className=''>
     <Banner></Banner>
     <Category></Category>
     <PopularItems></PopularItems>
     <FeatureItem></FeatureItem>
     <Testimonial></Testimonial>
    </div>
  )
}
