
export default function an38<T>(data: T[]) {
	return data.map((it) => {
		const keys = Object.keys(it) as (keyof T)[];
		return keys.reduce((pre, key) => {
			const value = it[key];
			if (typeof value === 'bigint') {
				return {
					...pre,
					[key]: Number(value)
				};
			}
			return {
				...pre,
				[key]: value
			};
		}, {} as T);
	});
}
