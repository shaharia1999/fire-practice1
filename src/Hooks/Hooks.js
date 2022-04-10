
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import Fire from '../firebase.init';



const app=Fire();
const Googleprovider = new GoogleAuthProvider();
const  auth=getAuth(app)
const FireHooks = () => {
    const [user,setUser]=useState({});
    const singUpWithgoole=()=>{
        signInWithPopup(auth,Googleprovider)
        .then(result=>{
            const user=result.user;
            setUser(user);
            console.log(user);
        })
        .catch((error)=>{
            console.log(error)
        }
        );

    }
    const singinIthgoogle=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });

    }
    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            setUser(user);

        })
    },[])

    return{
        singUpWithgoole,
        user,
        singinIthgoogle,

    }; 
};

export default FireHooks;