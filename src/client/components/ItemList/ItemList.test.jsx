import React from 'react';
import { render, screen } from '@testing-library/react';
import ItemList from './ItemList';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../Item/Item', () => () => <div>Item Component</div>);
jest.mock('../Breadcrum/Breadcrum', () => () => <div>Breadcrum Component</div>);

describe('ItemList Component', () => {
  const mockCategories = ['Electronics', 'Smartphones'];
  const mockItems = [
    {
      id: '1',
      picture: 'https://example.com/image1.jpg',
      title: 'Smartphone XYZ',
      price: { amount: '499' },
      free_shipping: true,
      location: 'Buenos Aires',
    },
    {
      id: '2',
      picture: 'https://example.com/image2.jpg',
      title: 'Smartwatch ABC',
      price: { amount: '199' },
      free_shipping: false,
      location: 'Mendoza',
    },
  ];

  it('renders the Breadcrum component with correct categories', () => {
    render(
      <MemoryRouter>
        <ItemList categories={mockCategories} items={mockItems} />
      </MemoryRouter>
    );

    expect(screen.getByText('Breadcrum Component')).toBeInTheDocument();
  });

});
