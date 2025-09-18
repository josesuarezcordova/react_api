import React from 'react';
import Button from './components/Button';
import ApiData from './components/ApiData';

const App = () => {
    const handleClick = () => {
        alert('Button clicked!');
    };
    return (
        <div>
            <h1>Hello, World!</h1>
            <Button label="Click" onClick={handleClick}/>
            <ApiData />
        </div>
    );
};

// Header component
export const Header = () => {
    return (
        <header>
            <h2>This is the header</h2>
        </header>
    );
}

export const Footer = () => {
    return (
        <footer>
            <p>This is the footer</p>
        </footer>
    );
}

export default App;