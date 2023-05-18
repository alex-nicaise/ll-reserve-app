import { render, screen, within } from "@testing-library/react";
import BookingForm from "../components/BookingForm";
import ReserveMain from "../components/ReserveMain";

test('Renders Date', () => {
    render(<BookingForm/>);
    const dateElement = screen.getByLabelText("Date");
    expect(dateElement).toBeInTheDocument();
})

test('Validate that initializeTimes returns the correct expected value', () => {
    const matchingTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const {getAllByRole} = render(<ReserveMain/>);
    render(<BookingForm/>);
    const selectElement = screen.getByLabelText('Time');
    const timeOptions = within(selectElement).getAllByRole('option');

    expect(timeOptions).toStrictEqual(matchingTimes);
})

test('Validate that updateTimes returns the same value that is provided in the state', () => {
    expect(updateTimes).toBeCalled;
    // I don't understand tests at all and they do a horrible job of teaching it to you.
})