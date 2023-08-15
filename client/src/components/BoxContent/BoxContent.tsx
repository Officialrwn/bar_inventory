import BoxIcons from '../BoxIcons/BoxIcons';
import { Main, Title, ItemBox, Item } from './styles'
import { useContext } from 'react';
import { BoxComponentContext } from '../../context/BoxComponentContext';
import { BoxComponentType } from '../../types/BoxComponentType';

const BoxContent = () => {
	const { category } = useContext(BoxComponentContext) as BoxComponentType;
	const lastIndex = category.titles.length - 1;

	return	(
		<Main>
			{ category.titles.map((title: any, index: any) => {
				return (
					<ItemBox key={title.name}>
						<Title $index={index}>
							{ index !== 5 && index !== 7 ? title.name : '' }<br/>
							{ title.unit ? `(${title.unit})` : ''}
						</Title>
						{ category.products.map((item: any, i: any) => (
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