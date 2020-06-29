import React, { useState, useContext, createContext, Children } from 'react';

const CategorySelectionContext = createContext(1);

export const CategoryProvider = ({ children }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    return ( 
        <CategorySelectionContext.Provider value={{ selectedCategory, setSelectedCategory }}>
            {children}
        </CategorySelectionContext.Provider>
    );
}

export const useCategory = () => {
    const context = useContext(CategorySelectionContext);
    
    return context;
}
