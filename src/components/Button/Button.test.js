import '@testing-library/jest-dom/extend-expect';

import theme from 'commons/styled-components/theme';
import {render, screen, fireEvent} from 'commons/test-utils';

import Button from '.';

const createTestProps = (props) => ({
	children: 'Continuar',
	onClick: jest.fn(),
	disabled: false,
	variant: 'primary',
	...props,
});

describe('Components', () => {
	describe('<Button />', () => {
		let props;
		beforeEach(() => {
			props = createTestProps({});
		});

		test('Should render the button correctly', () => {
			render(<Button {...props} />);
			const button = screen.getByRole('button', {name: 'Continuar'});
			expect(button).toHaveStyle({
				backgroundColor: theme.colors.primary.red,
			});
			expect(button).toBeInTheDocument();
		});

		test('Should render button loading', () => {
			render(<Button {...props} loading />);
			expect(screen.getByTestId('loader')).toBeInTheDocument();
		});

		test('Should render button disabled', () => {
			render(<Button {...props} disabled />);
			const button = screen.getByRole('button', {name: 'Continuar'});
			expect(button).toHaveStyle({
				backgroundColor: theme.colors.primary.gray,
			});
		});

		test('Should handle onClick event correctly', () => {
			render(<Button {...props} />);
			const button = screen.getByRole('button', {name: 'Continuar'});
			fireEvent.click(button);
			expect(props.onClick).toHaveBeenCalledTimes(1);
		});
	});
});
