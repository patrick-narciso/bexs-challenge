import {render, screen} from 'commons/test-utils';

import Stepper, {Step} from '.';

let size = {width: 1500};

jest.mock('../../hooks/useWindowSize', () => ({
	__esModule: true,
	default: () => size,
}));

describe('Components', () => {
	describe('<Stepper />', () => {
		afterEach(() => {
			jest.clearAllMocks();
		});

		test('Should render desktop stepper', () => {
			const {rerender} = render(
				<Stepper>
					<Step title="Carrinho" />
				</Stepper>
			);
			expect(screen.getByTestId('number-icon')).toBeInTheDocument();
			expect(screen.getByText(/Carrinho/i)).toBeInTheDocument();
			rerender(
				<Stepper>
					<Step title="pagamento" finished />
					<Step title="confirmação" />
				</Stepper>
			);
			expect(screen.getByText(/pagamento/i)).toBeInTheDocument();
			expect(screen.getByTestId('check-icon')).toBeInTheDocument();
			expect(screen.getByTestId('chevron-icon')).toBeInTheDocument();
		});

		test('Should render mobile stepper', () => {
			size.width = 700;
			const {rerender} = render(
				<Stepper>
					<Step title="Carrinho" active />
				</Stepper>
			);
			expect(screen.getByText(/Etapa 1/i)).toBeInTheDocument();
			expect(screen.getByText(/de 1/i)).toBeInTheDocument();
			rerender(
				<Stepper>
					<Step title="pagamento" finished />
					<Step title="confirmação" active />
					<Step title="checkout" />
				</Stepper>
			);
			expect(screen.getByText(/Etapa 2/i)).toBeInTheDocument();
			expect(screen.getByText(/de 3/i)).toBeInTheDocument();
		});
	});
});
