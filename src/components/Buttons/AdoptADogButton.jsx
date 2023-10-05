import React from 'react'
import { Link } from 'react-router-dom'

function AdoptADog() {
  return (
    <Link to="/adopt" className="bg-amber-100 text-amber-950 hover:bg-amber-200 transition duration-300 text-lg px-6 py-3 rounded-full inline-block border-solid border-2 border-amber-950">Adotar um Cachorro</Link>
  )
}

export default AdoptADog