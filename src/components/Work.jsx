import React from 'react'
import web1 from '../assets/todo.png'
import web2 from '../assets/viteap.png'
import web3 from '../assets/travel.png'
import web4 from '../assets/booking.png'
import web5 from '../assets/car.png'

import data from '../assets/crud.png'

const Work = () => {
  return (

    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>

      
      <div className='max-w-[1000px] mx-auto p-6 py-6 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-blue-500'>MY PROJECT</p>
          <p className='py-6'>//My Font-end on website</p>
        </div>


        {/*container*/}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>


          {/*grid items*/}
          <div style={{backgroundImage: `url(${web1})`}}
           className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/*Hover Effect*/}
            <div className='opacity-0 group-hover:opacity-100 '>
              
              <div className='pt-8 text-center'>
                <a href="https://theptat-todolist.netlify.app/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>GO TO WEBSITE</button>
                </a>
                <a href="https://tailwindcss.com/docs/installation/framework-guides">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>TailWind CSS</button>
                </a>

              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${web2})`}}
           className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/*Hover Effect*/}
            <div className='opacity-0 group-hover:opacity-100 '>
              
              <div className='pt-8 text-center'>
                <a href="https://theptat-vitexreact.netlify.app/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>GO TO WEBSITE</button>
                </a>
                <a href="https://tailwindcss.com/docs/installation/framework-guides">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>VITE CSS</button>
                </a>

              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${web3})`}}
           className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/*Hover Effect*/}
            <div className='opacity-0 group-hover:opacity-100 '>
             
              <div className='pt-8 text-center'>
                <a href="https://theptat-trabel-web.netlify.app">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>GO TO WEBSITE</button>
                </a>
                <a href="https://tailwindcss.com/docs/installation/framework-guides">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>TailWind CSS</button>
                </a>

              </div>
            </div>
          </div>
            {/*grid items*/}
          <div style={{backgroundImage: `url(${web4})`}}
           className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/*Hover Effect*/}
            <div className='opacity-0 group-hover:opacity-100 '>
             
              <div className='pt-8 text-center'>
                <a href="https://theptat-booking-web.netlify.app">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>GO TO WEBSITE</button>
                </a>
                <a href="https://tailwindcss.com/docs/installation/framework-guides">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>TailWind CSS</button>
                </a>

              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${web5})`}}
           className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/*Hover Effect*/}
            <div className='opacity-0 group-hover:opacity-100 '>
              
              <div className='pt-8 text-center'>
                <a href="https://theptat-findyourcar.netlify.app">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>GO TO WEBSITE</button>
                </a>
                <a href="https://tailwindcss.com/docs/installation/framework-guides">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>TailWind CSS</button>
                </a>

              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${data})`}}
           className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/*Hover Effect*/}
            <div className='opacity-0 group-hover:opacity-100 '>
              
              <div className='pt-8 text-center'>
                <a href="https://theptat-crud-web.netlify.app">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>GO TO WEBSITE</button>
                </a>
                <a href="https://tailwindcss.com/docs/installation/framework-guides">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>TailWind CSS</button>
                </a>

              </div>
            </div>
          </div>
       
        </div>
      </div>
    </div>
  )
}

export default Work