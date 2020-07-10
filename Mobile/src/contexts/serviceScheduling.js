import React, { useContext, useState, createContext } from 'react';

const ServiceSchedulingContext = createContext(null);

export const ServiceSchedulingProvider = ({ children }) => {
    const [scheduledHour, setScheduledHour] = useState(null);

    const saveScheduledHour = (hour) => setScheduledHour(hour);

    return (
        <ServiceSchedulingContext.Provider value={{ scheduledHour, saveScheduledHour }}>
            {children}
        </ServiceSchedulingContext.Provider>
    );
}

export const useScheduledHour = () => {
    const context = useContext(ServiceSchedulingContext);
    
    return context;
}