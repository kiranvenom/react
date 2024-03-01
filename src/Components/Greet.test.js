import { render, screen } from '@testing-library/dom';
import Greet from './Greet';
test('Greet File', () => {
	render(<Greet />);
	const greetElem = screen.getByText(/Greet/i);
	expect(greetElem).toBeInTheDocument();
});
