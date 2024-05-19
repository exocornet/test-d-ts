import './Input.scss';
import classes from './Input.cn';
import IInput from './Input.types';
import { useClassName } from '../../hooks';
import { ForwardedRef, forwardRef } from 'react';

function InputForwardRef(props: IInput, ref: ForwardedRef<HTMLInputElement>) {
	// # ЛОГИКА КОМПОНЕНТА # //
	const { data, cn, on, className } = props;

	// # ПОЛУЧЕНИЕ CSS КЛАССОВ КОМПОНЕНТА # //
	const styles = classes({ ...cn });

	return (
		<input
			{...props}
			ref={ref}
			name={data.name}
			type={data.type}
			placeholder={data.placeholder}
			className={useClassName(styles.block, className)}
			onChange={on?.onChange}
			onKeyDown={on?.onKeyDown}
			value={data.value}
		/>
	);
}

export const Input = forwardRef(InputForwardRef);
