import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AdoptionForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        typeOfResidence: 'Casa',
        ownOrRent: 'Próprio',
        familyMembers: '',
        otherPets: false,
        otherPetsDetails: '',
        workSchedule: 'Período Integral',
        experienceWithPets: '',
        petCarePlan: '',
        agreeTerms: false,
      });
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
          ...formData,
          [name]: type === 'checkbox' ? checked : value,
        });
      };

      const navigate = useNavigate()
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica para enviar os dados do formulário para análise.
        console.log('Dados do formulário enviados:', formData);
        navigate('/thanksForAdopt')
      };
    
      return (
        <div className='bg-amber-950'>
        <div className="w-full p-6 m-auto rounded-md shadow-md py-10 lg:max-w-xl">
          <div className="container mx-auto py-8 bg-amber-100 rounded-3xl">
            <h1 className="text-3xl font-semibold mb-4 text-center text-amber-950 pb-6">Formulário de Adoção</h1>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-amber-950">Nome Completo:</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 text-amber-700 bg-white border rounded-md focus:border-amber-400 focus:ring-amber-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-amber-950">E-mail:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 text-amber-700 bg-white border rounded-md focus:border-amber-400 focus:ring-amber-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-amber-950">Telefone:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 text-amber-700 bg-white border rounded-md focus:border-amber-400 focus:ring-amber-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="address" className="block text-amber-950">Endereço:</label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 text-amber-700 bg-white border rounded-md focus:border-amber-400 focus:ring-amber-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label htmlFor="typeOfResidence" className="block text-amber-950">Tipo de Moradia:</label>
                <select
                  id="typeOfResidence"
                  name="typeOfResidence"
                  value={formData.typeOfResidence}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 text-amber-700 bg-white border rounded-md focus:border-amber-400 focus:ring-amber-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  required
                >
                  <option value="Casa">Casa</option>
                  <option value="Apartamento">Apartamento</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="ownOrRent" className="block text-amber-950">Você é proprietário ou aluga?</label>
                <select
                  id="ownOrRent"
                  name="ownOrRent"
                  value={formData.ownOrRent}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 text-amber-700 bg-white border rounded-md focus:border-amber-400 focus:ring-amber-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  required
                >
                  <option value="Próprio">Próprio</option>
                  <option value="Alugado">Alugado</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="familyMembers" className="block text-amber-950">Número de Membros da Família:</label>
                <input
                  type="number"
                  id="familyMembers"
                  name="familyMembers"
                  value={formData.familyMembers}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 text-amber-700 bg-white border rounded-md focus:border-amber-400 focus:ring-amber-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="otherPets" className="block text-amber-950">Você possui outros animais de estimação?</label>
                <input
                  type="checkbox"
                  id="otherPets"
                  name="otherPets"
                  checked={formData.otherPets}
                  onChange={handleChange}
                  required
                />
              </div>
              {formData.otherPets && (
                <div className="mb-4">
                  <label htmlFor="otherPetsDetails" className="block text-amber-950">Detalhes sobre outros animais de estimação:</label>
                  <textarea
                    id="otherPetsDetails"
                    name="otherPetsDetails"
                    value={formData.otherPetsDetails}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 mt-2 text-amber-700 bg-white border rounded-md focus:border-amber-400 focus:ring-amber-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    required
                  ></textarea>
                </div>
              )}
              <div className="mb-4">
                <label htmlFor="workSchedule" className="block text-amber-950">Horário de Trabalho:</label>
                <select
                  id="workSchedule"
                  name="workSchedule"
                  value={formData.workSchedule}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 text-amber-700 bg-white border rounded-md focus:border-amber-400 focus:ring-amber-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  required
                >
                  <option value="Período Integral">Período Integral</option>
                  <option value="Meio Período">Meio Período</option>
                  <option value="Em Casa">Em Casa</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="experienceWithPets" className="block text-amber-950">Experiência com animais de estimação:</label>
                <textarea
                  id="experienceWithPets"
                  name="experienceWithPets"
                  value={formData.experienceWithPets}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 text-amber-700 bg-white border rounded-md focus:border-amber-400 focus:ring-amber-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label htmlFor="petCarePlan" className="block text-amber-950">Plano de Cuidados com o Animal:</label>
                <textarea
                  id="petCarePlan"
                  name="petCarePlan"
                  value={formData.petCarePlan}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 text-amber-700 bg-white border rounded-md focus:border-amber-400 focus:ring-amber-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label htmlFor="agreeTerms" className="block text-amber-950">
                  Concordo com os termos e condições de adoção:
                </label>
                <input
                  type="checkbox"
                  id="agreeTerms"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  required
                  className=''
                />
              </div>
              <div className="text-center">
                <button
                  className="w-full px-4 py-2 my-10 tracking-wide text-white transition-colors duration-200 transform bg-amber-950 rounded-md hover:bg-amber-900 focus:outline-none focus:bg-amber-900"
                  type='submit'
                >
                  Enviar Solicitação de Adoção
                </button>
                
              </div>
            </form>
          </div>
        </div>
        </div>
      );
}

export default AdoptionForm