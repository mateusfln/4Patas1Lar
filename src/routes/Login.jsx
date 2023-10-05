import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
      });

    const navigate = useNavigate()
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica para enviar os dados do formulário para análise.
        console.log('Dados do formulário enviados:', formData);
        navigate('/')
      };

      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
          ...formData,
          [name]: type === 'checkbox' ? checked : value,
        });
      };


  return (
    <div className="relative bg-amber-950 flex flex-col justify-center min-h-screen overflow-hidden">
    <div className="w-full p-6 m-auto bg-amber-100 rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-amber-900 underline">
           Sign in
        </h1>
        <form  onSubmit={handleSubmit} className="mt-6">
            <div className="mb-2">
                <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Email
                </label>
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
            <div className="mb-2">
                <label
                    htmlFor='password'
                    className="block text-sm font-semibold text-gray-800"
                >
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 mt-2 text-amber-700 bg-white border rounded-md focus:border-amber-400 focus:ring-amber-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    required
                />
            </div>
            <a
                href="/"
                className="text-xs text-amber-800 hover:underline"
            >
                Forget Password?
            </a>
            <div className="mt-6">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-amber-950 rounded-md hover:bg-amber-900 focus:outline-none focus:bg-amber-900" type='submit'>
                    Login
                </button>
            </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            Don't have an account?{" "}
            <Link to="/signup" className="font-medium text-amber-800 hover:underline">Signup</Link>
        </p>
    </div>
</div>
  )
}

export default Login