import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import './../styles/home_styles.css'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
<div className='main_div'>
          <p className='welcome_text'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Nirodya Pussadeniya
        </h1>
        <h2 className='text-2xl sm:text-4xl font-bold text-[#8892b0]'>
          I'm a Computer Engineering Undergraduate.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          An enthusiastic soul who would love to explore, eager to learn new things and gather new experiences. I'm currently in the third year of my bachelor's degree in Computer Engineering at University of Sri Jayewardanepura.
I'm interested and passionate about the field of Artificial Intelligence. Currently I'm applying my knowledge on helping people to make their lives easier and make this planet a better place using tech.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
</div>
      </div>
    </div>
  );
};

export default Home;
