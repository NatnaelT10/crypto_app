import React from 'react'
import "./Navbar.css"
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
const [click, setClick] = React.useState(false)

const handleClick = function(){
    setClick(prevClick => !prevClick)
}

  return (
    <div className='header'>
        <div className='container'>
            <h1>De <span className='primary'>Fi</span></h1>
            <ul className={click ? "nav-menu" : "nav-menu active"}>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/'>Featured</a>
                </li>
                <li>
                    <a href='/'>Earn</a>
                </li>
                <li>
                    <a href='/'>Contact</a>
                </li>
            </ul>
            <div className='btn-group'>
                <button className='btn'>Connect Wallet</button>
            </div>
            <div className='mobil' onClick={handleClick}>
                {click ? <FaTimes size={20} style={{color: "#333"}} /> : <FaBars size={20} style={{color: "#333"}} />}
            </div>
        </div>
    </div>
  )
}

export default Navbar