import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders header navigation', () => {
    render(<App />);
    
    // Test for navigation links
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/projects/i)).toBeInTheDocument();
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
    
    // Test for logo
    expect(screen.getByText(/portfolio/i)).toBeInTheDocument();
  });

  test('renders main content', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});