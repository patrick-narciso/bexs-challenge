import {useState} from 'react';
import Cards from 'react-credit-cards';
import {useFormik} from 'formik';

import useWindowSize from 'hooks/useWindowSize';
import {Stepper, Step} from 'components';
import {PaymentService} from 'services/Payment';

import PaymentForm from './components/PaymentForm';
import {formikConfig, normalizeTransactionPayload} from './formik-config';
import {
	Header,
	Navbar,
	CustomStepper,
	Payment,
	Container,
	CreditCard,
	SideBar,
	DeskContainer,
	FormContainer,
	DeskCardContainer,
	NavDisclaimer,
} from './styles';

const Checkout = () => {
	const [inputFocused, setInputFocused] = useState('');
	const [loading, setLoading] = useState(false);
	const formik = useFormik(formikConfig);
	const screen = useWindowSize();
	const isMobile = screen.width <= 1024;

	function handleFocus(e) {
		setInputFocused(e.target.name);
	}

	async function handleSubmit() {
		try {
			setLoading(true);
			const payload = normalizeTransactionPayload({...formik.values});
			await PaymentService.create(payload);
			formik.resetForm();
			window.alert('Obrigado pela compra!');
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	}

	if (isMobile) {
		return (
			<>
				<Header>
					<Navbar>
						<i className="fa fa-chevron-left"></i>
						<CustomStepper>
							<Step finished />
							<Step active />
							<Step />
						</CustomStepper>
					</Navbar>
					<Payment />
				</Header>
				<Container>
					<CreditCard>
						<Cards
							cvc={formik.values.cvc}
							expiry={formik.values.expireDate || '00/00'}
							focused={inputFocused}
							name={formik.values.cardHolder || 'Nome do titular'}
							number={formik.values.cardNumber}
						/>
					</CreditCard>
					<PaymentForm
						formik={formik}
						loading={loading}
						handleSubmit={handleSubmit}
						handleFocus={handleFocus}
					/>
				</Container>
			</>
		);
	}

	return (
		<DeskContainer>
			<SideBar>
				<Navbar>
					<i className="fa fa-chevron-left"></i>
					<NavDisclaimer>Alterar forma de pagamento</NavDisclaimer>
				</Navbar>
				<Payment />
				<DeskCardContainer>
					<Cards
						cvc={formik.values.cvc}
						expiry={formik.values.expireDate || '00/00'}
						focused={inputFocused}
						name={formik.values.cardHolder || 'Nome do titular'}
						number={formik.values.cardNumber}
					/>
				</DeskCardContainer>
			</SideBar>
			<FormContainer>
				<Stepper>
					<Step title="Carrinho" finished />
					<Step title="Pagamento" active />
					<Step title="Confirmação" />
				</Stepper>
				<PaymentForm
					formik={formik}
					loading={loading}
					handleSubmit={handleSubmit}
					handleFocus={handleFocus}
				/>
			</FormContainer>
		</DeskContainer>
	);
};

export default Checkout;
