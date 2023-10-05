import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import rex from '../images/rex.jpg'
import luna from '../images/luna.jpg'
import bella from '../images/bella.jpg'
import charlie from '../images/charlie.jpg'

const dogsData = [
    {
      id: 1,
      name: 'Rex',
      breed: 'Labrador Retriever',
      age: '2 anos',
      description: 'Rex é um labrador enérgico e adora brincar ao ar livre.',
      imageUrl: rex,
      disponibility: true,
    },
    {
      id: 2,
      name: 'Luna',
      breed: 'Golden Retriever',
      age: '1 ano',
      description: 'Luna é uma golden retriever carinhosa e ótima com crianças.',
      imageUrl: luna,
      disponibility: false,
    },
    {
      id: 3,
      name: 'Bella',
      breed: 'Bulldog Francês',
      age: '3 anos',
      description: 'Bella é um bulldog francês tranquilo e adora cochilos no sofá.',
      imageUrl: bella,
      disponibility: true,
    },
    {
      id: 4,
      name: 'Charlie',
      breed: 'Dálmata',
      age: '4 anos',
      description: 'Charlie é um dálmata amigável e está sempre cheio de energia.',
      imageUrl: charlie,
      disponibility: false,
    },
    // Adicione mais cachorros aqui...
  ];
  
  function Adopt() {
    const [selectedDog, setSelectedDog] = useState(null);
  
    const handleDogSelect = (dog) => {
      setSelectedDog(dog);
    };
  
    const handleSubmitDog = (event) => {
      
    };
  
    return (
      <div className="bg-amber-100 min-h-screen">
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-semibold mb-4 text-center text-amber-950 pb-20">Adote um Cachorro</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dogsData.map((dog) => (
              <div
                key={dog.id}
                className={`bg-amber-950 p-4 rounded-lg shadow-md cursor-pointer transition duration-300 text-amber-100${
                  selectedDog === dog ? 'border-4 border-blue-500' : ''
                } `}
                onClick={() => handleDogSelect(dog)}
              >
                <img
                  src={dog.imageUrl}
                  alt={dog.name}
                  className="w-full h-48 object-cover rounded-md mb-4 text-amber-100"
                />
                <h3 className="text-xl font-semibold mb-2 text-amber-100">{dog.name}</h3>
                <p className="text-amber-100">{dog.breed}</p>
                {selectedDog === dog && (
                  <>
                    <p className="text-amber-100">{dog.age}</p>
                    <p className="text-amber-100 mt-4 mb-8">{dog.description}</p>
                    <div className={`bg-${dog.disponibility ? 'green' : 'red'}-500 text-amber-100 px-4 py-2 rounded-md mt-2 mb-4 text-center`}>
                      {dog.disponibility ? 'Disponível' : 'Adoção em Andamento'}
                    </div>
                    {dog.disponibility ? <Link onClick={handleSubmitDog} to="/adoptionForm" className="bg-amber-100 text-amber-950 px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                      Adotar {dog.name} !
                    </Link> : ''}
                    
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  
}

export default Adopt