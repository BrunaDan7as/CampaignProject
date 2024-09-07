// src/components/Header.tsx

import React from 'react';

const HeaderComponent: React.FC = () => {
    return (
        <header className="bg-gradient-to-r from-indigo-500 to-purple-400 text-white p-4 flex items-center justify-between shadow-md">
            <h1 className="text-3xl  tracking-wide">Campanhas</h1>

            <button
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105"
            // Adicione a lógica para navegação ou ação do botão aqui
            >
                Criar Campanha
            </button>
        </header>
    );
};

export default HeaderComponent;
