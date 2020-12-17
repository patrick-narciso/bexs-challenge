import {useState} from 'react';
import PropTypes from 'prop-types';

import {Label, Input, Disclaimer, Wrapper, Container} from './styles';

const TextField = ({
	label,
	id,
	type,
	onChange,
	onBlur,
	onFocus,
	mask,
	value,
	error,
	helperMessage,
}) => {
	const [fieldActive, setFieldActive] = useState(false);

	function activateField() {
		setFieldActive(true);
	}

	function handleBlur(e) {
		if (e.target.value === '') {
			setFieldActive(false);
		}
		onBlur(e);
	}

	function handleFocus(e) {
		setFieldActive(true);
		onFocus(e);
	}

	function handleChange(e) {
		activateField();
		onChange(e);
	}

	return (
		<Container $error={error}>
			<Wrapper data-testid="wrapper-textfield">
				<Label
					data-testid="label-textfield"
					htmlFor={id}
					$active={fieldActive}
					$helper={helperMessage}
				>
					{label}
				</Label>
				<Input
					id={id}
					data-testid="textfield"
					name={id}
					type={type}
					mask={mask}
					maskChar={null}
					onFocus={handleFocus}
					onChange={handleChange}
					onBlur={handleBlur}
					value={value}
					$active={fieldActive}
					$error={error}
				/>
			</Wrapper>
			{error && <Disclaimer>{error}</Disclaimer>}
		</Container>
	);
};

TextField.defaultProps = {
	onBlur: () => {},
	onFocus: () => {},
	onChange: () => {},
	mask: '',
	value: '',
	error: '',
	type: 'text',
	helperMessage: '',
};

TextField.propTypes = {
	label: PropTypes.string.isRequired,
	type: PropTypes.string,
	id: PropTypes.string.isRequired,
	onChange: PropTypes.func,
	onBlur: PropTypes.func,
	onFocus: PropTypes.func,
	mask: PropTypes.string,
	value: PropTypes.string,
	error: PropTypes.string,
	helperMessage: PropTypes.string,
};

export default TextField;
