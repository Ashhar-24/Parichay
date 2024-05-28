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
            I'm Md Ashhar, a passionate Information Technology student at the Rajiv Gandhi Institute of Petroleum Technology with a CGPA of 8.01. With proficiency in C and C++, intermediate skills in Python and SQL, and experience with frameworks like React and Flask, I bring a diverse technical skill set.
            <br />
            <br />
            Currently, I'm a Research Intern at IIT (ISM) Dhanbad, where I've optimized chatbot responses using advanced AI models. My projects include developing a responsive portfolio website and a web app for product price comparisons, demonstrating my abilities in full-stack development.
            <br /> <br />
            As an active member of my academic community, I've organized workshops and mentored fellow students, reflecting my strong leadership and teamwork skills. I thrive on solving complex problems and am driven to continually expand my knowledge and expertise in technology.  
            </p>

            {/* <br />

            <p className='text-xl'>
            In positions of responsibility, I coordinated with the T&P cell (Dept. of CSE) and established connections with <br/> 20+ companies, and led successful events with 300+ attendees. As Collaboration and Media Head for IEEE, I contributed to chapter growth and publicity. Notably, I attained a remarkable milestone by clearing IIT-JEE Advanced 2021 ,ranking
            among the top 2.5% of 1.2 million students. */}
            {/* </p> */}
        </div>
    </div>
  )
}

export default About