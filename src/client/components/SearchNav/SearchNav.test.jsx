import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SearchNav from './SearchNav';
import { useNavigate } from 'react-router-dom';
import '@testing-library/jest-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('SearchNav Component', () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    useNavigate.mockReturnValue(mockNavigate);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the component with correct elements', () => {
    render(
      <MemoryRouter>
        <SearchNav />
      </MemoryRouter>
    );

    expect(screen.getByAltText('Logo de MercadoLibre')).toBeInTheDocument();

    expect(screen.getByPlaceholderText('Nunca dejes de buscar')).toBeInTheDocument();

    expect(screen.getByAltText('SearchIcon')).toBeInTheDocument();
  });

  it('updates the input value when changed', () => {
    render(
      <MemoryRouter>
        <SearchNav />
      </MemoryRouter>
    );

    const input = screen.getByPlaceholderText('Nunca dejes de buscar');
    fireEvent.change(input, { target: { value: 'laptop' } });

    expect(input.value).toBe('laptop');
  });

  it('navigates to the home page when the logo is clicked', () => {
    render(
      <MemoryRouter>
        <SearchNav />
      </MemoryRouter>
    );

    const logo = screen.getByAltText('Logo de MercadoLibre');
    fireEvent.click(logo);

    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});
