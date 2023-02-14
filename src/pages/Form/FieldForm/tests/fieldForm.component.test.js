import React from 'react';
import {render, fireEvent, screen, cleanup} from '@testing-library/react';
import FieldForm from '../fieldForm.component';


describe("FieldForm", () => {
    it("should render the basic fields", () => {
      render(<FieldForm />);
      expect(screen.getByRole("textbox", { name: /name/i })).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: /Create New Field/i })
      ).toBeInTheDocument();
    });
  });