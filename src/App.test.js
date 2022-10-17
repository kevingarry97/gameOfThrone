import { render, screen } from '@testing-library/react';
import App from './App';

test('render play', () => {
    render(<App />);
    const linkscreen = screen.getByText(/Enjoy.Choose. Play/i);
    expect(linkscreen).toBeInTheDocument();
})
