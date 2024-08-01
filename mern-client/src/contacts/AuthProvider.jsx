import React, { useState, createContext } from 'react'
import app from '../firebase/firebase.config';
import {getAuth,createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect } from 'react';
import { GoogleAuthProvider } from 'firebase/auth'
import Logout from '../components/Logout';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password) 

    }

    const loginwithGoogle = () =>{
      setLoading(true);
      return signInWithPopup(auth,googleProvider)
    }

    const login = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
      return signOut(auth)
    }

    useEffect( () => {
      const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        console.log(currentUser);
        setUser(currentUser);
        setUser(currentUser)
        setLoading(false);
      });
      return () => {
        return unsubscribe();
      }
    },[])

    const authInfo = {
        user,
        createUser,
        loginwithGoogle,
        loading,
        login,
        logOut
    };
    
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;