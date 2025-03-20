import React, { createContext, useContext, useState, ReactNode } from 'react';
import { GlobalStyles } from './theme';

// Theme Context 생성
const ThemeContext = createContext(GlobalStyles);

// Theme Context Hook
export const useTheme = () => {
    const theme = useContext(ThemeContext);
    if (!theme) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return theme;
};

// Theme Provider 생성
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeContext.Provider value={GlobalStyles}>
            {children}
        </ThemeContext.Provider>
    );
};