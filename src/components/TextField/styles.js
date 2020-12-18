import styled, {css} from 'styled-components';
import InputMask from 'react-input-mask';

export const Label = styled.label`
	display: inline-block;
	position: absolute;
	cursor: text;
	bottom: 5px;
	transition: all 150ms ease-in;
	font-family: ${({theme}) => theme.fonts.family};
	font-size: ${({theme}) => theme.fonts.sizes.medium};
	color: ${({theme}) => theme.colors.primary.gray};
	${({$active}) =>
		$active &&
		css`
			font-size: ${({theme}) => theme.fonts.sizes.small};
			transform: translateY(-31px);
		`};
`;

export const inputStyles = css`
	padding: 5px 0px;
	border: none;
	font-family: ${({theme}) => theme.fonts.family};
	font-size: ${({theme}) => theme.fonts.sizes.medium};
	border-bottom: 1px solid
		${({theme, $error}) =>
			$error ? theme.colors.primary.warning : theme.colors.primary.gray};
	transition: all 150ms ease-in;
	width: 100%;
	color: ${({theme}) => theme.colors.primary.black};
	${({$active}) =>
		$active &&
		css`
			border-bottom-color: ${({theme, $error}) =>
				$error ? theme.colors.primary.warning : theme.colors.primary.gray};
		`}
	appearance: none;
	:focus {
		outline: none;
	}
`;

export const Input = styled(InputMask)`
	${inputStyles}
`;

export const Disclaimer = styled.div`
	display: block;
	margin-top: 5px;
	color: ${({theme}) => theme.colors.primary.warning};
	font-family: ${({theme}) => theme.fonts.family};
	font-size: ${({theme}) => theme.fonts.sizes.small};
`;

export const Wrapper = styled.div`
	position: relative;
`;

export const Container = styled.div`
	margin-bottom: ${({theme}) => theme.measures.verticalDistance};
`;
