import React, { Fragment, useContext, useState } from 'react'
import { Container } from './NavBar'
import { FcCheckmark } from 'react-icons/fc'
import '../Styles/Pricing.css'
function Pricing() {
   const { toggle } = useContext(Container)
   const [toggleBasik, setToggleBasik] = useState(true)
   const [toggleStandart, setToggleStandart] = useState(true)
   const [togglePremium, setTogglePremium] = useState(true)

   const [basicCost, setBasicCost] = useState("7.99")
   const [standartCost, setStandrtCost] = useState("12.99")
   const [premiumCost, setPremiumCost] = useState("18.99")
   return (
      <Fragment>
         <div className={toggle ? 'backgroun-Color-Main' : 'background-Color-secondary'}>
            <div className='Pricing-container'>
               <div className={toggle ? 'Pricing-option1' : 'light-Theme1'}>
                  <h2>Basic</h2>
                  <div className='Price' >
                     <h3>{basicCost}</h3><h4 id='MonthlyYearly'>{toggleBasik ? '/Monthly' : '/Yearly'}</h4>
                  </div>
                  <span><FcCheckmark fontSize={25} id="checkmark" />"Ultimet Films and tv programmes" </span>
                  <span><FcCheckmark fontSize={25} id="checkmark" />"Whatch on mobile and tablet"</span>
                  <span><FcCheckmark fontSize={25} id="checkmark" />"Cancel at anytime"</span>
                  <span><FcCheckmark fontSize={25} id="checkmark" />
                  "First month completely free" </span>
                  <a href="#fakeLink" class="btn red block">Buy now</a>

                  <div id='darktheme'>
                     <div className='Pricing-yearly-darktheme' onClick={() => {
                        setToggleBasik(!toggleBasik)
                        if (toggleBasik) {
                           setBasicCost("60")
                        }
                        else {
                           setBasicCost(7.99)
                        }
                     }}>
                        <div className={toggleBasik ? 'Pricing-monthly-darktheme' : 'Pricing-monthly-light'}></div>
                     </div>
                  </div>
               </div>

               <div className={toggle ? 'Pricing-option2' : 'light-Theme2'}>
                  <h2>Standart</h2>
                  <div className='Price' >
                     <h3>{standartCost}</h3>
                     <h4 id='MonthlyYearly'>{toggleStandart ? '/Monthly' : '/Yearly'}</h4>
                  </div>
                  <span><FcCheckmark fontSize={25} id="checkmark" />"Ultimet Films and tv programmes" </span>
                  <span><FcCheckmark fontSize={25} id="checkmark" />"Whatch on mobile and tablet"</span>
                  <span><FcCheckmark fontSize={25} id="checkmark" />"Cancel at anytime"</span>
                  <span><FcCheckmark fontSize={25} id="checkmark" />"First month completely free"</span>
                  <button id="button2" >Buy now</button>
                  <div id='darktheme'>
                     <div className='Pricing-yearly-darktheme' onClick={() => {
                        setToggleStandart(!toggleStandart)
                        if (toggleStandart) {
                           setStandrtCost("120")
                        }
                        else {
                           setStandrtCost(12.99)
                        }
                     }}>
                        <div className={toggleStandart ? 'Pricing-monthly-darktheme' : 'Pricing-monthly-light'}></div>
                     </div>
                  </div>
               </div>

               < div className={toggle ? 'Pricing-option3' : 'light-Theme3'}>
                  <h2>Premium</h2>
                  <div className='Price' >
                     <h3>{premiumCost}</h3>
                     <h4 id='MonthlyYearly'>{togglePremium ? '/Monthly' : '/Yearly'}</h4>
                  </div>
                  
                     <span><FcCheckmark fontSize={25} id="checkmark" />"Ultimet Films and tv programmes" </span>
                     <span><FcCheckmark fontSize={25} id="checkmark" />"Whatch on mobile and tablet"</span>
                     <span><FcCheckmark fontSize={25} id="checkmark" />"Cancel at anytime"</span>
                     <span><FcCheckmark fontSize={25} id="checkmark" />"First month completely free"</span>
                  <a href="#fakeLink" class="btn red block">Buy now</a>
                                    <div id='darktheme'>
                     <div className='Pricing-yearly-darktheme' onClick={() => {
                        setTogglePremium(!togglePremium)
                        if (togglePremium) {
                           setPremiumCost("180")
                        }
                        else {
                           setPremiumCost(18.99)
                        }
                     }}>
                        <div className={togglePremium ? 'Pricing-monthly-darktheme' : 'Pricing-monthly-light'}></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   )
}

export default Pricing