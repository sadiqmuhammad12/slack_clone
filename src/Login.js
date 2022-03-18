import React from 'react'
import {Button} from '@material-ui/core';
import './Login.css';
import {auth,provider} from './firebse';
import { signInWithPopup,GoogleAuthProvider} from "firebase/auth";
import {StateProvider} from './StateProvider';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
const Login = () => {
  const [state,dispatch] = useStateValue();
    const signIn = () => {
    // signInWithPopup( provider)
    // .then((res) => {
    //     console.log(res)
    // })
    // .catch((err) => {
    //     console.log(err)
    // })

    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(result);
    // ...
    dispatch({
      type:actionTypes.SET_USER,
      user : result.user,
    })
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
    }
  return (
    <div className='login'>
     <div className="login_container">
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQjq8IjX-gD0q4s27w9X9-Xofwsa4QvbwANg&usqp=CAU" alt="not found" />
         <h1>SignIn to Technical programmer HQ</h1>
         <p>technical.slack.com</p>
         <Button onClick={signIn}>Sign in with google</Button>
     </div>
    </div>
  )
}

export default Login;