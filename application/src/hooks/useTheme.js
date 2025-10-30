import { useState, useEffect } from 'react';
import { STORAGE_KEYS, THEME } from '../constants';

const COOKIE_EXPIRY_DAYS = 365;

const setCookie = (name, value, days = COOKIE_EXPIRY_DAYS) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
};

const getCookie = (name) => {
    const nameEQ = `${name}=`;
    const cookies = document.cookie.split(';');

    for (let cookie of cookies) {
        cookie = cookie.trim();
        if (cookie.startsWith(nameEQ)) {
            return cookie.substring(nameEQ.length);
        }
    }
    return null;
};

export const useTheme = () => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = getCookie(STORAGE_KEYS.THEME);
        return savedTheme || THEME.LIGHT;
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        setCookie(STORAGE_KEYS.THEME, theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme =>
            prevTheme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT
        );
    };

    return { theme, toggleTheme };
};