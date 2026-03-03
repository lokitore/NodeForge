// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NodeForge title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NodeForge/i);
    expect(titleElement).toBeInTheDocument();
});
