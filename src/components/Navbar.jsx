import React from 'react'
import { Link } from 'react-router-dom'
import {useAuthState} from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

const Navbar = () => {

  const [user] = useAuthState(auth)

  return (
    <div className='absolute-top border' style={{backgroundColor:"purple"}}>
        <nav className='navbar'>
    <div>
        {/* <img className='ms-5' src="logo192.png" width={30} height={30} alt="react"/> */}
    </div>
    <Link className="nav-link" to="/">Home</Link>
    <div>
      {
        user && (
          <>
          <span className='pe-4'>
            Signed in as {user.displayName}
          </span>
          <button className='btn btn-primary btn-sm me-3'
          onClick={()=>signOut(auth)}>Logout</button>
          </>
        )
      }
    </div>
        </nav>
    </div>
  )
}

export default Navbar