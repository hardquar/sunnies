import React from 'react';
import { color } from '../helpers';
import { Icon, IconProps } from './Icon';

/** BellIcon */
export const BellIcon: React.SFC<IconProps> = (props) => {
	return (
		<Icon {...props} viewBox='0 0 18 18'>
			<title>watch lot</title>
			<path
				d='M15.39 12.69A10.08 10.08 0 0 1 13.5 7V5.5a4.5 4.5 0 0 0-9 0V7a10.08 10.08 0 0 1-1.89 5.69.51.51 0 0 0-.06.53.5.5 0 0 0 .45.28h3.37a2.67 2.67 0 0 0-.12.75 2.75 2.75 0 0 0 5.5 0 2.67 2.67 0 0 0-.12-.75H15a.5.5 0 0 0 .45-.28.51.51 0 0 0-.06-.53zm-4.64 1.56a1.75 1.75 0 0 1-3.5 0 1.73 1.73 0 0 1 .18-.75h3.14c.116.233.177.49.18.75zM3.94 12.5A11 11 0 0 0 5.5 7V5.5a3.5 3.5 0 0 1 7 0V7a11 11 0 0 0 1.56 5.5H3.94z'
				fill={color(props.fill)}
				fillRule='nonzero'
			/>
		</Icon>
	);
};
