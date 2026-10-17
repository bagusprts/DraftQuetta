// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DraftQuetta title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DraftQuetta/i);
    expect(titleElement).toBeInTheDocument();
});
