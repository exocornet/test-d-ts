import { useCallback, useState } from 'react';

import type { Dispatch, SetStateAction } from 'react';

export function useToggle(defaultValue?: boolean): [boolean, () => void, Dispatch<SetStateAction<boolean>>] {
	const [value, setValue] = useState(!!defaultValue);

	const toggle = useCallback(() => {
		setValue((value) => !value);
	}, []);

	return [value, toggle, setValue];
}
