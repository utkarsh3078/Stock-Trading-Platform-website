import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/jest-globals";
import HeroSection from "../landing_page/home/HeroSection";

//Test Suite
describe("Hero Component", () => {
  test("render zero image", () => {
    render(<HeroSection />);
    const heroImage = screen.getByAltText("HomeHero");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "/assets/homeHero.png");
  });
});

//write npm test in terminal to start testing
//getByRole
//toHavelass
