import BoxIcons from '../BoxIcons/BoxIcons';
import { Main, Title, ItemBox, Item } from './styles'

const BoxContent = ({header, products}: any) => {
	const lastIndex = header.length - 1;
	return	(
		<Main>
			{ header.map((title: any, index: any) => {
				return (
					<ItemBox key={title.name}>
						<Title $index={index}>
							{ index !== 5 && index !== 7 ? title.name : '' }<br/>
							{ title.unit ? `(${title.unit})` : ''}
						</Title>
						{ products.map((item: any, i: any) => (
							index === lastIndex
							? <BoxIcons key={i}/>
							:	<Item key={i} $index={index}>{item[index]}</Item>
							))}
					</ItemBox>
				)
			})}
		</Main>
	)
}

export default BoxContent