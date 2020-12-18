import styled from 'styled-components';

import {Stepper} from 'components';

import CheckoutInfo from './components/CheckoutInfo';

export const Header = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 40px;
	background-color: ${({theme}) => theme.colors.primary.red};
	color: #ffffff;
	min-height: 239px;
	padding-left: 20px;
`;

export const Navbar = styled.nav`
	display: flex;
	justify-content: flex-start;
	position: relative;
`;

export const CustomStepper = styled(Stepper)`
	float: none;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export const Payment = styled(CheckoutInfo)`
	margin: 0 auto;
	margin-top: 30px;
	margin-bottom: 16px;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
`;

export const CreditCard = styled.div`
	position: absolute;
	top: -90px;
	left: 35px;
	right: 40px;
`;
