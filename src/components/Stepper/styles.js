import styled from 'styled-components';

export const Chevron = styled.i`
	color: ${({theme}) => theme.colors.primary.red};
	width: 8px;
	height: 13px;
`;

export const Container = styled.div`
	display: flex;
`;

export const Title = styled.span`
	font-family: ${({theme}) => theme.fonts.family};
	font-size: ${({theme}) => theme.fonts.sizes.small};
	color: ${({theme}) => theme.colors.primary.red};
	margin-right: 24px;
	margin-left: 8px;
`;

export const Icon = styled.div`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	width: 20px;
	height: 20px;
	background: #ffffff;
	border: 1px solid ${({theme}) => theme.colors.primary.red};
	text-align: center;
	font-family: ${({theme}) => theme.fonts.family};
	font-size: ${({theme}) => theme.fonts.sizes.small};
	color: ${({theme}) => theme.colors.primary.red};
`;

export const CheckIcon = styled.i`
	color: ${({theme}) => theme.colors.primary.red};
	::before {
		font-size: 22px;
	}
`;

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	margin-left: 24px;
`;

export const Text = styled.span`
	font-family: ${({theme}) => theme.fonts.family};
	font-size: ${({theme}) => theme.fonts.sizes.small};
	color: #ffffff;
	font-weight: ${({bold}) => (bold ? '700' : 'normal')};
`;
