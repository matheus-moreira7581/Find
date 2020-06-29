<<<<<<< HEAD
import React, { useState, useContext, createContext, Children } from 'react';

const CategorySelectionContext = createContext(null);

export const CategoryProvider = ({ children }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    return ( 
        <CategorySelectionContext.Provider value={{ selectedCategory, setSelectedCategory }}>
            {children}
=======
import React, { useState, useContext, createContext } from 'react';

const CategorySelectionContext = createContext(null);

export const CategoryProvider = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    return( 
        <CategorySelectionContext.Provider value={{ selectedCategory, setSelectedCategory }}>
            { children }
>>>>>>> parent of d34f308... delete mobile
        </CategorySelectionContext.Provider>
    );
}

export const useCategory = () => {
    const context = useContext(CategorySelectionContext);
<<<<<<< HEAD
    
=======
>>>>>>> parent of d34f308... delete mobile
    return context;
}
