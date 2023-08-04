const checkProductType = (type) => {
	const typeList = ['tap', 'litretap', 'alcoholtap', 'bottles', 'liqeur', 'wine', 'misc']; //add to db later
	return typeList.includes(type);
}

export { checkProductType };