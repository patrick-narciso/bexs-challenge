import PropTypes from 'prop-types';

import {Container, LoadingIcon, CustomButton} from './styles';

const Button = ({variant, children, onClick, disabled, loading}) => {
	const renderChildren = () => {
		if (loading) {
			return (
				<Container>
					<LoadingIcon data-testid="loader" className="fa fa-refresh fa-spin" />
					{children}
				</Container>
			);
		}
		return children;
	};
	return (
		<CustomButton type="button" variant={variant} onClick={onClick} disabled={disabled}>
			{renderChildren()}
		</CustomButton>
	);
};

Button.defaultProps = {
	variant: 'primary',
	disabled: false,
	loading: false,
};

Button.propTypes = {
	variant: PropTypes.oneOf(['primary', 'secondary']),
	children: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
	onClick: PropTypes.func.isRequired,
	loading: PropTypes.bool,
};

export default Button;
