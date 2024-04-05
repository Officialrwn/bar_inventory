import { Main, BoxItem } from './styles'
import { useContext } from 'react';
import { BoxComponentContext } from '../../context/BoxComponentContext';
import { BoxComponentType } from '../../types/BoxComponentType';
import { StringKeyObject } from '../../types/types';
import BoxIcons from '../BoxIcons/BoxIcons';

const BoxItems: React.FC<StringKeyObject<number>> = ({index}) => {
	const { category } = useContext(BoxComponentContext) as BoxComponentType;
	const lastIndex = category.titles.length - 1;
	const boxItemsComponent = category.products.map((item: string[], i: number) => (
		index !== lastIndex
		?	<BoxItem key={i} $index={index}>{item[index]}</BoxItem>
		: <BoxIcons key={i} productname={item[0]}/>
	))
	return (
		<Main>{boxItemsComponent}</Main>
	)
}

export default BoxItems