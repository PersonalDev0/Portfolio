import React from 'react';
import '../styles/components/button.css';

interface ButtonProps {
    color: string;
    text: string;
}

const Button: React.FC<ButtonProps> = ({ color, text }) => {
    return (
        <button style={{ backgroundColor: color }}>
            {text}
        </button>
    );
}

export default Button;