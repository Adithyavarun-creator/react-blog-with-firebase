import React, { useState } from 'react'
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import {auth} from '../firebase'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Register = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [name,setName] = useState('')
    const navigate= useNavigate()
    const handleSignup = async() => {
        
        try{
            await createUserWithEmailAndPassword(auth,email,password)
            //update profilename
            updateProfile(auth.currentUser,{displayName:name})
            navigate('/')
        }catch(error){
            toast(error.code,{type:'error'})
        }
    }

  return (
    <div className='border p-3 bg-light'
    style={{marginTop:70}}>
    <h1>Register</h1>   
    <div className='form-group'>
        <label>Name</label>
        <input type="text" 
        value={name}
        onChange={(e)=>setName(e.target.value)}
        className='form-control' placeholder='Enter your name'/>
    </div> 

    <div className='form-group'>
        <label>Email</label>
        <input type="email" 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        className='form-control' placeholder='Enter your email'/>
    </div> 

    <div className='form-group'>
        <label>Passsword</label>
        <input type="password" 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        className='form-control' placeholder='Enter your password'/>
    </div> 
    <br />
    <button className='btn btn-primary' onClick={handleSignup}>Register</button>
     </div>
  )
}

export default Register