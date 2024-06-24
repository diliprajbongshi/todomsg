// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { styled } from '@mui/material/styles';
import registerImg from '../assets/register.png'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { FaEyeSlash,FaEye  } from "react-icons/fa";
import "../index.css"
import { getAuth, createUserWithEmailAndPassword ,sendEmailVerification,signInWithEmailAndPassword  } from "firebase/auth";
import { CirclesWithBar } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  let [openEye,setOpeneye] =  useState(false)
  let [loading,setLoading] =  useState(false)
  const [regData,setRegdata] = useState({
    email:"",
    password:""
  })
  const [regError,setRegError] = useState({
    email:"",
    password:""
  })
  const handleChange = (e)=>{
    setRegdata({...regData,[e.target.name]:e.target.value});
    setRegError({...regError,[e.target.name]:""});
  }

  const handleSubmit = ()=>{ 
    const pattern = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
    if(!regData.email){
      setRegError({...regError,email:"email is Required"});
    }else if(!pattern.test(regData.email)){
      setRegError({...regError,email:"Valid email is Required"});
    }else if(!regData.password){
      setRegError({...regError,password:"Password is Required"});
    }else if(regData.password.length < 6){
      setRegError({...regError,password:"Password is greater than six charecter"});
    }else{
      setLoading(true)
      signInWithEmailAndPassword (auth, regData.email, regData.password)
      .then((userCredential) => {
          setLoading(false);
          toast.success('Login successfully done', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            navigate("/home")
          console.log("user created",userCredential);
         
      }).catch((error) => {
          setLoading(false);
          // eslint-disable-next-line no-unused-vars
          const errorCode = error.code;
          // eslint-disable-next-line no-unused-vars
          const errorMessage = error.message;
          console.log(error.message);
          if(error.message.includes("auth/invalid-credential")){
             setRegError({...regError,email:"Invalid credential"})
          }
        });
      }
  }
 
  return (
    <>
       <Grid container spacing={4}>
      <Grid  xs={6} >
         <div className="registrationBox">
            <h1 >Get started with easily Login</h1>
            <p>Free register and you can enjoy it</p>
             <div>
               <TextField name='email' onChange={handleChange} id="outlined-basic" label="Email" variant="outlined" />
               {regError.email &&  <Alert severity="warning">{regError.email}</Alert>}

               <div className='password'>
               <TextField  name='password' type={openEye ? 'text':'password'} onChange={handleChange} id="outlined-basic" label="Password" variant="outlined" />
               {regError.password &&  <Alert severity="warning">{regError.password}</Alert> }
               {!openEye &&
                   <div className='eye'>
                      <FaEyeSlash onClick={()=>setOpeneye(!openEye)} />
                   </div>
                }
               {openEye &&
                   <div className='eye'>
                      <FaEye onClick={()=>setOpeneye(!openEye)} />
                   </div>
                }
               </div>
               {!loading && 
               <Button disabled={false} onClick={handleSubmit} variant="contained">Submit Data 
               </Button>
               }
               {loading && 
               <div className='loader'>
                 <CirclesWithBar
                      height="30"
                      width="30"
                      color="#4fa94d"
                      outerCircleColor="#4fa94d"
                      innerCircleColor="#4fa94d"
                      barColor="#4fa94d"
                  />
                 </div>
                }
              
             </div>
         </div>
      </Grid>
      <Grid  xs={6}>
        <img className='registerImg' src={registerImg} alt="registerImg" />
      </Grid>
    </Grid>
    </>
  )
}

export default Login