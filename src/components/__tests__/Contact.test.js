import { render, screen } from "@testing-library/react"
import { Contact } from "../Contact"
import "@testing-library/jest-dom";

test("contact page should be rendered on DOM",()=>{
    render(<Contact/>);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
})

test("2 inputs should be present",()=>{
    render(<Contact/>);

    const inputs = screen.getAllByRole("textbox");

    expect(inputs.length).toBe(2);
})