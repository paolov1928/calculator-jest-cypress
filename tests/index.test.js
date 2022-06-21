import Home from '../pages/index';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
describe('Home', () => {
  it('renders the header', () => {
    render(<Home />);
    // check if all components are rendered
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
});
