import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white ' >

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>
            <p className='text-xl mt-20'>
            I am a dedicated student pursuing a Bachelor of Technology in Information Technology at Rajiv Gandhi Institute of Petroleum Technology. Proficient in C/C++, Python, HTML, CSS, JavaScript, SQL, and PHP, I also have expertise in Git, GitHub, ReactJS, and Tailwind. I have practical experience through projects like "techBuddy" a web application helping college students select educational gadgets, and "Parichay" a responsive personal portfolio and blogging website. 
            <br/>Currently I'm working on a project "Demand Forecasting" which uses data science and machine learning algorithms like nueral network.
            </p>

            <br />

            <p className='text-xl'>
            In positions of responsibility, I coordinated with the T&P cell (Dept. of CSE) and established connections with <br/> 20+ companies, and led successful events with 300+ attendees. As Collaboration and Media Head for IEEE, I contributed to chapter growth and publicity. Notably, I attained a remarkable milestone by clearing IIT-JEE Advanced 2021 ,ranking
among the top 2.5% of 1.2 million students.
            </p>
        </div>
    </div>
  )
}

export default About