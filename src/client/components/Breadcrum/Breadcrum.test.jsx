import React from 'react';
import { render, screen } from '@testing-library/react';
import Breadcrum from './Breadcrum';
import { formatBreadcrumContent } from '../../utils/breadcrum.formatter.utility';
import '@testing-library/jest-dom';

jest.mock('../../utils/breadcrum.formatter.utility', () => ({
  formatBreadcrumContent: jest.fn(),
}));

describe('Breadcrum Component', () => {
  const mockBreadcrum = ['Home', 'Products', 'Electronics'];
  const formattedContent = <nav>Home &gt; Products &gt; Electronics</nav>;

  beforeEach(() => {
    formatBreadcrumContent.mockReturnValue(formattedContent);
  });

  it('renders the component with correct data', () => {
    render(<Breadcrum breadcrum={mockBreadcrum} />);

    expect(formatBreadcrumContent).toHaveBeenCalledWith(mockBreadcrum);

    expect(screen.getByText('Home > Products > Electronics')).toBeInTheDocument();
  });
});