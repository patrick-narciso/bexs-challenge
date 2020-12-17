import {css} from 'styled-components';

export default css`
	background-color: ${({theme}) => theme.colors.primary.red};
	color: #ffffff;

	:disabled {
		background-color: ${({theme}) => theme.colors.primary.gray};
		color: ${({theme}) => theme.colors.primary.black};
	}
`;
