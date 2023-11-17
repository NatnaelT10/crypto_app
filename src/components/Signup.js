import React from 'react'
import "./Signup.css"
import Crypto from "../assets/trade.png"

const Signup = () => {
  return (
        <div className='signup'>
            <div className='container'>
                
                <div className='vänster'>
                    <img src={Crypto} alt="" />
                </div>
                
                <div className='höger'>
                    <h2>Earn passive income with crypto.</h2>
                    <p>Earn up to 12% annual rewards on 30+ digital assets. Simply hold. </p>
                    <div className='input__container'>
                        <input type='email' placeholder='Enter your email' />
                        <button className='btn'>Learn More</button>
                    </div>
                </div>

            </div>
        
        </div>
  )
}

export default Signup