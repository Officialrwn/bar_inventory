import { Main, ItemBox } from './styles'
import { useContext } from 'react';
import { BoxComponentContext } from '../../context/BoxComponentContext';
import { BoxComponentType } from '../../types/BoxComponentType';
import BoxItems from '../BoxItems/BoxItems';
import BoxTitles from '../BoxTitles/BoxTitles';

const BoxContent: React.FC = () => {
	const { category } = useContext(BoxComponentContext) as BoxComponentType;
	const itemBoxComponent = category.titles.map((title, index) => (
		<ItemBox key={`${title.name}${index}`}>
			<BoxTitles title={title} index={index}/>
			<BoxItems index={index}/>
		</ItemBox>
	))

	return	(
		<Main>{itemBoxComponent}</Main>
	)
}

export default BoxContent