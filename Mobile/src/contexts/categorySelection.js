import React, { useState, useContext, createContext, useEffect } from 'react';

const CategorySelectionContext = createContext({});

export const CategoryProvider = ({ children }) => {
    const [selectedCategoryCardInfo, setSelectedCategoryCardInfo] = useState({});

    return ( 
        <CategorySelectionContext.Provider value={{ selectedCategoryCardInfo, setSelectedCategoryCardInfo }}>
            {children}
        </CategorySelectionContext.Provider>
    );
}

export const useCategory = () => {
    const context = useContext(CategorySelectionContext);
    
    return context;
}
