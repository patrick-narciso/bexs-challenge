import styled from 'styled-components';

import Primary from './Primary';

export const CustomButton = styled.button`
	font-family: ${({theme}) => theme.fonts.family};
	font-size: ${({theme}) => theme.fonts.sizes.medium};
	text-transform: uppercase;
	line-height: 22px;
	border: none;
	cursor: pointer;
	transition: all 150ms ease-in;
	padding: 15px;
	border-radius: 10px;
	width: 100%;
	height: 51px;

	${({variant}) => variant === 'primary' && Primary};

	:focus {
		outline: none;
	}
`;

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const LoadingIcon = styled.i`
	margin-right: 10px;
`;
