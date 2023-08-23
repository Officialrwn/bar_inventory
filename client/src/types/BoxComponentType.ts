import { StringKeyObject } from "./types";

export type BoxComponentType = {
	category: {
		header: string,
		titles: StringKeyObject<string>[],
		products: string[][];
		icons: StringKeyObject<boolean>;
	}
}