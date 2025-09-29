import React, { useState } from 'react'
import signup from '../assets/signup.png'
import { FcGoogle } from "react-icons/fc";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { LuEyeClosed } from "react-icons/lu";
import { RxEyeOpen } from "react-icons/rx";
import { Link, useNavigate } from 'react-router';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";



const Registration = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)

    const navigate = useNavigate()

    const [nameErr, setNameErr] = useState("")
    const [emailErr, setEmailErr] = useState("")
    const [passwordErr, setPasswordErr] = useState("")

    const handleName=(event)=>{
        setName(event.target.value);
        setNameErr("")

    }
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
        if(!name){
           setNameErr("Please enter your name.") 
        }
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


        if(name && email && password){

       const auth = getAuth();
       
         createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
           console.log(user);
           sendEmailVerification(auth.currentUser)
           toast.success("Your Registration is successfully done")

          

           setTimeout(()=>{
            navigate("/signin")
           },2000)
       })
      .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
        // ..
        });


            // toast.success("Your Registration is successfully done")
            setName("")
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
            <h2 className='font-medium text-[36px]'>Create an account</h2>
            <p className='text-[16px] font-medium mt-6'>Enter your details below</p>

            <div>
                {/* ---name part--- */}
                <div className='mt-12'>
                    <input value={name} onChange={handleName} className='border-b border-[#7D8184]  w-[370px] text-[#7D8184] text-[16px] font-primary py-2 outline-0' type="text" placeholder='Name' />
                    <p>{nameErr}</p>
                    </div>
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
                 
                  {/* ---create account button part--- */}
               <div className='w-[370px] bg-primary font-primary py-4 text-white rounded px-[112px] font-medium'> 
                <button onClick={handleCreateAccount}>Create Account</button>
                </div>

                  {/* ---sign up button part--- */}
               <div className='w-[370px] border border-[#c2c4c5] font-primary py-4 rounded font-medium px-[74px] mt-4 mb-8'>
                <button  className='flex items-center gap-x-4' >
                    <FcGoogle size={28} /> <span>Sign up with Google</span>
                    </button>
               </div>
                {/* ---login button part--- */}
               <div className='text-center'>
                <p>Already have account? <Link to="/signin" className='ml-4'>Log in</Link></p>
               </div>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Registration