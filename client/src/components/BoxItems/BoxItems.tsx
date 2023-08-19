import { BoxItem } from './styles'
import { useContext } from 'react';
import { BoxComponentContext } from '../../context/BoxComponentContext';
import { BoxComponentType } from '../../types/BoxComponentType';
import BoxIcons from '../BoxIcons/BoxIcons';

const BoxItems = ({index}: any) => {
	const { category } = useContext(BoxComponentContext) as BoxComponentType;
	const lastIndex = category.titles.length - 1;
	return (
		<>
			{ category.products.map((item: Array<string>, i: number) => (
					index === lastIndex
					? <BoxIcons key={i}/>
					:	<BoxItem key={i} $index={index}>{item[index]}</BoxItem>
					))}
		</>
	)
}

export default BoxItems