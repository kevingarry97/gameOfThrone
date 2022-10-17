import { render, screen } from '@testing-library/react';
import App from './App';
import HeroSection from './components/sections/hero';
import ProductList from './components/sections/product';


describe("Parent", () => {
    it("Should render Hero Section", () => {
        render(<HeroSection />);
        // const textElement = screen.getByText(/play/i);
        // expect(textElement).toBeInTheDocument();
    })

    it("Should render Character Section", () => {
        render(<ProductList />);
    })
})