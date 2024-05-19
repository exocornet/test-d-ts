interface IButton extends IChildrenAndClassName {
	data: {
		text: string;
		type?: HTMLButtonElement['type'];
	};
	cn?: {
		margin?: string;
		color?: 'secondary' | 'red';
	};
	on?: {
		onClick: React.MouseEventHandler<GlobalEventHandlers>;
	};
	opt?: {
		isActive?: boolean;
		disabled?: boolean;
	};
}
