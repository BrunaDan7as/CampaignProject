// src/routes/Routes.tsx

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login'; // Ajuste o caminho conforme a estrutura do seu projeto
import Cards from '../pages/Cards';


const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Cards" element={<Cards />} />
            {/* Adicione outras rotas aqui */}
        </Routes>
    );
};

export default AppRoutes;
