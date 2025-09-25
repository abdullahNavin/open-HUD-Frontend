import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../Firebase/firebase.config';
import { onAuthStateChanged } from 'firebase/auth';

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState('')
    const [open, setOpen] = useState(false);
    const [settingOpen, setSettingOpen] = useState(false);
    const [bookMarkOpen, setBookMarkOpen] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })

        return () => {
            unsubscribe()
        }

    }, [auth])

    const info = {user, open, setOpen, settingOpen, setSettingOpen, bookMarkOpen, setBookMarkOpen};

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;