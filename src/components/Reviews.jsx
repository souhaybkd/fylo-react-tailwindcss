import React from 'react'
import {profile1 ,profile2 , profile3 ,bgQuotes} from '../images'

const PeopleReviews = [
  {
    id: 'r1',
    text:"Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-olled collaboration machine.",
    name: "Satish Patel",
    reviewerPhoto : profile1 ,
    reviewerJob : "Founder & CEO, Huddle"
  },
  {
    id: 'r2',
    text:"Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-olled collaboration machine.",
    name: "Bruce Mckenzle",
    reviewerPhoto : profile2 ,
    reviewerJob : "Founder & CEO, Huddle"
  },
  {
    id: 'r3',
    text:"Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-olled collaboration machine.",
    name: "Iva Boyd",
    reviewerPhoto : profile3 ,
    reviewerJob : "Founder & CEO, Huddle"
  }
]

const Reviews = () => {
  return (
    <section className=''>
      <ul className='flex sm:flex-row flex-col justify-center items-center w-[100vw] bg-primary pt-[100px] font-opensans'>
        {PeopleReviews.map((review,index) => (
          <li key={review.id} className='relative' >
            {index == 0 &&<img src={bgQuotes} className='absolute sm:top-[-2rem] top-[-20px] sm:left-[1.25rem] left-20 z-[0]'/>}
            <div className='z-[1] relative sm:max-w-[400px] w-[80%] bg-dimBlue px-5 py-8 flex flex-col sm:m-auto mx-auto my-4 text-white rounded-md'>
              <p className='text-[14px] font-[400] text-left'>{review.text}</p>
              <div className='flex pt-5'>
                <img src={review.reviewerPhoto} className='w-[30px] h-[30px] rounded-full' />
                <div className=' text-left pl-4'>
                  <h4 className='font-[700] text-[12px]'>{review.name}</h4>
                  <p className='font-[400] text-[10px]'>{review.reviewerJob}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Reviews