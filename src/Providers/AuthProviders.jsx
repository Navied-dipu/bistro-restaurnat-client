import React, { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
export const AuthContext = createContext(null);

export default function AuthProviders({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);
  const googleProvider= new GoogleAuthProvider()
console.log(user)
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn=(email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
const googleSignIn=()=>{
  setLoading(true)
  return signInWithPopup(auth, googleProvider)
}
  const updateUserProfile=(name, photo)=>{
    setLoading(true)
    return updateProfile(auth.currentUser, {
      displayName: name , photoURL: photo
    })
  }
  const logOut=()=>{
    setLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unsebscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      return () => {
        unsebscribe();
      };
    });
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    googleSignIn,
    updateUserProfile
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
