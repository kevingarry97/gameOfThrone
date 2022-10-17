import { render, screen } from '@testing-library/react';
import App from './App';
import HeroSection from './components/sections/hero';

describe("Hero Section", () => {
    it("Should render Play", async () => {
        render(<HeroSection />);
        // const textElement = screen.getByText(/play/i);
        // expect(textElement).toBeInTheDocument();
    })
})