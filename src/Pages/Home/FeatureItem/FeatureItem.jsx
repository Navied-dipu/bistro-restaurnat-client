import React from 'react'
import SectionTitle from '../../../Components/SectionTitle.jsx/SectionTitle'
import featuredImg from '../../../assets/home/featured.jpg'
import './Feature.css'
export default function FeatureItem() {
  return (
    <div className='featured-item bg-fixed pt-10 text-white'>
        <SectionTitle subheading={'chack it out'} heading={'from our menu'}></SectionTitle>

        <div className='md:flex justify-center items-center bg-slate-600 opacity-70 space-x-5 pt-10 px-20 py-36'>
            <div><img src={featuredImg} alt="" /></div>
            <div>
                <p>March 20, 2025</p>
                <p className='uppercase'>whare can i get some </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, animi minima! Quibusdam quo porro maiores officiis laboriosam nesciunt dolores quos aliquam, asperiores natus fugiat similique mollitia commodi omnis praesentium, incidunt eligendi! Dolor ipsam tenetur inventore, nemo sint doloremque accusantium deleniti aut ducimus officia ex, earum, amet tempora eum pariatur nostrum?</p>
                <button className="btn btn-outline border-0 border-b-2 mt-10">Read more</button>
            </div>
        </div>
    </div>

  )
}
