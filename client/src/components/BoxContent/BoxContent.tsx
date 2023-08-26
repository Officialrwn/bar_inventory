import { Main, ItemBox } from './styles'
import { useContext } from 'react';
import { BoxComponentContext } from '../../context/BoxComponentContext';
import { BoxComponentType } from '../../types/BoxComponentType';
import { StringKeyObject } from '../../types/types';
import BoxItems from '../BoxItems/BoxItems';
import BoxTitles from '../BoxTitles/BoxTitles';

const BoxContent: React.FC = () => {
	const { category } = useContext(BoxComponentContext) as BoxComponentType;

	return	(
		<Main>
			{ category.titles.map((title: StringKeyObject<string>, index: number) => {
				return (
					<ItemBox key={`${title.name}${index}`}>
						<BoxTitles title={title} index={index}/>
						<BoxItems index={index}/>
					</ItemBox>
				)
			})}
		</Main>
	)
}

export default BoxContent