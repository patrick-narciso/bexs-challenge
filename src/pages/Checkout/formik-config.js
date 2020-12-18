import * as Yup from 'yup';
import cardValidator from 'card-validator';

const NewTransactionSchema = Yup.object().shape({
	cardHolder: Yup.string()
		.required('Nome é obrigatório')
		.min(2, 'Insira seu nome completo'),
	cardNumber: Yup.string()
		.required('Cartão é obrigatório')
		.test(
			'cardNumber',
			'Número de cartão inválido',
			(cardNumber) => cardNumber && cardValidator.number(cardNumber).isValid
		),
	expireDate: Yup.string()
		.required('Data é obrigatória')
		.test(
			'expirationDate',
			'Data inválida',
			(expirationDate) =>
				expirationDate && cardValidator.expirationDate(expirationDate).isValid
		),
	cvc: Yup.string()
		.required('Código inválido')
		.test('cvc', 'Código inválido', (cvc) => cvc && cardValidator.cvv(cvc).isValid),
	installments: Yup.string().required('Insira o número de parcelas'),
});

export const formikConfig = {
	initialValues: {
		cardHolder: '',
		cardNumber: '',
		expireDate: '',
		cvc: '',
		installments: '',
	},
	validationSchema: NewTransactionSchema,
	validateOnMount: true,
};

export const normalizeTransactionPayload = ({
	cardHolder,
	cardNumber,
	expireDate,
	cvc,
	installments,
}) => ({
	credit_card_holder_name: cardHolder,
	credit_card_number: cardNumber.replace(/\s/g, ''),
	credit_card_expiration_date: expireDate.replace('/', ''),
	credit_card_cvv: cvc,
	amount: 1000,
	installments,
	created_at: Date.now(),
});
