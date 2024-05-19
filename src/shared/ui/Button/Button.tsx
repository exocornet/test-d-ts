'use client';

import './Button.scss';
import classes from './Button.cn';
import { useClassName } from '../../hooks';

export function Button(props: IButton) {
	// # ЛОГИКА КОМПОНЕНТА # //
	const { data, cn, on, className } = props;

	// # ПОЛУЧЕНИЕ CSS КЛАССОВ КОМПОНЕНТА # //
	const styles = classes({ ...cn });

	// # ВЕРСТКА КОМПОНЕНТА # //
	return (
		<button className={useClassName(styles.block, className)} type={data.type} onClick={on?.onClick}>
			{data.text}
		</button>
	);
}
