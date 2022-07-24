import React from 'react'
import './../styles/home_styles.css'
import TabPannel from './tab_pannel'

const Experience = ()=>{
    return (
        <div name='experience' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-auto'>
                <div>
            <p className='text-2xl font-bold'>02. Where I’ve Worked</p>
           </div> 
           <div className='exp_box'>
            <TabPannel />
           </div>
           {/* <div>
            <p>
                Here are a few technologies I’ve been working with recently:
            </p>
           </div> */}
                
            </div>

        </div>
    )
}

export default Experience;