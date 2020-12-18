import PropTypes from 'prop-types';
import styled from 'styled-components';

import {TextField, Select, Button} from 'components';

export const PaymentForm = styled.form`
	margin-top: 90px;
	padding: 40px;
	width: 100%;
	@media (min-width: 1024px) {
		margin-top: 0;
		margin-left: 130px;
		padding-right: 120px;
	}
`;

export const CardRow = styled.div`
	display: flex;
	flex-direction: row;
`;

const CvvCol = styled.div`
	display: flex;
	flex-direction: column;
	flex-basis: 100%;
	flex: 2;
`;

const ExpirationCol = styled(CvvCol)`
	flex: 2;
	margin-right: 8px;
`;

const ButtonContainer = styled.div`
	@media (min-width: 1024px) {
		display: flex;
		justify-content: flex-end;
	}
`;

const CustomButton = styled(Button)`
	@media (min-width: 1024px) {
		max-width: 246px;
	}
`;

const Form = ({handleFocus, handleSubmit, formik, loading}) => {
	const installments = [
		{text: '1x de R$ 12.000,00 sem juros', value: '1'},
		{text: '2x de R$ 6.000,00 sem juros', value: '2'},
		{text: '3x de R$ 4.000,00 sem juros', value: '3'},
		{text: '12x de R$ 1.000,00 sem juros', value: '12'},
	];

	return (
		<PaymentForm>
			<TextField
				id="cardNumber"
				label="Número do cartão"
				onChange={formik.handleChange}
				onBlur={() => formik.setFieldTouched('cardNumber')}
				mask="9999 9999 9999 9999"
				value={formik.values.cardNumber}
				error={formik.touched.cardNumber && formik.errors.cardNumber}
				onFocus={handleFocus}
			/>
			<TextField
				id="cardHolder"
				label="Nome (igual ao cartão)"
				onChange={formik.handleChange}
				onBlur={() => formik.setFieldTouched('cardHolder')}
				value={formik.values.cardHolder}
				error={formik.touched.cardHolder && formik.errors.cardHolder}
				onFocus={handleFocus}
			/>
			<CardRow>
				<ExpirationCol>
					<TextField
						id="expireDate"
						label="Validade"
						onChange={formik.handleChange}
						onBlur={() => formik.setFieldTouched('expireDate')}
						mask="99/99"
						value={formik.values.expireDate}
						error={formik.touched.expireDate && formik.errors.expireDate}
						onFocus={handleFocus}
					/>
				</ExpirationCol>
				<CvvCol>
					<TextField
						id="cvc"
						label="CVV"
						onChange={formik.handleChange}
						onBlur={() => formik.setFieldTouched('cvc')}
						mask="999"
						value={formik.values.cvc}
						error={formik.touched.cvc && formik.errors.cvc}
						onFocus={handleFocus}
					/>
				</CvvCol>
			</CardRow>
			<Select
				id="installments"
				label="Número de parcelas"
				onChange={formik.handleChange}
				options={installments}
				onBlur={() => formik.setFieldTouched('installments')}
				value={formik.values.installments}
				error={formik.touched.installments && formik.errors.installments}
				onFocus={handleFocus}
			/>
			<ButtonContainer>
				<CustomButton
					onClick={handleSubmit}
					loading={loading}
					disabled={!formik.isValid || loading}
				>
					Continuar
				</CustomButton>
			</ButtonContainer>
		</PaymentForm>
	);
};

Form.defaultProps = {
	handleFocus: () => {},
	handleSubmit: () => {},
	loading: false,
};

Form.propTypes = {
	handleFocus: PropTypes.func,
	handleSubmit: PropTypes.func,
	formik: PropTypes.object.isRequired,
	loading: PropTypes.bool,
};

export default Form;
