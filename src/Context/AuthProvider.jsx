import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const provider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const signIn = (email,password) => {
         setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
        .finally(() => setLoading(false))
    }

    const signInGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth,provider)
        .finally(() => setLoading(false))
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
        .finally(() => setLoading(false))
    }

    useEffect(() => {
        setLoading(true);
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {

            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const userInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        logOut,
        signIn,
        signInGoogle
    }


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;