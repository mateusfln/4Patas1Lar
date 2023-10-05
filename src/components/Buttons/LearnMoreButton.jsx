import React from 'react'
import { Link } from 'react-router-dom'

function LearnMore() {
  return (
    <Link to="/aboutUs" className="bg-amber-100 text-amber-950 hover:bg-amber-200 transition duration-300 text-lg px-6 py-3 rounded-full inline-block">Saiba Mais</Link>
  )
}

export default LearnMore