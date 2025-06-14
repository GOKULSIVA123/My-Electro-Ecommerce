import React, { useContext, useState } from 'react'
import {useForm} from "react-hook-form"
import { cartcontent } from '../App';
import bg from "../assets/Background.png"
import { useNavigate } from 'react-router-dom';
function Login() {
  const {login1,setLogin1}=useContext(cartcontent);
  const navigate=useNavigate();
  const {register,handleSubmit, formState: { errors }}= useForm();
  const [login,setLogin]=useState(false);
  const onLoginSubmit = (data) => {
    setLogin1(true)
    console.log("Login data:", data);
    navigate("/"); 
  };
  const onSignupSubmit = (data) => {
    setLogin1(true)
    console.log("Signup data:", data);

    navigate("/"); 
  };

  return (
    <>
    <div className='min-h-screen flex flex-col justify-center items-center bg-cover bg-center' style={{ backgroundImage: `url(${bg})` }}>
      <div className='max-w-7xl mx-auto p-6 flex flex-col justify-center items-center gap-5'>
        {login?
        <div className='w-[90vw] max-w-[400px] min-w-[0] min-h-[400px] bg-white/10 backdrop-blur-md backdrop-opacity-90 bg-white md:min-w-[400px] md:min-h-[400px] rounded-lg flex flex-col items-center justify-center gap-5'>
            <h1 className='text-black font-[600] text-2xl mt-4'>LOGIN</h1>
            <form className='flex flex-col justify-start gap-2'  onSubmit={handleSubmit(onLoginSubmit)}>
            <label htmlFor='email' className='font-[600] text-black' >Email:</label>
            <input id='email' type='email' placeholder='Enter Your Email' {...register('email',{ required:'email is required',pattern:{value:/\S+@\S+\.\S+/,message:'enter a valid email'},})} className='bg-white/0 border border-black placeholder-gray-100  p-1 w-72 rounded-full'></input>
            {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>)}
            <label htmlFor='password' className='font-[600] text-black'>Password:</label>
            <input id='password' type='password' placeholder='Enter Your Password' {...register('password',{required:'password is required',minLength:{value:5,message: "Password must be at least 5 characters",},})} className='bg-white/0 border border-black placeholder-gray-100 p-1 w-72 rounded-full'></input>
            {errors.password && (
                <span className="text-red-500 text-sm">{errors.password.message}</span>
            )}
            <div className='flex flex-col items-center mt-4'>
            <button className='px-4 py-2 bg-black text-white rounded-lg font-[600] 'type='submit' >Login</button>
            </div>
            </form>
        </div>:<div className='w-[90vw] max-w-[400px] min-w-[0] min-h-[400px] bg-white/10 backdrop-blur-md backdrop-opacity-60 md:min-w-[400px] md:min-h-[400px] rounded-lg flex flex-col items-center justify-center gap-5'>
            <h1 className='text-black font-[600] text-2xl mt-4'>SIGN UP</h1>
            <form className='flex flex-col justify-start gap-2' onSubmit={handleSubmit(onSignupSubmit)}>

            <label htmlFor='email1' className='font-[600] text-black'>Email:</label>
            <input id='email1' type='email' placeholder='Enter Your Email'  {...register('email1',{ required:'email is required',pattern:{value:/\S+@\S+\.\S+/,message:'enter a valid email'},})}  className='bg-white/0 border border-black placeholder-gray-100  p-1 w-72 rounded-full'></input>
            {errors.email1 && (
            <span className="text-red-500 text-sm">{errors.email1.message}</span>)}
            <label htmlFor='password1' className='font-[600] text-black'>Password:</label>
            <input id='password1' type='password' placeholder='Enter Your Password'{...register('password1',{required:'password is required',minLength:{value:5,message:"Password must be at least 5 characters"},})}  className='bg-white/0 border border-black placeholder-gray-100  p-1 w-72 rounded-full'></input>
             {errors.password1 && (
                <span className="text-red-500 text-sm">{errors.password1.message}</span>
            )}
            <div className='flex flex-col items-center mt-4'>
            <button type='submit' className='px-4 py-2 bg-black text-white rounded-lg font-[600]' >Sign Up</button>
            </div>
            </form>

        </div>
}
      </div>
      <div className='flex flex-row gap-2 rounded-2xl '>
        
      <button className={`px-8 py-2 font-[600]  ${login?'bg-purple-800 text-white':'bg-white text-black'} rounded-full`} onClick={()=>setLogin(true)}>LOGIN</button>
       <button className={`px-8 py-2 font-[600]  ${login?'bg-white text-black':'bg-purple-800 text-white'}  rounded-full `} onClick={()=>setLogin(false)}>SIGN UP</button>
        </div>
    </div>
    </>
  )
}

export default Login;