import React, { useEffect, useState } from 'react'
import Sidebar1 from "./components/Sidebar1"
import Profile from './components/Profile'
import { useFirebase } from '../Firebase/FireBase'
import { useNavigate } from 'react-router-dom'

function ProfilePage() {
  const firebase = useFirebase()
  const navigate = useNavigate()
  const [user,setUser] = useState("")  

  const getData=async()=>{
    const user =await firebase.getDocs(firebase.user.uid)
    setUser(user.data())
  }

  useEffect(()=>{
     if(!firebase.user){
       navigate('/login')
       setUser(firebase.user)
     }else{
      getData()
     }
  },[firebase.user,navigate])
  return (
    <div className='flex'>
        <Sidebar1/>
        <Profile user={user}/>
    </div>
  )
}

export default ProfilePage