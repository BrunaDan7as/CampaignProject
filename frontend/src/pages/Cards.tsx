// src/pages/index.tsx

import React from 'react';
import CardComponent from '../components/Cards/CardComponent'; // Correto se Login.tsx estiver em src/components
import HeaderComponent from '../components/Header/HeaderComponent';


const Cards: React.FC = () => {
    return (
        <div>
            <HeaderComponent />
            <div className="flex flex-col items-center justify-center mt-10">
                <CardComponent />
            </div>
        </div>
    );
};

export default Cards;
