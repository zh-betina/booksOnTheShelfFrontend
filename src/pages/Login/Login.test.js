import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';

import Login from "./Login";

describe('LoginInput', ()=>{
    it('renders input for login', ()=>{
        render(<MemoryRouter><Login/></MemoryRouter>);

        const input = screen.getByLabelText('Your user ID');

        expect(input).toBeInTheDocument();
    });
});