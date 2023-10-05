import React, { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário enviados:', formData);
  };

  return (
    <div className="bg-amber-950 min-h-screen flex items-center justify-center">
      <div className="bg-amber-100 p-6 rounded-lg shadow-md w-96">
        <h1 className="text-3xl font-semibold mb-4 text-center text-amber-950">Entre em Contato</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-amber-950">Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 mt-2 text-amber-700 bg-white border rounded-md focus:border-amber-400 focus:ring-amber-300 focus:outline-none focus:ring focus:ring-opacity-40"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-amber-950">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 mt-2 text-amber-700 bg-white border rounded-md focus:border-amber-400 focus:ring-amber-300 focus:outline-none focus:ring focus:ring-opacity-40"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-amber-950">Mensagem:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 mt-2 text-amber-700 bg-white border rounded-md focus:border-amber-400 focus:ring-amber-300 focus:outline-none focus:ring focus:ring-opacity-40"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-amber-950 text-white px-4 py-2 rounded-md hover:bg-amber-900 transition duration-300"
            >
              Enviar Mensagem
            </button>
          </div>
          <div></div>
        </form>
      </div>
    </div>
  );
}

export default Contact