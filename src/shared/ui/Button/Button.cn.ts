import CN from '../../lib/ClassBem';
import IButton from './Button.types';

export default function classes(cn: IButton['cn']) {
	const BLOCK = CN('button');

	return {
		block: BLOCK(
			{
				[`${cn?.color}`]: ['secondary', 'red'].includes(`${cn?.color}`),
				// [`${cn?.color}`]: cn?.color === 'secondary',
			},
			[cn?.margin]
		),
	};
}
