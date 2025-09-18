import React from 'react';
import ReactDOM from 'react-dom/client';
import App, {Header, Footer} from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Header />
        <App />
        <Footer />
    </React.StrictMode>
    // Using React.StrictMode for highlighting potential problems in the app
);