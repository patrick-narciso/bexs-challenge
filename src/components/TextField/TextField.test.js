import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import {render, screen, fireEvent} from 'commons/test-utils';

import TextField from '.';
import {Label, Input} from './styles';

const createTestProps = (props) => ({
	label: 'Label test',
	type: 'text',
	id: 'id test',
	onChange: jest.fn(),
	onBlur: jest.fn(),
	onFocus: jest.fn(),
	value: '',
	...props,
});

jest.mock('react', () => ({
	...jest.requireActual('react'),
	useState: jest.fn(),
}));

describe('Components', () => {
	describe('<TextField />', () => {
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
			const {rerender} = render(<TextField {...props} />);
			const textFieldInput = screen.getByTestId('textfield');
			fireEvent.change(textFieldInput, {target: {value: 'user input'}});
			rerender(<TextField {...props} value="user input" />);
			expect(setState).toHaveBeenCalled();
			expect(props.onChange).toHaveBeenCalled();
			expect(textFieldInput.value).toBe('user input');
		});

		test('Should handle blur event correctly', () => {
			render(<TextField {...props} />);
			const textFieldInput = screen.getByTestId('textfield');
			fireEvent.focusOut(textFieldInput);
			expect(setState).toHaveBeenCalledWith(false);
		});

		test('Should render the error message', () => {
			render(<TextField error="error message" {...props} />);
			expect(screen.getByText('error message')).not.toBeNull();
		});

		test('Should handle focus event correctly', () => {
			render(<TextField {...props} />);
			const textFieldInput = screen.getByTestId('textfield');
			fireEvent.focus(textFieldInput);
			expect(setState).toHaveBeenCalledWith(true);
		});

		test('Should render label positioned correctly', () => {
			const {rerender} = render(<Label $active>Label test</Label>);
			expect(screen.getByText('Label test')).toHaveStyle({
				transform: 'translateY(-31px)',
			});
			rerender(<Label $error>Label test</Label>);
			expect(screen.getByText('Label test')).toHaveStyle({
				color: '#C9C9C9',
			});
		});

		test('Should render input border color correctly', () => {
			const {rerender} = render(<Input $active />);
			expect(screen.getByRole('textbox')).toHaveStyle({
				borderBottomColor: '#C9C9C9',
			});
			rerender(<Input $active $error />);
			expect(screen.getByRole('textbox')).toHaveStyle({
				borderBottomColor: '#EB5757',
			});
		});
	});
});
