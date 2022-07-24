import React from 'react';
import me from './../assets/me.jpg'; 

const About = () => {
  return (
    <div name='about' className='w-full h-auto bg-[#0a192f] text-gray-300'>
      

        <div className='flex flex-col justify-center items-center w-full h-auto'>
          <div>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-2xl font-bold'>
              01. About me
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div >
              {/* <p>Hi. I'm Clint, nice to meet you. Please take a look around.</p> */}
              <img src={me} alt="Nirodya" />
            </div>
            <div className='div-margin'>
              <p>I am a goal-oriented individual with the ability to cope up with any responsibility and duty given to me. I have the capability of interacting with various types of people and working together as a team with having a good team spirit.

I received my secondary education at Kingswood Colege where I completed my G.C.E. Ordinary Level and Advanced Level Examinations.

Currently I'm reading for my Bachelor's degree in Computer Engineering at the University of Sri Jayewardanepura.

The eager to learn new things and the passion and the interest in Artificial Intelligence, lead me to get a part time working experience with two start-up companies. I have started as a Trainee AI Engineer at Echonlabs Pvt. Ltd.
After that I have moved to Kainovation Technologies as a Intern ML Engineer and after completing six months as an intern I got the oppertunity to step up as a Junior ML engineer.

I have also engaged in a number of extra-curricular skills, with the most recent been volunteering in the capacity of IT Manager for the SEDS Sri Lanka Aeronautical Division 2021/22.
I played Football for my College and I was able to win Kingswood Colors awards for 4 consecutive years. Futher I involved in chess and hockey in college teams and also various clubs and societies including President of Aeronautical Society of Kingswood College 2017/18.</p>  
            </div>
          </div>
      </div>
      </div>
      
    </div>
  );
};

export default About;
