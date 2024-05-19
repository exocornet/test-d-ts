import { PropsWithChildren } from 'react';

interface IContainer extends PropsWithChildren {
	className?: string;
	cn?: {
		margin?: string;
	};
}

export default IContainer;
