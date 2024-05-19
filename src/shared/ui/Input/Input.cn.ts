import CN from '../../lib/ClassBem';
import IInput from './Input.types';

export default function classes(cn: IInput['cn']) {
	const BLOCK = CN('input');

	return {
		block: BLOCK({}, [cn?.margin]),
	};
}
