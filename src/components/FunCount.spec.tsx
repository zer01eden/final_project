import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FunCount from './FunCount';

test('is funCounter change number after click'),
	() => {
		render(<FunCount />);
		const span = screen.getByText(/1/i);
		expect(span).toBeInTheDocument();
	};
