import {React, Suspense, useRef, useState} from 'react'
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber';
import Fox from '../models/Fox'
import  Loader  from '../components/Loader';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';
import { linkedin,twitter } from '../assets/icons';
import instagram from '../Images/instagram.svg'
import  github  from '../Images/github.svg';
import photo from '../Images/Photo.jpg'

const Contact = () => {
  const formRef = useRef(null);
   const [form, setForm] = useState({ name:'',email:'',message:''})
   const [isloading, setIsLoading] = useState(false)
   const [currentAnimation, setCurrentAnimation] = useState('idle')


   const {alert, showAlert, hideAlert} = useAlert();


   const handleChange = (e) => {
      setForm({...form, [e.target.name]: e.target.value})
   };
   const handleSubmit = (e) =>{
      e.preventDefault();
      setIsLoading(true);
      setCurrentAnimation('hit')

      emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          form_name: form.name,
          to_name: "Onkar Hol",
          form_email: form.email,
          to_email: "holonkar999@gmail.com",
          message: form.message
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      ).then(()=>{
        setIsLoading(false)
        showAlert({show: true, text:'Message sent successfully', type:'success'})
        //TODO

        setTimeout(()=>{
          hideAlert();
          setForm({name:'',email:'',message:''})
          setCurrentAnimation('idle')
        },[3000])
      }).catch((error)=>{
        setIsLoading(false)
        setCurrentAnimation('idle')
        console.error('Failed to send email', error);
        showAlert({show: true, text:'I didnt recive your message', type:'danger'})
        //TODO
        //TODO
      })
   }

   const handleFocus = () => setCurrentAnimation('walk');
   const handleBlur = () => setCurrentAnimation('idle');

   

  return (
    <section className=' relative flex lg:flex-row flex-col max-container'>

    {alert.show && <Alert {...alert} />}
   
      <div className='flex-1 min-w-[50%] flex flex-col'>
      <h1 className='head-text'>Get in Touch</h1>

      <form 
       className='w-full flex flex-col gap-7 mt-14'
       onSubmit={handleSubmit}
      >
        <label className='text-black-500 font-semibold'>
          Name
          <input 
          type="text" 
          name='name'
          className='input'
          placeholder='Jhon'
          required
          value={form.name}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          />
        </label>
        <label className='text-black-500 font-semibold'>
          Email
          <input 
          type="email" 
          name='email'
          className='input'
          placeholder='Jhon@gmail.com'
          required
          value={form.email}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          />
        </label>
        <label className='text-black-500 font-semibold'>
          Your message
          <textarea 
          name='message'
          className='textarea'
          placeholder='Let me know how can i help you'
          required
          rows={4}
          value={form.message}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          />
        </label>
        <button
         type='submit'
         className='btn'
         disabled={isloading}
         onFocus={handleFocus}
         onBlur={handleBlur}
        >
           {isloading ? 'Sending...':'Send Message'}
        </button>
        <h3 className='subhead-text text-[#0ea5e9] font-semibold'>Social Connect</h3><br /><br />
        
              <div className="flex items-center space-x-4 justify-center gap-10">
                <a href="https://www.linkedin.com/in/onkar-hol-729101231/"  target="_blank"><img src={linkedin} alt="LinkedIn" className="w-12 h-auto" /></a> 
                  <a href="https://x.com/onkar_999"  target="_blank"><img src={twitter} alt="Twitter" className="w-12 h-auto" /></a>
             <a href="https://www.instagram.com/onkarhol_999/"  target="_blank"><img src={instagram} alt="" className="w-12 h-auto"  /></a>
             <a href="https://github.com/onkarhol999"  target="_blank"><img src={github} alt="Twitter" className="w-12 h-auto" /></a>

             </div>
      </form>
      </div>
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
             <Canvas
              camera={{
                position: [0,0,5],
                fov: 75,
                near: 0.1,
                far: 1000,

              }}
             >
              <directionalLight intensity={2.5} position={[0,0,1]}/>
              <ambientLight intensity={0.5}/>
               <Suspense fallback={<Loader/>}>
                <Fox 
                currentAnimation={currentAnimation}
                 position={[0.5,0.35,0]}
                 rotation={[12.6,-0.6,0]}
                 scale={[0.5,0.5,0.5]}
                />
               </Suspense>
             </Canvas>
      </div>

    </section>
  )
}

export default Contact
