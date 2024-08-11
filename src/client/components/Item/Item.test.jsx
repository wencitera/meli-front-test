import { render, screen } from '@testing-library/react';
import React from 'react';
import Item from './Item'
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom'

describe('Item', () => {
  const mockHandleClick = jest.fn();
  const defaultProps = {
    id: 'MLA1234',
    picture: 'https://example.com/image.jpg',
    title: 'Item Title',
    amount: '100',
    free_shipping: true,
    location: 'Buenos Aires',
    handleClick: mockHandleClick,
    formatCurrency: jest.fn().mockReturnValue('$ 100'),
  };

  it('renders the component with correct data', () => {
    render(<MemoryRouter><Item {...defaultProps} /></MemoryRouter>);

    const img = screen.getByAltText('Item Title');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://example.com/image.jpg');

    const price = screen.getByText('$ 100');
    expect(price).toBeInTheDocument();
    expect(screen.getByAltText('Envío Gratis')).toBeInTheDocument();

    expect(screen.getByText('Item Title')).toBeInTheDocument();
    expect(screen.getByText('Buenos Aires')).toBeInTheDocument();
  });

});