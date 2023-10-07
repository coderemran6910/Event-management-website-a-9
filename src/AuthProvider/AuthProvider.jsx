import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {

    const [user, setUser]= useState(null)





// Create User 
    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
// Login User 
    const loginUser =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }


// signInWithGoogle
const signInWithGoogle =()=>{
    return signInWithPopup(auth, googleProvider)
}


// SignOut
const logOut =()=>{
    return signOut(auth)
}

// On AUth State changed
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
    })
    return ()=>{
        unsubscribe()
    }
}, [])

    const authInfo = {
        createUser,
        loginUser,
        signInWithGoogle,
        user,
        logOut
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;