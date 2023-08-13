import { Main, Title, ItemBox, Item } from './styles'

const BoxComponent = () => {
	const titles = [
		{ name: 'Item Name', desc: '' },
		{ name: 'Sale Size', desc: 'cl' },
		{ name: 'In Stock', desc: 'tap num' },
		{ name: 'Low Stock', desc: 'threshold qty' },
		{ name: 'Stock Order', desc: 'min. qty' },
		{ name: '', desc: '' },
		{ name: 'Supplier', desc: '' },
		{ name: '', desc: '' }
	]
	return	(
		<Main>
			{ titles.map((title, index) => {
				return (
					<ItemBox key={title.name}>
						<Title isFirst={!index}>{title.name}<br/>{ title.desc ? `(${title.desc})` : ''}</Title>
						<Item isFirst={!index}>Test</Item>
					</ItemBox>
				)
			})}
		</Main>
	)
}

export default BoxComponent