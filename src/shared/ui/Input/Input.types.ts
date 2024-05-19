import { ChangeEvent, ForwardedRef, KeyboardEvent } from 'react';

interface IInput extends IChildrenAndClassName {
	data: {
		type?: HTMLInputElement['type'];
		placeholder?: string;
		value?: string;
		name?: string;
	};
	ref?: ForwardedRef<HTMLInputElement>;
	cn?: {
		margin?: string;
	};
	on?: {
		onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
		onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
	};
	opt?: {
		disabled?: boolean;
	};
}

export default IInput;
