import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';

test('renders the Hello, React! heading', () => {
    render(<App />);
    const headingElement = screen.getByText(/Hello, React!/i); // Match the heading text
    expect(headingElement).toBeInTheDocument(); // Assert that it exists in the DOM
});