// src/pages/index.tsx

import React from 'react';
import LoginComponent from '../components/Login/LoginComponent'; // Correto se Login.tsx estiver em src/components


const Login: React.FC = () => {
    return (
        <div>
            <LoginComponent />
        </div>
    );
};

export default Login;
