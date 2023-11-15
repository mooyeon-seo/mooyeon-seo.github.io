import React from 'react';
    
export default function Contact() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            
        </form>
    );
}
