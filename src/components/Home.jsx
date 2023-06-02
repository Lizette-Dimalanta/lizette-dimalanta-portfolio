import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { MdContactPage } from 'react-icons/md'
import { GrLinkedin } from "react-icons/gr"
import { VscGithubInverted } from "react-icons/vsc"
// import { AiOutlineArrowDown } from 'react-icons/ai';

const Home = () => {
  return (
    <div id='home' className='bg-fixed h-screen bg-cover bg-center' style={{ backgroundImage: `url(${'../images/ProfileImage.jpeg'})` }}>
      <div className='w-full h-screen absolute top-15 left-0 bg-slate-800/20'>
      <div>
        <h2 className='font-Inter text-white tracking-wide font-semibold flex text-3xl sm:text-4xl pt-32 sm:pt-40 pl-6 place-content-start sm:pl-24'>
          I am a
        </h2>
        <h2 className='font-DM-Sherif-Display italic tracking-wide text-white font-semibold flex text-5xl pt-5 sm:text-8xl place-content-start pl-6 sm:pl-24 sm:pt-5'>
          <TypeAnimation
          sequence={[
            'Driven', // Types 'One'
            2000, // Waits 1s
            'Passionate', // Deletes 'One' and types 'Two'
            2000, // Waits 2s
            'Creative', // Types 'One'
            2000, // Waits 1s
            'Humble', // Types 'One'
            2000, // Waits 1s
          ]}
          wrapper='div'
          cursor={true}
          repeat={Infinity}
          style={{ display: 'inline-block' }}
          />
        </h2>
        <h2 className='font-Inter text-white tracking-wide font-semibold flex text-3xl sm:text-5xl place-content-start sm:pl-24 pt-5 pl-6 sm:pt-6' > 
          Full-Stack Developer.
        </h2>
      </div>
      <div className='font-Roboto-Mono font-semibold text-white text-2xl flex justify-end items-end sm:place-content-end sm:items-end whitespace-nowrap flex-col pt-52 sm:pt-36 pr-5 sm:pr-24'>
        <div className='hover:scale-110 transition-all ease-in-out duration-300'>
          <a href='' className='cursor-pointer tracking-wide bg-slate-800/60 rounded-md px-2 py-0.5 m-1'> RESUME
          </a>
        </div>
        <div className='pt-4 hover:scale-110 transition-all ease-in-out duration-300'>
          <a href='' className='cursor-pointer tracking-wide bg-slate-800/60 rounded-md px-2 py-0.5 m-1'> LINKEDIN
          </a>
        </div>
        <div className='pt-4 hover:scale-110 transition-all ease-in-out duration-300'>
          <a href='' className='cursor-pointer tracking-wide bg-slate-800/60 rounded-md px-2 py-0.5 m-1'> GITHUB
          </a>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home

{/* <div className='inline-flex whitespace-nowrap flex-col pt-48 pl-8'>
<a href='' className='cursor-pointer flex items-center rounded-md shadow-lg bg-white m-1 p-1.5'>
  <MdContactPage size={25} />
  <span className='pl-2 inline-block'>Resume</span>
</a>
<a href='' className='cursor-pointer flex items-center rounded-md shadow-lg bg-white m-1 p-1.5'>
  <GrLinkedin size={20} />
  <span className='pl-2 inline-block'>LinkedIn</span>
</a>
<a href='' className='cursor-pointer flex items-center rounded-md shadow-lg bg-white m-1 p-1.5'>
  <VscGithubInverted size={20} />
  <span className='pl-2 inline-block'>GitHub</span>
</a>
</div>
</div> */}
