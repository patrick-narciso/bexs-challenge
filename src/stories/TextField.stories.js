/* eslint-disable import/no-anonymous-default-export */
import {TextField} from '../components';

export default {
	title: 'TextField',
	component: TextField,
};

const Template = (args) => (
	<TextField id="cardNumber" label="Número do cartão" type="text" {...args} />
);

export const Default = Template.bind({});
