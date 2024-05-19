'use client';

import { Input } from '../../shared/ui';
import { useForm } from 'react-hook-form';
import IExampleForm from './ExampleForm.types';

export function ExampleForm() {
	const { register, handleSubmit } = useForm<IExampleForm>();

	const onSubmit = (data: IExampleForm) => {
		/* eslint-disable no-console */
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<h2>Форма отправки</h2>
			<Input {...register('name')} data={{ name: 'name' }} />
			<Input {...register('comment')} data={{ name: 'comment' }} />
			<button>Отправить</button>
		</form>
	);
}
