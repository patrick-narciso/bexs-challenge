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
	@media (min-width: 1024px) {
		margin-left: 50px;
		color: #ffffff;
	}
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
	@media (min-width: 1024px) {
		margin-left: 50px;
	}
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

export const SideBar = styled.div`
	height: 100vh;
	min-width: 352px;
	background-color: ${({theme}) => theme.colors.primary.red};
	padding-top: 53px;
	padding-left: 64px;
`;

export const DeskContainer = styled.div`
	display: flex;
`;

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding-top: 53px;
	align-items: center;
`;

export const DeskCardContainer = styled.div`
	margin-left: 50px;
`;

export const NavDisclaimer = styled.span`
	margin-left: 14px;
	font-size: ${({theme}) => theme.fonts.sizes.small};
`;
