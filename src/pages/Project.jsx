import React from 'react';
import { experiences } from '../constants';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';
import LMS from '../Images/LMS.png'
import Teacher from '../Images/Teacher.png'
import Food from '../Images/Food (2).png'
import Pint from '../Images/Pintrest.png'
import Pokemon from '../Images/Pokemon.png'
import Tic from '../Images/Tic.png'
import Calculator from '../Images/Calculator.png'
import { linkedin,twitter } from '../assets/icons';
import instagram from '../Images/instagram.svg'
import  github  from '../Images/github.svg';
import power from '../Images/poer.png'

const Project = () => {
  return (
    <section className="max-container bg-slate-300/20">
      <h1 className="head-text">
        My <span className="blue-gradient_text font-semibold drop-shadow">Projects</span> & <span className="blue-gradient_text font-semibold drop-shadow">Work Experience</span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          I've been involved in a diverse array of projects over the years, each contributing uniquely to my experience and growth. I invite you to explore these endeavors, each a testament to my commitment to excellence and innovation. Your interest and insights are always welcome as we strive for continued success together.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">


      <div
          className="relative rounded-lg shadow-lg transition transform hover:scale-105 w-full h-96 text-center overflow-hidden group"
        >
          <img
            src={Food} // Assuming 'image' property is added in the projects array
            alt=""
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-10"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-cente bg-opacity-0 group-hover:bg-opacity-90 transition-opacity duration-300">
            <h3 className="text-lg font-semibold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Project 1</h3>
            <p className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Developed a website called Food Bridge using the MERN stack (MongoDB, Express, React, Node.js). This platform allows users to donate food online, facilitating connections between donors and organizations in need. It features user authentication, donation tracking, and a user-friendly interface to streamline the food donation process.</p>
          </div>
          <a
            href="https://earnest-lily-750c00.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Check Project
          </a>
        </div>


      <div
          className="relative rounded-lg shadow-lg transition transform hover:scale-105 w-full h-96 text-center overflow-hidden group"
        >
          <img
            src={LMS} // Assuming 'image' property is added in the projects array
            alt=""
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-10"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-cente bg-opacity-0 group-hover:bg-opacity-90 transition-opacity duration-300">
            <h3 className="text-lg font-semibold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Project 2</h3>
            <p className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Developed a comprehensive Online Learning Management System using the MERN stack (MongoDB, Express, React, Node.js). The platform features secure user authentication, robust course management, and real-time progress tracking, providing a seamless and interactive learning experience.</p>
          </div>
          <a
            href="https://incomparable-meerkat-0f555a.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Check Project
          </a>
        </div>




        <div
          className="relative rounded-lg shadow-lg transition transform hover:scale-105 w-full h-96 text-center overflow-hidden group"
        >
          <img
            src={Teacher} // Assuming 'image' property is added in the projects array
            alt=""
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-10"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-cente bg-opacity-0 group-hover:bg-opacity-90 transition-opacity duration-300">
            <h3 className="text-lg font-semibold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Project 3</h3>
            <p className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Developed a Teacher Recruitment Portal for my college using the MERN stack (MongoDB, Express, React, Node.js). The platform streamlines the recruitment process with features such as job postings, application management, and candidate evaluations, providing an efficient and user-friendly experience for both recruiters and applicants.</p>
          </div>
          <a
            href="https://dulcet-mochi-7806fe.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Check Project
          </a>
        </div>


      
        <div
          className="relative rounded-lg shadow-lg transition transform hover:scale-105 w-full h-96 text-center overflow-hidden group"
        >
          <img
            src={Tic} // Assuming 'image' property is added in the projects array
            alt=""
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-10"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-cente bg-opacity-0 group-hover:bg-opacity-90 transition-opacity duration-300">
            <h3 className="text-lg font-semibold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Project 4</h3>
            <p className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Developed a Tic-Tac-Toe game using React. The game features a dynamic user interface and supports two-player interactions with real-time updates. This project demonstrates fundamental concepts of React, including state management and component-based architecture.</p>
          </div>
          <a
            href="https://regal-sunflower-ad5989.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Check Project
          </a>
        </div>



        <div
          className="relative rounded-lg shadow-lg transition transform hover:scale-105 w-full h-96 text-center overflow-hidden group"
        >
          <img
            src={Pokemon} // Assuming 'image' property is added in the projects array
            alt=""
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-10"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-cente bg-opacity-0 group-hover:bg-opacity-90 transition-opacity duration-300">
            <h3 className="text-lg font-semibold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Project 5</h3>
            <p className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Developed a Pokémon searching website using the React API. The platform allows users to search for and view details of various Pokémon, demonstrating effective use of API integration and dynamic rendering in React.

     </p>
          </div>
          <a
            href="https://github.com/onkarhol999/Pokedex_URL"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Check Project
          </a>
        </div>







        <div
          className="relative rounded-lg shadow-lg transition transform hover:scale-105 w-full h-96 text-center overflow-hidden group"
        >
          <img
            src={Calculator} // Assuming 'image' property is added in the projects array
            alt=""
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-10"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-cente bg-opacity-0 group-hover:bg-opacity-90 transition-opacity duration-300">
            <h3 className="text-lg font-semibold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Project 5</h3>
            <p className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Developed a calculator using HTML, CSS, and JavaScript. The project features a user-friendly interface with basic arithmetic operations and demonstrates effective use of DOM manipulation and event handling.</p>
          </div>
          <a
            href="https://github.com/onkarhol999/CalculatorProject"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Check Project
          </a>
        </div>



        <div
          className="relative rounded-lg shadow-lg transition transform hover:scale-105 w-full h-96 text-center overflow-hidden group"
        >
          <img
            src={Pint} // Assuming 'image' property is added in the projects array
            alt=""
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-10"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-cente bg-opacity-0 group-hover:bg-opacity-90 transition-opacity duration-300">
            <h3 className="text-lg font-semibold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Project 6</h3>
            <p className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Developed a Pinterest clone using Node.js, MongoDB, and EJS. The application allows users to create and manage boards, upload and pin images, and explore content, showcasing skills in server-side development and templating.</p>
          </div>
          <a
            href="https://github.com/onkarhol999/Pinterest-Clone"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Check Project
          </a>
        </div>


        <div
          className="relative rounded-lg shadow-lg transition transform hover:scale-105 w-full h-96 text-center overflow-hidden group"
        >
          <img
            src={power} // Assuming 'image' property is added in the projects array
            alt=""
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-10"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-cente bg-opacity-0 group-hover:bg-opacity-90 transition-opacity duration-300">
            <h3 className="text-lg font-semibold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Project 6</h3>
            <p className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Developed a company dashboard for product sales using PowerBI. Due to Microsoft policies, the dashboard cannot be published online but can be shared as a PDF. This project highlights skills in data visualization and business intelligence.</p>
          </div>
          <a
            href="https://cyan-ardelia-29.tiiny.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Check Project
          </a>
        </div>
          <div
            className="relative bg-gray-100 rounded-lg shadow-lg transition transform hover:bg-blue-500 hover:text-white hover:scale-105 w-full h-96 text-center"
          >
            <img
              src="" // Assuming 'image' property is added in the projects array
              alt=""
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
            <div className="relative p-6 flex flex-col justify-center items-center h-full">
              {/* <h3 className="text-lg font-semibold mb-2 text-white">Project 6</h3> */}
              <p className="mb-4 text-white font-semibold">Stay tuned for upcoming projects that address real-world challenges with innovative solutions</p>
             
            </div>
          </div>
          
        





          </div>



      <hr className="border-slate-500 mt-12"/>
      <div className="py-16">
      <span className="blue-gradient_text drop-shadow head-text">Work Experience</span>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I've worked with some companies, leveling up my skills and teaming up with smart people. Here's the rundown:
          </p>
        </div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img 
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none',
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p className="text-black-500 font-medium font-base" style={{ margin: 0 }}>
                    {experience.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className="text-black-500 font-normal pl-1 text-sm">
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <br /><br /><hr className='border-slate-500'/><br /><br />
          <h3 className='subhead-text text-[#0ea5e9] font-semibold'>Social Connect</h3><br /><br />
        
              <div className="flex items-center space-x-4 justify-center gap-10">
                  <a href="https://www.linkedin.com/in/onkar-hol-729101231/"  target="_blank"><img src={linkedin} alt="LinkedIn" className="w-12 h-auto" /></a> 
                  <a href="https://x.com/onkar_999"  target="_blank"><img src={twitter} alt="Twitter" className="w-12 h-auto" /></a>
                  <a href="https://www.instagram.com/onkarhol_999/"  target="_blank"><img src={instagram} alt="" className="w-12 h-auto"  /></a>
                  <a href="https://github.com/onkarhol999"  target="_blank"><img src={github} alt="Twitter" className="w-12 h-auto" /></a>

             </div>
      <br /><br /><hr className="border-slate-500"/><br /><br />
      <CTA/>
    </section>
  );
};

export default Project;
