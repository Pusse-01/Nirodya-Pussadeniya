import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import './../styles/home_styles.css'
import {FaGithub} from 'react-icons/fa';

const Projects = () => {
    return (
        <div name='projects' className='w-full h-auto bg-[#0a192f] text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-auto'>
 <div>
               <div>
            <p className='text-2xl font-bold'>03. Some things I've built</p>
           </div> 
           <div className='w-full grid grid-cols-1 sm:grid-cols-3 gap-4 py-8'>
              <div className='bg-[#112240] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  {/* <img className='w-20 mx-auto' src={HTML} alt="HTML icon" /> */}
                  <header>
                    <div className='project-top'>
                        <h3 className='project_header'>PROJECT</h3>
                    {/* <button>Code</button> */}
                    <div className='project-links'><a href="https://github.com/Pusse-01/PROJECT" aria-label="External Link" class="external" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a></div>
                    </div>
                    
                  </header>
                  
                  <div>
                    <p className='normal_text'>“PROJECT” is a project management platform which helps organizations to manage their projects in a more systematic way.  </p>
                  </div>
                  <footer>
                    <ul className='project-tech-list'>
                        <li>ReactJs</li>
                        <li>NodeJs</li>
                        <li>ExpressJs</li>
                        <li>MongoDb</li>
                    </ul>
                  </footer>
              </div>
              <div className='bg-[#112240] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  {/* <img className='w-20 mx-auto' src={HTML} alt="HTML icon" /> */}
                  <header>
                    <div className='project-top'>
                        <h3 className='project_header'>STUDY GUIDER</h3>
                    {/* <button>Code</button> */}
                    <div className='project-links'><a href="https://github.com/Pusse-01/Study-guider" aria-label="External Link" class="external" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a></div>
                    </div>
                    
                  </header>
                  
                  <div>
                    <p className='normal_text'>Mobile application which helps students
to make study plans and track their progress working.</p>
                  </div>
                  <footer>
                    <ul className='project-tech-list'>
                        <li>Flutter</li>
                        
                    </ul>
                  </footer>
              </div>
              <div className='bg-[#112240] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  {/* <img className='w-20 mx-auto' src={HTML} alt="HTML icon" /> */}
                  <header>
                    <div className='project-top'>
                        <h3 className='project_header'> Project BLAZERS </h3>
                    {/* <button>Code</button> */}
                    <div className='project-links'><a href="https://github.com/Pusse-01/Blazers-_IntelliHack2.0" aria-label="External Link" class="external" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a></div>
                    </div>
                    
                  </header>
                  
                  <div>
                    <p className='normal_text'>Defect detection system of Printed
Circuit boards by visual inspection using AI</p>
                  </div>
                  <footer>
                    <ul className='project-tech-list'>
                        <li>Tensorflow</li>
                        <li>OpenCV</li>
                        <li>Python</li>
                        <li>Streamlit</li>
                    </ul>
                  </footer>
              </div>
              <div className='bg-[#112240] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  {/* <img className='w-20 mx-auto' src={HTML} alt="HTML icon" /> */}
                  <header>
                    <div className='project-top'>
                        <h3 className='project_header'>QUSETION ANSWERING BOT </h3>
                    {/* <button>Code</button> */}
                    <div className='project-links'><a href="https://github.com/Pusse-01/Question-answering-model-with-text-comparision" aria-label="External Link" class="external" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a></div>
                    </div>
                    
                  </header>
                  
                  <div>
                    <p className='normal_text'>Q&A model for Detecting Parkinson's
Disease of Children. The most significant character of this model is all those inputs
and outputs can be given in Sinhala </p>
                  </div>
                  <footer>
                    <ul className='project-tech-list'>
                        <li>Pytorch</li>
                        <li>Transformers</li>
                        {/* <li>Python</li> */}
                    </ul>
                  </footer>
              </div>
              <div className='bg-[#112240] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  {/* <img className='w-20 mx-auto' src={HTML} alt="HTML icon" /> */}
                  <header>
                    <div className='project-top'>
                        <h3 className='project_header'>DEPRESSION DETECTION APP</h3>
                    {/* <button>Code</button> */}
                    <div className='project-links'><a href="https://github.com/Pusse-01/depression-detection" aria-label="External Link" class="external" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a></div>
                    </div>
                    
                  </header>
                  
                  <div>
                    <p className='normal_text'>AI models to detect depression using person's face emotions, voice patterns and their speech.</p>
                  </div>
                  <footer>
                    <ul className='project-tech-list'>
                        <li>Tensorflow</li>
                        <li>OpenCV</li>
                        <li>NLP</li>
                        <li>Keras</li>
                    </ul>
                  </footer>
              </div>
              <div className='bg-[#112240] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  {/* <img className='w-20 mx-auto' src={HTML} alt="HTML icon" /> */}
                  <header>
                    <div className='project-top'>
                        <h3 className='project_header'>CHILD'S DRAWING EVALUATION USING AI</h3>
                    {/* <button>Code</button> */}
                    <div className='project-links'><a href="https://github.com/Pusse-01/children-s-drawing-evaluations" aria-label="External Link" class="external" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a></div>
                    </div>
                    
                  </header>
                  
                  <div>
                    <p className='normal_text'>AI models to evaluate child's drawing with compared to a given source file.</p>
                  </div>
                  <footer>
                    <ul className='project-tech-list'>
                        <li>Tensorflow</li>
                        <li>Kerass</li>
                        <li>Streamlit</li>
                        <li>Python</li>
                    </ul>
                  </footer>
              </div>
              </div>
              <header>
                <div className='p_inline'>
                <p >Want to see more works? </p>
                <a className='flex justify-between items-center w-full text-gray-300'
                href='https://github.com/Pusse-01'
                > <FaGithub size={30} />
                </a>
              
              </div>
              </header>
              
 </div>

</div>

        </div>
    );

}

export default Projects;