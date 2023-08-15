export type BoxComponentType = {
	category: {
		header: string,
		titles: Array<{ name: string, unit: string }>,
	},
	products: Array<Array<string>>;
}