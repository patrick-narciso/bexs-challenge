/* eslint-disable import/no-anonymous-default-export */
import {Select} from '../components';

export default {
	title: 'Select',
	component: Select,
};

const Template = (args) => (
	<Select
		id="installments"
		label="Número de parcelas"
		options={[{text: '12x 100,00', value: '12'}]}
		error="Insira o número de parcelas"
		{...args}
	/>
);

export const Default = Template.bind({});
