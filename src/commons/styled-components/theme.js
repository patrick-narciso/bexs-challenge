import {createGlobalStyle} from 'styled-components';
import {normalize} from 'styled-normalize';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
	${normalize}
	${reset}

	*, *:before, *:after {
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
	}

	body {
		font-family: ${({theme}) => theme.fonts.family}, sans-serif;
		background-color: #FFFFFF;
	}
`;

const theme = {
	colors: {
		primary: {
			red: '#DE4B4B',
			black: '#3C3C3C',
			gray: '#C9C9C9',
			warning: '#EB5757',
		},
	},
	fonts: {
		sizes: {
			small: '13px',
			medium: '17px',
			large: '20px',
		},
		family: 'Lato',
	},
	measures: {
		verticalDistance: '41px',
	},
};

export default theme;
