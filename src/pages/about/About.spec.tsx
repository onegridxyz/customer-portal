import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import About from './About';

describe('About', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
    expect(getByText(/OneGrid.xyz/gi)).toBeTruthy();
  });
});
