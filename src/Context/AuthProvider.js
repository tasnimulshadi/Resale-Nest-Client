import React, {
    useState,
    createContext,
    useEffect
} from 'react';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    updateProfile
} from 'firebase/auth';
import firebaseConfig_app from '../Firebase/firebase.config';

const auth = getAuth(firebaseConfig_app);
export const authContext = createContext();

//function
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //firebase
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (name, imgUrl) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: imgUrl
        });
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logoutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    //google
    const provider = new GoogleAuthProvider();
    const signInGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    //auth state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }
    }, [user]);


    const value = {
        user,
        loading,
        createUser,
        loginUser,
        logoutUser,
        signInGoogle,
        updateUser,
    }

    return (
        <authContext.Provider value={value}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;