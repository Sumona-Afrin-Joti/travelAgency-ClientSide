import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import authInitialization from "../firebase/firebase.init";


authInitialization();

const useFirebase = () => {
    const provider = new GoogleAuthProvider();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        console.log(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleNameChange = (e) => {
        setName(e.target.value)
    }


    const createNewUser = () => {

        if (password.length < 6) {
            setError('password should be at least 6 characters')
            return;
        }
       return createUserWithEmailAndPassword(auth, email, password)
           

    }


    useEffect(() => {
        setIsLoading(true);
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})

            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [auth]);



    const handleSignIn = () => {
      setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password)

    }


    const handleGoogleSignIn = () => {
       setIsLoading(true)
        return signInWithPopup(auth, provider)
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(() => {

            })
            .catch(error => {
                setError(error.message)
            })
    }


    return {
        handleEmailChange,
        handlePasswordChange,
        handleNameChange,
        createNewUser,
        handleSignIn,
        handleGoogleSignIn,
        handleSignOut,
        isLoading,
        setIsLoading,
        error,
        setError,
        user,
        setUserName,
    }

}

export default useFirebase;