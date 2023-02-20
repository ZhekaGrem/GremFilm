import React from 'react'
import {  } from 'react-dom'
import '../Styles/Videos.css'
import '../Styles/Chat.css'

export default function Chat() {
  return (
<>
        <div className='mainBgColor'>
           <div className='movies-container'>
              <div >
                 
              </div>
              
              <ol class="chat">
                 <li class="other">
                    <div class="msg">
                       <div class="user">Marga<span class="range admin">@Admin</span></div>
                       <p>Dude</p>
                       <p>Want to go dinner? </p>
                       <time>20:17</time>
                    </div>
                 </li>
                 <li class="self">
                    <div class="msg">
                       <p>Puff...</p>
                       <p>I'm still doing the Góngora comment... </p>
                       <p>Better other day</p>
                       <time>20:18</time>
                    </div>
                 </li>
                 <li class="self">
                    <div class="msg">
                       <p>Puff...</p>
                       <p>I'm still doing the Góngora comment... </p>
                       <p>I'm still doing the Góngora comment... </p>
                       <p>I'm still doing the Góngora comment... </p>
                       <p>Better other day</p>
                       <time>20:18</time>
                    </div>
                 </li>
                 
              </ol>
              <div class="typezone">
                 <form><textarea type="text" placeholder="Say something"></textarea><input type="submit" class="send" value="" /></form>
                 </div>
           </div>
        </div>
</>  )
}
