import React, { useState } from 'react'

function Member() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        whyJoin: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica para enviar os dados do formulário para o servidor ou realizar qualquer ação desejada.
        console.log('Dados do formulário:', formData);
      };
    
      return (
        <div className="bg-amber-950 min-h-screen flex items-center justify-center">
          <div className="bg-amber-100 p-6 rounded-lg shadow-md w-96">
            <h1 className="text-3xl font-semibold mb-4 text-center text-amber-950">Formulário de Inscrição</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-amber-950">Nome Completo:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
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
                <label htmlFor="whyJoin" className="block text-amber-950">Por que deseja se juntar a nós?</label>
                <textarea
                  id="whyJoin"
                  name="whyJoin"
                  value={formData.whyJoin}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 text-amber-700 bg-white border rounded-md focus:border-amber-400 focus:ring-amber-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full px-4 py-2 my-10 tracking-wide text-white transition-colors duration-200 transform bg-amber-950 rounded-md hover:bg-amber-900 focus:outline-none focus:bg-amber-900"
                >
                  Enviar Inscrição
                </button>
              </div>
            </form>
          </div>
        </div>
      );
}

export default Member