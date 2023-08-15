import BoxIcons from '../BoxIcons/BoxIcons';
import { Main, Title, ItemBox, Item } from './styles'
import { useContext } from 'react';
import { BoxComponentContext } from '../../context/BoxComponentContext';
import { BoxComponentType } from '../../types/BoxComponentType';
import { StringKeyObject } from '../../types/types';

const BoxContent = () => {
	const { category } = useContext(BoxComponentContext) as BoxComponentType;
	const lastIndex = category.titles.length - 1;

	return	(
		<Main>
			{ category.titles.map((title: StringKeyObject<string>, index: number) => {
				return (
					<ItemBox key={title.name}>
						<Title $index={index}>
							{ index !== 5 && index !== 7 ? title.name : '' }<br/>
							{ title.unit ? `(${title.unit})` : ''}
						</Title>
						{ category.products.map((item: Array<string>, i: number) => (
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