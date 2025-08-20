import React, { createContext, useEffect, useState } from 'react'
import { app } from '../Firebase/firebase.config';
import { getAuth,  onAuthStateChanged } from "firebase/auth";
export const  AuthContext=createContext(null)

export default function AuthProviders({children}) {
    const [user, setUser]=useState(null)
    const [loading, setLoading]=useState(true)
      const auth = getAuth(app);

      const createUser= ( email, password) =>{
        return createU
      }

 useEffect(()=>{
   const unsebscribe = onAuthStateChanged(auth, currentUser =>{
    setUser(currentUser)
    setLoading(false)
    return unsebscribe()
   })
 },[])

const authInfo ={
    user,
    loading
}
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}
