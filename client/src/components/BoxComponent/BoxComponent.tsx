import { Main, Title, ItemBox, Item, IconBox, Icon } from './styles'

const BoxComponent = () => {
	const titles = [
		{ name: 'Item Name', unit: '' },
		{ name: 'Sale Size', unit: 'cl' },
		{ name: 'In Stock', unit: 'tap num' },
		{ name: 'Low Stock', unit: 'threshold qty' },
		{ name: 'Stock Order', unit: 'min. qty' },
		{ name: '-', unit: '' },
		{ name: 'Supplier', unit: '' },
		{ name: 'icon', unit: ''}
	]
	
	const products = [
		[ 
			'AURA III',
			'50',
			'213214',
			'555',
			'555',
			'-',
			'Hartwall',
		],
		[ 
			'AURA III',
			'50',
			'213214',
			'555',
			'555',
			'-',
			'Hartwall',
		],
		[ 
			'AURA III',
			'50',
			'213214',
			'555',
			'555',
			'-',
			'Hartwall',
		],
		[ 
			'AURA III',
			'50',
			'213214',
			'555',
			'555',
			'-',
			'Hartwall',
		],
		[ 
			'AURA III',
			'50',
			'213214',
			'555',
			'555',
			'-',
			'Hartwall',
		],
		[ 
			'AURA III',
			'50',
			'213214',
			'555',
			'555',
			'-',
			'Hartwall',
		],
		[ 
			'Test11',
			'Test22',
			'Test33',
			'Test44',
			'Test55',
			'-',
			'PM Juoma',
		]
	]
	const lastIndex = titles.length - 1;
	const modify = require('../../assets/images/modify.png');
	const remove = require('../../assets/images/delete.png');
	
	return	(
		<Main>
			{ titles.map((title, index) => {
				return (
					<ItemBox key={title.name}>
						<Title $index={index}>
							{ index !== 5 && index !== 7 ? title.name : '' }<br/>
							{ title.unit ? `(${title.unit})` : ''}
						</Title>
						{ products.map((item, i) => (
							index === lastIndex ? 
							<IconBox key={i}>
								<Icon src={modify} alt={modify}/>
								<Icon src={remove} alt={remove}/>
							</IconBox> 
							: <Item key={i} $index={index}>{item[index]}</Item>
							))}
					</ItemBox>
				)
			})}
		</Main>
	)
}

export default BoxComponent