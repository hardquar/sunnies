import React from 'react';
import { color } from '../helpers';
import { Icon, IconProps } from './Icon';

/** LoaderIcon */
export const LoaderIcon: React.SFC<IconProps> = (props) => {
	return (
		<Icon {...props} viewBox='0 0 18 18'>
			<title>Loading</title>
			<path fill={color(props.fill)} d='M2 9.55v-1h14v1z' fillRule='nonzero' />
		</Icon>
	);
};
