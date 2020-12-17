import styled, {css} from 'styled-components';

export const CustomSelect = styled.select`
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

export const Chevron = styled.i`
	position: absolute;
	color: ${({theme}) => theme.colors.primary.red};
	right: 2px;
	bottom: 6px;
`;
