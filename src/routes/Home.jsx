import React from 'react'
import AdoptADog from '../components/Buttons/AdoptADogButton';
import LearnMore from '../components/Buttons/LearnMoreButton';

function Home() {
  const businessName = '4 Patas 1 Lar'
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Seção de Destaque */}
      <section className="bg-amber-950 py-12 text-white text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl font-semibold mb-4">Bem-Vindo ao {businessName}</h1>
          <p className="text-lg mb-8">Encontre um amigo peludo e faça a diferença na vida de um cachorro hoje!</p>
          <AdoptADog/>
        </div>
      </section>

      {/* Seção de Processo de Adoção */}
      <section className="bg-amber-100 py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-8">Processo de Adoção</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-amber-950 p-4 rounded-lg shadow-md hover:bg-amber-900 transition duration-300">
              <h3 className="text-xl text-amber-100 font-semibold mb-2">1. Escolha um Amigo</h3>
              <p className="text-amber-100">Navegue em nossa lista de cachorros disponíveis e escolha o seu novo amigo peludo.</p>
            </div>
            <div className="bg-amber-950 p-4 rounded-lg shadow-md hover:bg-amber-900 transition duration-300">
              <h3 className="text-xl font-semibold mb-2 text-amber-100">2. Preencha um Formulário</h3>
              <p className="text-amber-100">Preencha um formulário de adoção com suas informações e motivo para adotar.</p>
            </div>
            <div className="bg-amber-950 p-4 rounded-lg shadow-md hover:bg-amber-900 transition duration-300">
              <h3 className="text-xl font-semibold mb-2 text-amber-100">3. Avaliação</h3>
              <p className="text-amber-100">Nossa equipe entrará em contato para uma entrevista e avaliação da adoção.</p>
            </div>
            <div className="bg-amber-950 p-4 rounded-lg shadow-md hover:bg-amber-900 transition duration-300">
              <h3 className="text-xl font-semibold mb-2 text-amber-100">4. Adoção Finalizada</h3>
              <p className="text-amber-100">Após a aprovação, você pode finalizar a adoção e levar seu novo amigo para casa!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Sobre a Empresa */}
      <section className="bg-amber-950 py-24 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Sobre a {businessName}</h2>
          <p className="text-lg mb-8">{businessName} é uma organização dedicada a encontrar lares amorosos para cachorros em busca de uma segunda chance.</p>
          <LearnMore/>
        </div>
      </section>
    </div>
  );
}

export default Home