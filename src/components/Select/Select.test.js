import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import {render, screen, fireEvent} from 'commons/test-utils';

import Select from '.';

const createTestProps = (props) => ({
	label: 'Label test',
	id: 'id test',
	onChange: jest.fn(),
	onBlur: jest.fn(),
	onFocus: jest.fn(),
	options: [{text: 'car', value: 'car'}],
	...props,
});

jest.mock('react', () => ({
	...jest.requireActual('react'),
	useState: jest.fn(),
}));

describe('Components', () => {
	describe('<Select />', () => {
		let props;
		let setState;
		beforeEach(() => {
			props = createTestProps({});
			setState = jest.fn();
			const useStateMock = (initState) => [initState, setState];

			jest.spyOn(React, 'useState').mockImplementation(useStateMock);
		});

		afterEach(() => {
			jest.clearAllMocks();
		});

		test('Should render the label floating', () => {
			render(<Select {...props} />);
			const selectFieldInput = screen.getByTestId('select');
			expect(screen.getByText('car')).toBeInTheDocument();
			fireEvent.change(selectFieldInput, {target: {value: 'car'}});
			expect(setState).toHaveBeenCalled();
			expect(props.onChange).toHaveBeenCalled();
			expect(selectFieldInput.value).toBe('car');
		});

		test('Should handle blur event correctly', () => {
			render(<Select {...props} />);
			const selectFieldInput = screen.getByTestId('select');
			fireEvent.focusOut(selectFieldInput);
			expect(setState).toHaveBeenCalledWith(false);
		});

		test('Should render the error message', () => {
			render(<Select error="error message" {...props} />);
			expect(screen.getByText('error message')).not.toBeNull();
		});

		test('Should handle focus event correctly', () => {
			render(<Select {...props} />);
			const selectFieldInput = screen.getByTestId('select');
			fireEvent.focus(selectFieldInput);
			expect(setState).toHaveBeenCalledWith(true);
		});
	});
});
