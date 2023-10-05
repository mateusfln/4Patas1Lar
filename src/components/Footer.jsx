import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-orange-400 text-white p-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Coluna 1: Informações de Contato */}
          <div>
            <h2 className="text-xl font-semibold mb-4 ">Contato</h2>
            <p>Endereço: Florianópolis, xxx</p>
            <p>Email: contato@4patas1lar.com</p>
            <p>Telefone: (12) 3 4567-8910</p>
          </div>

          {/* Coluna 2: Links Úteis */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Links Úteis</h2>
            <ul>
              <li><Link className='hover:text-amber-950 transition duration-300' to="/adopt">Adotar um Cachorro</Link></li>
              <li><Link className='hover:text-amber-950 transition duration-300' to="/donate">Doar</Link></li>
              <li><Link className='hover:text-amber-950 transition duration-300' to="/commonQuestions">Perguntas Frequentes</Link></li>
              <li><Link className='hover:text-amber-950 transition duration-300' to="/aboutUs">Sobre Nós</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Redes Sociais */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Redes Sociais</h2>
            <ul>
              <li><a href="https://facebook.com/4patas1lar" rel="noopener noreferrer" target="_blank" className="flex items-center space-x-2 hover:text-amber-950 transition duration-300"><i className="fab fa-facebook"></i> Facebook</a></li>
              <li><a href="https://instagram.com/4patas1lar/" rel="noopener noreferrer" target="_blank" className="flex items-center space-x-2 hover:text-amber-950 transition duration-300"><i className="fab fa-instagram"></i> Instagram</a></li>
            </ul>
          </div>
          
        </div>
      </div>
      <div className="mt-6 text-center">
        <p>&copy; {new Date().getFullYear()} 4 Patas 1 Lar. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer