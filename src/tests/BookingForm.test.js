import { fireEvent, getByLabelText, render, screen, within } from "@testing-library/react";
import BookingForm from "../components/BookingForm";
import ReserveMain from "../components/ReserveMain";

test('Renders Date', () => {
    render(<BookingForm/>);
    const dateElement = screen.getByLabelText("Date");
    expect(dateElement).toBeInTheDocument();
})

test('Validate that updateTimes returns a different value every time', () => {
    render(<ReserveMain/>);
    fireEvent.change(screen.getByLabelText('Date'), {target: {value: "2023-06-07"}});
    const firstTimes = within(screen.getByLabelText('Time')).getAllByRole('option');

    fireEvent.change(screen.getByLabelText('Date'), {target: {value: "2023-07-06"}});
    const secondTimes = within(screen.getByLabelText('Time')).getAllByRole('option');

    expect(secondTimes).not.toEqual(firstTimes);
})