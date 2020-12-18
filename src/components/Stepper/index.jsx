import React from 'react';
import PropTypes from 'prop-types';

import useWindowSize from 'hooks/useWindowSize';

import {CheckIcon, Chevron, Container, Wrapper, Text, Title, Icon} from './styles';

const Stepper = ({children, className}) => {
	const size = useWindowSize();
	const isMobile = size.width <= 1024;
	const childrenLength = React.Children.count(children);
	let indexStepActive = null;
	React.Children.forEach(children, (child, index) => {
		if (child.props.active) indexStepActive = index + 1;
	});

	if (isMobile) {
		return (
			<Container className={className}>
				<Text bold>
					Etapa {indexStepActive} <Text>de {childrenLength}</Text>
				</Text>
			</Container>
		);
	}

	return (
		<Container className={className}>
			{React.Children.map(children, (child, index) => {
				if (index + 1 === childrenLength && React.isValidElement(child)) {
					return React.cloneElement(child, {isLastItem: true, index: index + 1});
				}
				return React.cloneElement(child, {index: index + 1, isLastItem: false});
			})}
		</Container>
	);
};

Stepper.propTypes = {
	children: PropTypes.node.isRequired,
};

export const Step = ({index, title, isLastItem, finished, active}) => {
	return (
		<Wrapper>
			{!finished ? (
				<Icon data-testid="number-icon">{index}</Icon>
			) : (
				<CheckIcon data-testid="check-icon" className="fa fa-check-circle"></CheckIcon>
			)}
			<Title>{title}</Title>
			{!isLastItem && (
				<Chevron data-testid="chevron-icon" className="fa fa-chevron-right"></Chevron>
			)}
		</Wrapper>
	);
};

Step.defaultProps = {
	index: 0,
	isLastItem: true,
	finished: false,
	active: false,
};

Step.propTypes = {
	index: PropTypes.number,
	title: PropTypes.string,
	isLastItem: PropTypes.bool,
	finished: PropTypes.bool,
	active: PropTypes.bool,
};

export default Stepper;
