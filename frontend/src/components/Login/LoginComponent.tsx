// src/pages/Login.tsx

import React from 'react';

import { motion } from 'framer-motion';

const Login: React.FC = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center bg-gray-100 overflow-hidden">
            {/* Background com imagem e gradiente */}
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/path/to/your/background.jpg)' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 via-indigo-500 to-indigo-300 opacity-70"></div>
            </div>
            <motion.div
                className="relative bg-white p-10 rounded-lg shadow-xl w-full max-w-md z-10"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <div className="mb-6 flex justify-center">
                    <img
                        src="https://assets.multiplan.com.br/Multiplan/filer_public/c5/ec/c5ecbe7f-d0eb-4140-8445-abd1f8c3a18a/cover-hstern.png" // Substitua pelo link da sua imagem
                        alt="Login"
                        className="max-h-32 object-contain"
                    />
                </div>
                <form className="space-y-3">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Seu email"
                            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                            Senha
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Sua senha"
                            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Entrar
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <a href="#" className="text-indigo-600 hover:underline">
                        Esqueceu a senha?
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;