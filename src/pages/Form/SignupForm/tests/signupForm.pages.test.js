import React from 'react';
import {render, fireEvent, screen, cleanup} from '@testing-library/react';
import SignupForm from "../signupForm.pages";


describe("SignupForm", () => {
    it("should render the basic fields", () => {
      render(<SignupForm />);
      expect(screen.getByRole("textbox", { name: /phone/i })).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: /continue/i })
      ).toBeInTheDocument();
    });

    it("should validate form fields", async () => {
        const phone = +25194320
        render(<SignupForm/>);

        const phoneInput = screen.getByRole("textbox", { name: /phone/i });
        
        fireEvent.input(phoneInput, {
          target: {
            value:phone
          }
        });

        const submitButton = screen.getByRole("button", { name: /continue/i })
        fireEvent.submit(submitButton);
        expect(screen.getByText('phone number must not be less be 10 digit')).toBeInTheDocument();
      });


  });