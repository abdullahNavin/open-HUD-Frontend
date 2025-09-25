import React, { useContext } from 'react';
import { AuthContext } from '../ContextApi/AuthContext';

const useAuthContext = () => {
    const info = useContext(AuthContext)
    return info;
};

export default useAuthContext;