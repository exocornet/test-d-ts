import './Text.scss';
import IText from './Text.types';

export function Text({ text }: IText) {
	return <p>{text}</p>;
}
