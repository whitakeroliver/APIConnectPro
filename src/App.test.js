// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders APIConnectPro title', () => {
    render(<App />);
    const titleElement = screen.getByText(/APIConnectPro/i);
    expect(titleElement).toBeInTheDocument();
});
