import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import app from '../firebase/firebase.config';


export const MainContext = createContext()
const auth = getAuth(app)
const AuthContex = ({ children }) => {
    const [user, setUser] = useState(null)
    const [ loader, setLoader] = useState(true)


    const singupwithEmail = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singupWithGoogle = (provider) => {
        setLoader(true)
        return signInWithPopup(auth, provider)
    }
    const singUpWithFacebook = (facebookProvider) => {
        setLoader(true)
        return signInWithPopup(auth, facebookProvider)
    }

    const singIn = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoader(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const logOut = () => {
       return signOut(auth)
    }
    const userInfo = { user, logOut, loader, setLoader, singupwithEmail, singupWithGoogle, singIn, singUpWithFacebook }
    return (
        <MainContext.Provider value={userInfo}>
            {children}
        </MainContext.Provider>
    );
};

export default AuthContex;