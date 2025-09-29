import { useState } from 'react';
import signup from '../assets/signup.png'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { LuEyeClosed } from "react-icons/lu";
import { RxEyeOpen } from "react-icons/rx";
import { Link } from 'react-router';




const Login = () => {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const [show, setShow] = useState(false)

  
    const [emailErr, setEmailErr] = useState("")
    const [passwordErr, setPasswordErr] = useState("")

   
    const handleEmail=(event)=>{
        setEmail(event.target.value);
        setEmailErr("")

    }
    const handlePassword=(event)=>{
        setPassword(event.target.value);
        setPasswordErr("")

    }
   
    const handleCreateAccount=()=>{
        // console.log(name);
        
        if(!email){
           setEmailErr("Please enter your email.") 
        }
       else{
         if(! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            setEmailErr("Enter a valid email")
        }
       }
       if(!password){
           setPasswordErr("Please enter your Password.") 
        }else{
            if(!/(?=.{8,})/.test(password)){
                setPasswordErr("Enter at least 8 character")
            }
        }


        if( email && password){
            toast.success("Your Registration is successfully done")
            setEmail("")
            setPassword("")
        }
    }

  return (
   <section className='pt-[60px] pb-[140px] font-primary'>

        <ToastContainer
             position="top-center"
             autoClose={5000}
             hideProgressBar={false}
             newestOnTop={false}
             closeOnClick={false}
             rtl={false}
             pauseOnFocusLoss
             draggable
             pauseOnHover
             theme="dark"
             transition={Bounce}
             />
    
     <div className='flex gap-x-[129px] '>
        
        <div><img src={signup} alt="" /></div>
        <div className='py-[125px] '>

             {/* ---Title part--- */}
            <h2 className='font-medium text-[36px]'>Log in to Exclusive</h2>
            <p className='text-[16px] font-medium mt-6'>Enter your details below</p>

            <div>
                  {/* ---email part--- */}
                <div className='my-10 '>
                    <input value={email} onChange={handleEmail} className='border-b border-[#7D8184] w-[370px] text-[#7D8184] text-[16px] font-primary py-2 outline-0' type="email" placeholder='Email Or Phone number' />
                    <p>{emailErr}</p>
                    </div>
                {/* ---password part--- */}
                <div className=' relative mb-10'> 
                    <input value={password} onChange={handlePassword} 
                    className='border-b border-[#7D8184] w-[370px] text-[#7D8184] text-[16px] font-primary py-2 outline-0' type={show ? "text" : "password"}  placeholder='Password' />
                    <div className='absolute top-[10px] right-0'>
                        {
                      show ? <p onClick={(e)=>setShow(!show)}><RxEyeOpen size={24} /></p> : <p onClick={(e)=>setShow(!show)}><LuEyeClosed size={24} /></p>
                    }
                    </div>
                    <p>{passwordErr}</p>
                    </div>

                    {/* ---Button Part--- */}
            <div className='flex items-center gap-x-[87px]'>
                    {/* ---Log int button part--- */}
               <div className='bg-primary font-primary py-4 text-white rounded px-[48px] font-medium'> 
                <button onClick={handleCreateAccount}>Log In</button>
                </div>

             
                {/* ---forget button part--- */}
               <div className='text-center'>
                 <p><Link to="" className='text-primary font-primary text-base'>Forget Password?</Link></p>
               </div>
           </div>

            </div>
        </div>
    </div>
   </section>
  )
}

export default Login