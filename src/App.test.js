import { render, screen,fireEvent } from '@testing-library/react';
import App from "./App"
import BookingForm from './components/BookingForm';
import BookingPage from './components/BookingPage';
import Main from './components/Main';



test('Renders the Booking Form heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Number of guests");
  expect(headingElement).toBeInTheDocument();
})

test('initializeTimes fetches available times', () => {
  // Mock the fetchAPI function to return a sample array of available times
  const mockFetchAPI = jest.fn(() => ['17:00', '17:30', '18:00']);

  // Render the Main component with the mocked fetchAPI function
  render(<Main />);

  // Assert that the fetchAPI function was called with the current date
  expect(mockFetchAPI).toHaveBeenCalledWith(new Date());
});



