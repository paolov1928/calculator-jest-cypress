import React from 'react';
import { render, screen, act } from '@testing-library/react';

import Container from './container';

describe('Container', () => {
  let originalFetch;
  let mockedFetch = jest.fn(
    () => new Promise((resolve, rej) => resolve({ name: 'Testing something!' }))
  );

  beforeEach(() => {
    originalFetch = global.fetch;
    global.fetch = jest.fn(
      () => new Promise((resolve, rej) => resolve({ json: mockedFetch }))
    );
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });

  it('Should have proper description after data fetch', async () => {
    await act(async () => {
      render(<Container />);
    });
    const description = screen.getByTestId('description');
    expect(description.textContent).toBe('Testing something!');
    expect(mockedFetch).toBeCalledTimes(1);
  });
});
