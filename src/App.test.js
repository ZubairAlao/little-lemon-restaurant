import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/BookingForm';
import BookingPage from './components/BookingPage';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})

test('initializeTimes should return the correct value', () => {
  const date = '2023-10-16';
  const expectedAvailableTimes = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ];

  const result = BookingPage.prototype.initializeTimes(date);
  expect(result).toEqual(expectedAvailableTimes);
});

test('updateTimes should return the same value provided in the state', () => {
  const selectedDate = '2023-10-16';
  const expectedAvailableTimes = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ];

  const result = BookingPage.prototype.updateTimes(selectedDate, expectedAvailableTimes);
  expect(result).toEqual(expectedAvailableTimes);
});




