import styled from 'styled-components';

import CreditCard from 'assets/credit-card-ico.svg';

const Container = styled.div`
	display: flex;
	font-family: ${({theme}) => theme.fonts.family};
	font-weight: 700;
	font-size: ${({theme}) => theme.fonts.sizes.medium};
	line-height: 20px;
	color: #ffffff;
	max-width: 220px;
	@media (min-width: 1024px) {
		font-size: ${({theme}) => theme.fonts.sizes.large};
		max-width: 272px;
		img {
			width: 50px;
			height: 50px;
		}
	}
`;

const Icon = styled.img`
	width: 40px;
	height: 40px;
	margin-right: 15px;
	@media (min-width: 1024px) {
		width: 50px;
		height: 50px;
	}
`;

const CheckoutInfo = ({className}) => {
	return (
		<Container className={className}>
			<Icon src={CreditCard} alt="Credit Card Icon" />
			Adicione um novo cartão de crédito
		</Container>
	);
};

export default CheckoutInfo;
