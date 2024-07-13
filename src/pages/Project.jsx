import React from 'react';
import { projects } from '../constants';

const Project = () => {
  return (
    <section className='max-container'> 
      <h1 className='head-text'>
        My <span className='blue-gradient_text font-semibold drop-shadow'>Projects</span>
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          I've been involved in a diverse array of projects over the years, each contributing uniquely to my experience and growth. I invite you to explore these endeavors, each a testament to my commitment to excellence and innovation. Your interest and insights are always welcome as we strive for continued success together.
        </p>
      </div>
      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-black rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img 
                  src={project.iconUrl}
                  alt="Project Icon"
                  className='w-1/2 h-1/2 object-contain' 
                />
              </div>
            </div>
            <div className='mt-5'>
              <h3 className='subhead-text'>{project.name}</h3>
              <p className='text-slate-500'>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
