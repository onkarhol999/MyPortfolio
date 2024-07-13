import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons'

const InfoBox = ({text, link, btnText})=>(
    <div className='info-box'>
      <p className=' font-medium sm:text-xl text-center'>{text}</p>
      <Link to={link} className=' neo-brutalism-white neo-btn'>
        {btnText}
        <img src={arrow} className='w-4 h-4 object-contain'/>
      </Link>
    </div>
)

const renderContext = {
  1: <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue  py-4 px-8 text-white mx-5'>Hi, I am <span className=' font-semibold'>Onkar</span>👋 <br /> A Software Engineer From India</h1>,
  2: <InfoBox
        text="Versatile in a wide range of tech skills spanning from web development to data analytics and many more."
        link="/about"
        btnText="Explore My Tech Skills "
    />,
  3: <InfoBox
        text="I've delivered impactful solutions through completion of diverse and challenging projects."
        link="/projects"
        btnText="Visit My Portfolio"
    />,
  4: <InfoBox
        text="Need assistance in for Full Stack Development or Data Analysis? Contact me to explore how I can contribute to your projects."
        link="/contact"
        btnText="Let's talk"
    />
};

const HomaInfo = ({ currentStage }) => {
  return renderContext[currentStage] || null;
};

export default HomaInfo;
