import PropTypes from 'prop-types';

import {Container, LoadingIcon, CustomButton} from './styles';

const Button = ({variant, children, onClick, disabled, loading, className}) => {
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
		<CustomButton
			className={className}
			type="button"
			variant={variant}
			onClick={onClick}
			disabled={disabled}
		>
			{renderChildren()}
		</CustomButton>
	);
};

Button.defaultProps = {
	variant: 'primary',
	disabled: false,
	loading: false,
	onClick: () => {},
};

Button.propTypes = {
	variant: PropTypes.oneOf(['primary', 'secondary']),
	children: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
	loading: PropTypes.bool,
};

export default Button;
