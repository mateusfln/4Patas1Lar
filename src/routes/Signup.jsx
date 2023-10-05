import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword:''
      });

    const navigate = useNavigate()
    
      const handleSubmit = (e) => {
        console.log(password.value)
        console.log(confirmPassword.value)
        console.log(e.target.value)


        e.preventDefault();
        // Aqui você pode adicionar a lógica para enviar os dados do formulário para análise.
        console.log('Dados do formulário enviados:', formData);
        navigate('/login')
      };

      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
          ...formData,
          [name]: type === 'checkbox' ? checked : value,
        });
      };

      const password = document.getElementById("password")
      const confirmPassword = document.getElementById("confirmPassword");

        const validatePassword = (password, confirmPassword) => {
            
        if(password.value !== confirmPassword.value) {
            password.target.setCustomValidity("Passwords Don't Match");
        } else {
            confirmPassword.setCustomValidity('');
        }
        password.onchange = validatePassword;
        confirmPassword.onkeyup = validatePassword;
        }

        



  return (
    <div className="relative bg-amber-950 flex flex-col justify-center min-h-screen overflow-hidden">
    <div className="w-full p-6 m-auto bg-amber-100 rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-amber-950 underline">
           Sign up
        </h1>
        <form onSubmit={handleSubmit} className="mt-6">
        <div className="mb-2">
                <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Name
                </label>
                <input
                     type="name"
                     id="name"
                     name="name"
                     value={formData.name}
                     onChange={handleChange}
                     className="block w-full px-4 py-2 mt-2 text-amber-700 bg-white border rounded-md focus:border-amber-400 focus:ring-amber-300 focus:outline-none focus:ring focus:ring-opacity-40"
                     required
                />
            </div>
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
                    htmlFor="password"
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
            <div className="mb-2">
                <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Confirm password
                </label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 mt-2 text-amber-700 bg-white border rounded-md focus:border-amber-400 focus:ring-amber-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    required 
                />
            </div>
            <div className="mt-6">
                <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-amber-950 rounded-md hover:bg-amber-900 focus:outline-none focus:bg-amber-900">
                    Signup
                </button>
            </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            Do you have an account?{" "}

                <Link to="/login" className="font-medium text-amber-800 hover:underline">Login</Link>
        </p>
    </div>
</div>
  )
}

export default Signup