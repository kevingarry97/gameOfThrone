import { render, screen } from '@testing-library/react';
import App from './App';
import HeroSection from './components/sections/hero';
import ProductList from './components/sections/product';


describe("Parent", () => {
    it("Should render Hero Section", () => {
        render(<HeroSection />);
    })

    it("Should render Character Section", () => {
        render(<ProductList />);
    })
})