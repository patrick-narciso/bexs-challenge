/* eslint-disable import/no-anonymous-default-export */
import {Button} from '../components';

export default {
	title: 'Button',
	component: Button,
};

const Template = (args) => (
	<Button onClick={() => {}} {...args}>
		Continuar
	</Button>
);

export const Primary = Template.bind({});
