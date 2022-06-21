
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Form from './form';

describe('Form', () => {

  it('renders the button', () => {
    render(<Form />);
    // check if all components are rendered
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('renders 3 inputs', () => {
    render(<Form />);
    // check if all components are rendered
    allInputs = screen.getAllByRole('input')
    expect(allInputs.length).toBe(3);
  });
});