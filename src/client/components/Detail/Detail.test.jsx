import React from 'react';
import { render, screen } from '@testing-library/react';
import Detail from './Detail';
import { formatCurrency } from '../../utils/currency.formatter.utility';
import '@testing-library/jest-dom';

jest.mock('../../utils/currency.formatter.utility', () => ({
  formatCurrency: jest.fn(),
}));

describe('Detail Component', () => {
  const mockProductDetail = {
    category: ['Electronics', 'Smartphones'],
    item: {
      picture: 'https://example.com/image.jpg',
      title: 'Smartphone XYZ',
      condition: 'new',
      sold_quantity: 150,
      price: {
        amount: '499',
      },
      description: 'A high-quality smartphone with excellent features.',
    },
  };

  const formattedPrice = '$ 499';

  beforeEach(() => {
    formatCurrency.mockReturnValue(formattedPrice);
  });

  it('renders the component with correct data', () => {
    render(<Detail productDetail={mockProductDetail} />);

    const img = screen.getByAltText('Imagen de Smartphone XYZ');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://example.com/image.jpg');

    expect(screen.getByText('Nuevo - 150 vendidos')).toBeInTheDocument();

    expect(screen.getByText('Smartphone XYZ')).toBeInTheDocument();

    expect(screen.getByText(formattedPrice)).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /Comprar Smartphone XYZ/i })).toBeInTheDocument();

    expect(screen.getByText('A high-quality smartphone with excellent features.')).toBeInTheDocument();
  });

  it('renders the breadcrumb correctly', () => {
    render(<Detail productDetail={mockProductDetail} />);

    expect(screen.getByText('Electronics > Smartphones')).toBeInTheDocument();
  });
});
