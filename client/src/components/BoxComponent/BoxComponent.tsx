import { Main, TitleHeader, Title, ItemBox, Item } from './styles'

const BoxComponent = () => {
	const titles = [
		{ name: 'Item Name', desc: '' },
		{ name: 'Sale Size', desc: 'cl' },
		{ name: 'In Stock', desc: 'tap num' },
		{ name: 'Low Stock', desc: 'threshold qty' },
		{ name: 'Stock Order', desc: 'min. qty' },
		{ name: 'Placeholder', desc: '' },
		{ name: 'Supplier', desc: '' }
	]
	return	(
		<Main>
			<TitleHeader>
				{ titles.map((title) => {
					return (
						<Title key={title.name}>
								{title.name}<br/> { title.desc ? `(${title.desc})` : '' }
							</Title>
						)
					})}
			</TitleHeader>
			<ItemBox>
			{ titles.map((title) => {
				return (
					<Item key={title.name}>
							{title.name}
						</Item>
					)
				})}
			</ItemBox>
		</Main>
	)
}

export default BoxComponent