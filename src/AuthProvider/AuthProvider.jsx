import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {

    const [user, setUser]= useState(null)
    const [loader, setLoader] = useState(true)





// Create User 
    const createUser =(email, password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
// Login User 
    const loginUser =(email, password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


// signInWithGoogle
const signInWithGoogle =()=>{
    setLoader(true)
    return signInWithPopup(auth, googleProvider)
}


// SignOut
const logOut =()=>{
    setLoader(true)
    return signOut(auth)
    
}

// On AUth State changed
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
        setLoader(false)
    })
    return ()=>{
        unsubscribe()
    }
}, [])

// Update Profile 
const updateUserProfile = (username , profileImage)=>{
    setLoader(true)
    return updateProfile(auth.currentUser, {
        displayName: username,
        photoURL: profileImage
    })
}





    const authInfo = {
        createUser,
        loginUser,
        signInWithGoogle,
        user,
        logOut,
        loader,
        updateUserProfile
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