import React, { useState, useContext, createContext } from 'react';

const CategorySelectionContext = createContext(null);

export const CategoryProvider = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    return( 
        <CategorySelectionContext.Provider value={{ selectedCategory, setSelectedCategory }}>
            { children }
        </CategorySelectionContext.Provider>
    );
}

export const useCategory = () => {
    const context = useContext(CategorySelectionContext);
    return context;
}
