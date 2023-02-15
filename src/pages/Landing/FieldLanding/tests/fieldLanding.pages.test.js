import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import FieldLanding from '../fieldLanding.pages';

describe('Landing Module', () => {
  test('display UI corecily', () => {

    render(<FieldLanding />);
    const h1Element = screen.getByText(/Add a field/)
    expect(h1Element).toBeInTheDocument()
    const buElement = screen.getByRole("button", {name : /Add my first field/})
    expect(buElement).toBeDefined
    expect(buElement).toBeChecked
  });
});
