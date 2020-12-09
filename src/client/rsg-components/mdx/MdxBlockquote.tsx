import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import Styled, { JssInjectedProps } from 'rsg-components/Styled';
import * as Rsg from '../../../typings';

const styles = ({ space, color, fontSize, fontFamily }: Rsg.Theme) => ({
	blockquote: {
		margin: [[space[2], space[4]]],
		padding: 0,
		color: color.base,
		fontFamily: fontFamily.base,
		fontSize: fontSize.base,
		lineHeight: 1.5,
	},
});

interface MdxBlockquote extends JssInjectedProps {
	children: React.ReactNode;
	className?: string;
}

export const MdxBlockquote: React.FunctionComponent<MdxBlockquote> = ({
	classes,
	className,
	children,
}) => {
	const blockquoteClasses = cx(classes.blockquote, className);
	return <blockquote className={blockquoteClasses}>{children}</blockquote>;
};

MdxBlockquote.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export default Styled<MdxBlockquote>(styles)(MdxBlockquote);