/* eslint-disable react/jsx-no-comment-textnodes */
import React, { createContext, Fragment  } from 'react'
import firebase from 'firebase/compat/app';
import '../Styles/LoginStyle.css'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'


firebase.initializeApp({
   apiKey: "AIzaSyCGKOSaqvqleRI1rQOMTKwDslwiV0IQGdw",
   authDomain: "film-chat-fd731.firebaseapp.com",
   projectId: "film-chat-fd731",
   storageBucket: "film-chat-fd731.appspot.com",
   messagingSenderId: "674950960980",
   appId: "1:674950960980:web:460f2762d21c4a18865ac1",
   measurementId: "G-N0ELMPP5Z7"
});



const Context = createContext(null)


const auth = firebase.auth();
const firestore = firebase.firestore();

export default function Login() {
   const Context = createContext(null)


   const auth = firebase.auth();
   const firestore = firebase.firestore();
  return (
     <Fragment>
        <div className='mainBgColor' >
           <div className='movies-container '>
              <Fragment>
                 <div id='mainBgColor'>
                    <div class="form">
                       <div className='Pricing-container' class="title">Welcome</div>
                       <div class="subtitle">Let's create your account!</div>
                       <div class="input-container ic1">
                          <input id="firstname" class="input" type="text" placeholder=" " />
                          <div class="cut"></div>
                          <label for="firstname" class="placeholder">First name</label>
                       </div>
                       <div class="input-container ic2">
                          <input id="lastname" class="input" type="text" placeholder=" " />
                          <div class="cut"></div>
                          <label for="lastname" class="placeholder">Last name</label>
                       </div>
                       <div class="input-container ic2">
                          <input id="email" class="input" type="text" placeholder=" " />
                          <div class="cut cut-short"></div>
                          <label for="email" class="placeholder">Email</label>
                       </div>
                       <button type="text" class="submit button-logo">submit</button>
                       <button type="text" class="submit button-logo">submit Google</button>
                    </div>
                 </div>
              </Fragment>
</div>
         </div>
      </Fragment>               
 
  )}
