import React, { useState } from 'react'
import MakeAPixButton from '../components/Buttons/MakeAPixButton';

function Donate() {
    const [formData, setFormData] = useState({
        selectedItem: '',
        deliveryPreference: 'local', // Alterado para ser o primeiro item
        meetingTime: '', // Removendo o campo de horário
        address: '', // Adicionando o campo de endereço
      });
    
      const [donationItems, setDonationItems] = useState([
        'Ração',
        'Medicamentos para pulgas',
        'Cobertor',
        // Adicione mais itens aqui
      ]);
    
      const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleAddItem = () => {
        const newItem = prompt('Digite o nome do novo item de doação:');
        if (newItem) {
          setDonationItems([...donationItems, newItem]);
        }
      };
    
      const handleDeleteItem = () => {
        if (selectedItemIndex >= 0) {
          const updatedItems = [...donationItems];
          updatedItems.splice(selectedItemIndex, 1);
          setDonationItems(updatedItems);
          setSelectedItemIndex(-1);
        }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica para enviar os dados do formulário e a lista de itens para os operadores ou armazenamento de dados conforme necessário.
        console.log('Dados do formulário enviados:', formData);
        console.log('Itens de doação:', donationItems);
      };
    
      // Gerar uma lista de horários de 07:00 às 22:00 de meia em meia hora
      const timeOptions = [];
      for (let hour = 7; hour <= 22; hour++) {
        for (let minute = 0; minute < 60; minute += 30) {
          const formattedHour = `${hour < 10 ? '0' : ''}${hour}:${minute === 0 ? '00' : '30'}`;
          timeOptions.push(formattedHour);
        }
      }

      const userIsClient = true
    
      return (
        <div className="bg-amber-950 min-h-screen flex">
          <div className='w-full p-6 m-auto rounded-md py-10 lg:max-w-xl'>
          <div className="bg-amber-100 p-6 rounded-lg">
            <h1 className="text-3xl font-semibold mb-4 text-center text-amber-950 pb-6">Página de Doação</h1>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="mb-4">
                <label htmlFor="selectedItem" className="block text-amber-950">Item de Doação:</label>
                <select
                  id="selectedItem"
                  name="selectedItem"
                  value={selectedItemIndex}
                  onChange={(e) => setSelectedItemIndex(parseInt(e.target.value))}
                  className="w-full border rounded-md p-2 bg-amber-200"
                  required
                >
                  <option className='text-amber-950' cvalue={-1} disabled>Selecione um item</option>
                  {donationItems.map((item, index) => (
                    <option key={index} value={index}>{item}</option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-amber-950">Preferência de Entrega:</label>
                <div className="flex items-center">
                  <label className="mr-4 text-amber-950">
                    <input
                      type="radio"
                      name="deliveryPreference"
                      value="local"
                      checked={formData.deliveryPreference === 'local'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Levar até o Local
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="deliveryPreference"
                      value="home"
                      checked={formData.deliveryPreference === 'home'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Buscar na Residência
                  </label>
                </div>
              </div>
              {formData.deliveryPreference === 'home' && (
                <div className="mb-4">
                  <label htmlFor="address" className="block text-amber-950">Endereço de Coleta:</label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 mt-2 text-amber-700 bg-white border rounded-md focus:border-amber-400 focus:ring-amber-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    required
                  ></textarea>
                </div>
              )}
              <div className="mb-4">
                <label htmlFor="meetingTime" className="block text-amber-950">Horário de Encontro:</label>
                <select
                  id="meetingTime"
                  name="meetingTime"
                  value={formData.meetingTime}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2 bg-amber-200"
                  required
                >
                  <option className='text-amber-950' value="" disabled>Selecione um horário</option>
                  {timeOptions.map((time, index) => (
                    <option key={index} value={time}>{time}</option>
                  ))}
                </select>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-amber-950 text-white px-4 py-2 rounded-md hover:bg-amber-900 transition duration-300 mt-10"
                >
                  Enviar Doação
                </button>
              </div>
              <div className='text-center mt-10 text-amber-950 '>
                <b>Ou</b>
              </div>
              <div className='text-center mt-10 text-amber-950 '>
              <MakeAPixButton/>
              </div>
            </form>
            <div className="mt-4">
              {userIsClient ? '' :
              
              <>
              <button
                onClick={handleAddItem}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-300 transition duration-300"
              >
                Adicionar Novo Item
              </button>
              <button
                onClick={handleDeleteItem}
                className="bg-red-500 text-white px-4 py-2 ml-2 rounded-md hover:bg-red-300 transition duration-300"
              >
                Excluir Item
              </button> 
              </>
              }
              
            </div>
          </div>
          </div>
        </div>
      );
      
}

export default Donate