import { Main, BoxItem } from './styles'
import { useContext } from 'react';
import { BoxComponentContext } from '../../context/BoxComponentContext';
import { BoxComponentType } from '../../types/BoxComponentType';
import BoxIcons from '../BoxIcons/BoxIcons';
import { StringKeyObject } from '../../types/types';

const BoxItems: React.FC<StringKeyObject<number>> = ({index}) => {
	const { category } = useContext(BoxComponentContext) as BoxComponentType;
	const lastIndex = category.titles.length - 1;

	return (
		<Main>
			{ category.products.map((item: string[], i: number) => (
					index !== lastIndex
					?	<BoxItem key={i} $index={index}>{item[index]}</BoxItem>
					: <BoxIcons key={i}/>	
			))}
		</Main>
	)
}

export default BoxItems