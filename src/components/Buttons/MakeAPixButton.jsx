import React from 'react'
import { Link } from 'react-router-dom'

function MakeAPixButton() {
  return (
    <Link to="https://nubank.com.br/pagar/1jtk1e/x2zpbRcK8D" target="_blank" rel="noopener noreferrer" className="bg-amber-100 text-amber-950 hover:bg-amber-200 transition duration-300 text-lg px-6 py-3 rounded-full inline-block border-solid border-2 border-amber-950">Faça um PIX!</Link>
  )
}

export default MakeAPixButton