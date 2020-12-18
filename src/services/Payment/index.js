import HttpClient from 'utils/http-client';

class Payment extends HttpClient {
	create = (transaction) => {
		return this.instance.post('/pagar', transaction);
	};
}

export const PaymentService = new Payment();
