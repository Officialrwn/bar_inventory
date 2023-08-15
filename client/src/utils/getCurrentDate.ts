const getCurrentDate = (): string => {
	const options: Intl.DateTimeFormatOptions = { day: "numeric", month: "long", year: "numeric" };
	return new Date().toLocaleString("fi-FI", options).toLocaleUpperCase();
}

export {
	getCurrentDate
}