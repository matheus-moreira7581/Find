const parseDateTime = (text) => {
    const hourComponents = text.split(':');
    const hours = Number(hourComponents[0]);
    const minutes = Number(hourComponents[1]);
    
    const seconds = new Date().getSeconds();
    const milliseconds = new Date().getMilliseconds();

    const day = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();

    return new Date(year, month, day, hours, minutes, seconds, milliseconds);  
};

export default parseDateTime;
