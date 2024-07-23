import React from 'react';
import CTA from '../components/CTA';
import { BarChart, Bar,Legend, XAxis, YAxis,CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import Chart from 'react-apexcharts';
import { skills, experiences } from '../constants';
import SSC from '../Images/SCCText.png'
import Hsc from '../Images/HSCText.png'
import Btech from '../Images/BtechText.png'
import { linkedin,twitter } from '../assets/icons';
import instagram from '../Images/instagram.svg'
import  github  from '../Images/github.svg';
import photo from '../Images/Photo.jpg'
// import { Bar } from 'react-chartjs-2';


const data = [
  { name: 'React', level: 'Intermediate' },
  { name: 'Express', level: 'Intermediate' },
  { name: 'Node', level: 'Intermediate' },
  { name: 'MongoDB', level: 'Beginner' },
  { name: 'JS', level: 'Expert' },
  { name: 'HTML', level: 'Expert' },
  { name: 'CSS', level: 'Intermediate' }
];

const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#00c49f', '#ffbb28', '#0088fe'];

const skillLevelMapping = {
  Beginner: 1,
  Intermediate: 2,
  Expert: 3
};

// Map the levels to numerical values
const mappedData = data.map(skill => ({
  ...skill,
  level: skillLevelMapping[skill.level]
}));


const dataD = [
  { skill: 'PowerBI', level: 100 },
  { skill: 'Python', level: 70 },
  { skill: 'SQL', level: 90 },
  { skill: 'Excel', level: 85 }
];

const colorsD = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300'];



  
const About = () => {
 
  const series = [60, 20, 20]; // Example data percentages for Java, Python, and C
  const options = {
    chart: {
      type: 'pie',
      height: 350,
    },
    labels: ['Java', 'Python', 'C'],
    colors: ['#FF5733', '#33FF57', '#3357FF'], // Example colors for each segment
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow'>Onkar</span>
      </h1>

      <div className='mt-5 flex items-center gap-4 text-slate-500'>
  <div className='flex-1'>
    <p>
      <span className='text-[#0ea5e9] font-semibold'>Full Stack Web Developer (MERN)</span> and <span className='text-[#0ea5e9] font-semibold'>Data Analyst</span> from India, adept at creating robust web applications and deriving insightful data analytics. With a passion for technology and problem-solving, Onkar brings a wealth of expertise to every project.
    </p>
  </div>
  <div className='w-3/12 h-3/12 relative'>
    <img src={photo} alt="" className='w-full h-full rounded-full object-cover transition-transform duration-300 ease-in-out hover:scale-110' />
  </div>
</div>
<br /><br />
      <div>
        <h3 className='subhead-text'>My Skills</h3>
      </div>
      <br /><br />
      <hr className='border-slate-500'/>
      <br />
      <br />
      {/* Web developemtn */}
      <div>
        <h3 className='subhead-text text-[#0ea5e9] font-semibold'>Web Development</h3>
      
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={mappedData} layout="vertical" margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" />
          <Tooltip />
          <Bar dataKey="level">
            {mappedData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      </div>

      <br />
      <br />
      <hr className='border-slate-500'/><br />
      <h3 className='subhead-text text-[#0ea5e9] font-semibold'>Programming Languages</h3>
       <br />
       <div>
        
       </div>
       <div>
       </div>


      <div className='flex items-center justify-center h-full'>
      <div className="pie w-1/2">
      <Chart options={options} series={series} type="pie" width="100%" />
      </div>
      </div>


      <br /><br /><hr className='border-slate-500'/><br /><br />
      <h3 className='subhead-text text-[#0ea5e9] font-semibold'>Data Analyst</h3>
      <br /><br />
     
      <div style={{ width: '100%', height: 500 }}>
      <ResponsiveContainer>
        <BarChart data={dataD}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="skill" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="level" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>


      <br /><br /><hr className='border-slate-500'/><br /><br />

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>Other Tech Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill, index) => (
            <div key={index} className='block-container w-20 h-20'>
              <div className='btn-black rounded-xl'/>
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <br /><br /><hr className='border-slate-500'/><br /><br />
      <h3 className='subhead-text text-[#0ea5e9] font-semibold'>Education Details</h3>
  
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8'>
              <div
                className="relative rounded-lg shadow-lg transition transform hover:scale-105 w-full h-96 text-center overflow-hidden group"
              >
                <img
                  src={SSC} // Assuming 'image' property is added in the projects array
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 "
                />
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                >
                  Read More
                </a>
              </div>

              <div
                className="relative rounded-lg shadow-lg transition transform hover:scale-105 w-full h-96 text-center overflow-hidden group"
              >
                <img
                  src={Hsc} // Assuming 'image' property is added in the projects array
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 "
                />
               
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                >
                  Read More
                </a>
              </div>
              
              <div
                className="relative rounded-lg shadow-lg transition transform hover:scale-105 w-full h-96 text-center overflow-hidden group"
              >
              <img
        src={Btech} // Assuming 'Btech' is the image source
        alt=""
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 "
      />
              
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                >
                  Read More
                </a>
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


      <br /><br /><hr className='border-slate-500'/><br /><br />
      <CTA />
    </section>
  );
};

export default About;
