import {useState} from 'react';
import Cards from 'react-credit-cards';
import {useFormik} from 'formik';

import useWindowSize from 'hooks/useWindowSize';
import {Step} from 'components';

import PaymentForm from './components/PaymentForm';
import {formikConfig} from './formik-config';
import {Header, Navbar, CustomStepper, Payment, Container, CreditCard} from './styles';

const Checkout = () => {
	const [inputFocused, setInputFocused] = useState('');
	const formik = useFormik(formikConfig);
	const screen = useWindowSize();
	const isMobile = screen.width <= 1024;

	function handleFocus(e) {
		setInputFocused(e.target.name);
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
					<PaymentForm formik={formik} handleFocus={handleFocus} />
				</Container>
			</>
		);
	}

	return <div>Hello World!</div>;
};

export default Checkout;
