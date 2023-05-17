import React from 'react'
import techBuddy from '../assets/portfolio/techBuddy.png'
import portfolio from '../assets/portfolio/portfolio.png'


const Portfolio = () => {

    const portfolios = [
        {
            id:1,
            src: techBuddy,
            //href: demo link,
            href: 'https://techbuddy-ashhar01.000webhostapp.com/',
            href_git: 'https://github.com/Ashhar-24/techBuddy',
            // same as done in social links derefrencing
        },
        {
            id:2,
            src: portfolio,
            href_demo: '',
            href_git: ' ',
        },
        // {
        //     id:3,
        //     src: navbar
        // },
    ]


  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>

                <p className='py-6'>Check out some of my work!</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 '>

            {
                portfolios.map(({id, src, href, href_git}) => (
                    
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>

                    <div className='flex items-center justify-center'>
                        <a href={href} target='_blank'  rel="noreferrer" >
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' target='_blank' rel="noreferrer">Demo</button>
                        </a>
                        
                        <a href={href} target='_blank'  rel="noreferrer" >
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' >Code</button>
                        </a>
                    </div>
                </div>
                ))
            }
            </div>

        </div>
    </div>
  )
}

export default Portfolio