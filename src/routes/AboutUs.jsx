import React from 'react'
import AdoptADog from '../components/Buttons/AdoptADogButton';
import TurnAMemberShip from '../components/Buttons/TurnAMemberShipButton';
import DonateButton from '../components/Buttons/DonateButton';

function AboutUs() {
    return (
        <div className="bg-gray-100 min-h-screen">
          {/* Seção de Destaque */}
          <section className="bg-amber-950 py-12 text-white text-center">
            <div className="container mx-auto">
              <h1 className="text-4xl font-semibold mb-4">Sobre Nós</h1>
              <p className="text-lg mb-8">Conheça nossa missão e como estamos fazendo a diferença na vida dos cachorros.</p>
              <AdoptADog/>
            </div>
          </section>
    
          {/* Seção de Missão */}
          <section className="py-12 bg-amber-100 text-amber-950 text-center">
            <div className="container mx-auto">
              <h2 className="text-2xl font-semibold text-center mb-8">Nossa Missão</h2>
              <p className="text-lg">
                Estamos empenhados em encontrar lares amorosos para cachorros em busca de uma segunda chance. Acreditamos que todos os cachorros merecem um lar cheio de amor e cuidado. Trabalhamos incansavelmente para resgatar, reabilitar e encontrar famílias adotivas para esses cachorros.
              </p>
              
            </div>
          </section>
    
          {/* Seção de Equipe */}
          <section className="bg-amber-950 py-12 text-white text-center">
            <div className="container mx-auto">
            <h2 className="text-2xl font-semibold text-center mb-8">Nossa Equipe</h2>
              <p className="text-lg text-center text-gray-200 mb-8">
                Nossa equipe é formada por apaixonados por cachorros dedicados a fazer a diferença na vida dos nossos amigos peludos. Trabalhamos juntos para proporcionar um futuro melhor para cada cachorro que resgatamos.
              </p>
              <TurnAMemberShip/>
         </div>
          </section>
    
          {/* Seção de Como Ajudar */}
          <section className="py-12 bg-amber-100 text-amber-950 text-center">
            <div className="container mx-auto">
              <h2 className="text-2xl font-semibold text-center mb-8">Como Você Pode Ajudar?</h2>
              <p className="text-lg">
                Há muitas maneiras de apoiar nossa missão. Você pode   <AdoptADog/>  ,   <DonateButton/>   ou se voluntariar em nosso abrigo:   <TurnAMemberShip/>  . Cada contribuição faz a diferença na vida dos cachorros em necessidade.
              </p>
            </div>
          </section>
        </div>
      );
}

export default AboutUs