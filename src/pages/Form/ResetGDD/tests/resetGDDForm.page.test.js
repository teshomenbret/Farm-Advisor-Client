import React from 'react';
import {render,screen} from '@testing-library/react';
import ResetGDDForm from '../resetGDDForm.page'


describe("ResetGDDForm", () => {
    it("should render the basic fields", () => {
      render(<ResetGDDForm />);
      expect(
        screen.getByRole("button", { name: /Reset GDD/i })
      ).toBeInTheDocument();
    });
  });