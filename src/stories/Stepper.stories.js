/* eslint-disable import/no-anonymous-default-export */
import {Stepper, Step} from '../components';

export default {
	title: 'Stepper',
	component: Stepper,
};

const Template = (args) => (
	<Stepper>
		<Step title="Carrinho" finished />
		<Step title="Pagamento" active />
		<Step title="Confirmação" />
	</Stepper>
);

export const Default = Template.bind({});
