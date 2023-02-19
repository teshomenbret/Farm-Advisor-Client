import React from 'react';
import {render, fireEvent, screen, cleanup} from '@testing-library/react';
import SensorForm from '../sensorForm.component';


describe("SignupForm", () => {
    it("should render the basic fields", () => {
      render(<SensorForm />);
      expect(screen.getByRole("textbox", { name: /Serial Number/i })).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: /Add new Sensor/i })
      ).toBeInTheDocument();
    });



  });