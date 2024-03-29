import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const ExperienceItem = ({ year, company, position, duration, tags, details, carousel }) => {
  return (
    <div className='px-5'>
    <ol className='flex flex-col md:flex-row relative border-l border-slate-300 px-5'>
      <li className='mb-10 ml-4'>
          <div className='absolute w-3 h-3 bg-slate-300 rounded-full mt-1.5 -left-1.5 border-white'/>
          <p className='font-Roboto-Mono flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
            <span className='inline-block font-Inter font-semibold text-white px-2 py-1 bg-slate-600 rounded-md'>{year}</span>
            <span className='font-semibold tracking-wide text-lg'>{position}</span>
            <span className='text-sm sm:text-lg text-slate-700 '>{company}</span>
            <span className='tracking-wide text-slate-500 text-xs'>{duration}</span>
          </p>
          <div className='text-start space-x-2 space-y-2 pt-2 sm:pt-1'>
            {tags.map((tag, tagID) => (
                <p key={tagID} className='inline-block font-Roboto-Mono font-semibold text-white text-sm px-2 py-1 bg-sky-950/30 rounded-full'>
                  {tag}
                </p>
            ))}
          </div>
          <div className='pt-2'>
            {details.map((detail, i) => (
                <p key={i} className='flex text-start font-Inter tracking-wide text-slate-800 text-sm p-1'>
                    {detail}
                </p>
            ))}
          </div>
          <div className =''>
            {carousel && (
              <Carousel
                showStatus={false}
                showIndicators={true}
                showThumbs={false}
                infiniteLoop={true}
                interval={3000}
                className='md:w-1/3 flex pt-5 overflow-hidden rounded-sm'
              >
                {carousel.map((slide, slideIndex) => (
                  <div key={slideIndex}>
                    <img src={slide.image} alt={slide.caption} />
                  </div>
                ))}
              </Carousel>
            )}
          </div>
      </li>
    </ol>
  </div>
  )
}

export default ExperienceItem