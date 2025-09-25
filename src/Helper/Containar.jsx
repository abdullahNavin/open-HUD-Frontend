import React from 'react';

const Containar = ({children, className}) => {
    return (
        <div className={`sm:w-[90%] w-full mx-auto ${className}`}>
            {children}
        </div>
    );
};

export default Containar;