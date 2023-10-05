import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'

function NavBar() {
  return (
    <header className="bg-orange-400 p-4">
    <div className="container mx-auto flex justify-between items-center">
      {/* Logo à esquerda */}
      <div className="text-white font-bold text-lg">
        <Link to="/">
        <img src={logo} alt='logo4Patas1Lar'className='h-20 w-20'></img>
        </Link>
      </div>
      
      {/* Itens à direita */}
      <div className="flex space-x-4">
        <Link to="/" className="text-white hover:text-amber-950 transition duration-300">Home</Link>
        <Link to="/login" className="text-white hover:text-amber-950 transition duration-300">Login</Link>
        <Link to="/contact" className="text-white hover:text-amber-950 transition duration-300">Contact</Link>
        
      </div>
     </div>
    </header>
  )
}

export default NavBar