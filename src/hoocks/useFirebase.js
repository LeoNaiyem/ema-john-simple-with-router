import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";


initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

//handle google sign in
    const signInWithGoogle = () => {
       return signInWithPopup(auth, googleProvider);
        // .then((result) => {
        //     const credential = GoogleAuthProvider.credentialFromResult(result);
        //     const token = credential.accessToken;
        //     const user = result.user;
        //     console.log(token, user);
        // }).catch((error) => {
        //     // Handle Errors here.
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        //     // The email of the user's account used.
        //     const email = error.customData.email;
        //     // The AuthCredential type that was used.
        //     const credential = GoogleAuthProvider.credentialFromError(error);
        //     console.log(errorCode, errorMessage, email, credential);
        //     setError(error);
        // });
    };

// handle sign out
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});

        })
        .catch((error) => {
            setError(error);
        });
    }

//spacial observer
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.uid;
              setUser(user);
              console.log(uid);
            } else {
              // User is signed out
              // ...
            }
          });
    }, [auth]);

    return {
        user,
        error,
        signInWithGoogle,
        logOut
    }
}
export default useFirebase;