import { createContext, useContext, ReactNode } from 'react';

interface MyContextProps {
    // Define your context state and functions here
    // For example:
    count: number;
    increment: () => void;
}

const MyContext = createContext<MyContextProps | undefined>(undefined);

export const MyContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // Your initial context state and functions
    const count = 0;
    const increment = () => {
        // Implement your logic to update the count
    };

    return <MyContext.Provider value={ { count, increment } }> { children } < /MyContext.Provider>;
};

export const useMyContext = () => {
    const context = useContext(MyContext);
    if (!context) {
        throw new Error('useMyContext must be used within a MyContextProvider');
    }
    return context;
};
