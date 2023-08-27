import { StringKeyObject } from '../../types/types'
import { Title } from './styles'
import { BoxComponentContext } from '../../context/BoxComponentContext';
import { BoxComponentType } from '../../types/BoxComponentType';
import { useContext } from 'react';

type BoxTitlesType = {
	title: StringKeyObject<string>,
	index: number
}

const BoxTitles: React.FC<BoxTitlesType> = ({title, index}) => {
	const { category } = useContext(BoxComponentContext) as BoxComponentType;
	const hasIcons = (category.icons.modify || category.icons.remove) ? '' : null;
	const titleName = title.name === 'icons' ? hasIcons : title.name;
	const titleUnit = title.unit ? `(${title.unit})` : '';
	return (
		<Title $index={index}>
			{titleName}<br/>
			{titleUnit}
		</Title>
	)
}

export default BoxTitles