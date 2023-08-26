import { Main, Icon, IconDesc, IconBox } from './styles'
import { useContext } from 'react';
import { BoxComponentContext } from '../../context/BoxComponentContext';
import { BoxComponentType } from '../../types/BoxComponentType';

const BoxHeaderIcons: React.FC = () => {
	const add = require('../../assets/images/add.png');
	const change = require('../../assets/images/change.png');
	const { category } = useContext(BoxComponentContext) as BoxComponentType;

	const addIcon = category.icons.add ? <IconBox><Icon src={add} alt={add}/><IconDesc>Add Product</IconDesc></IconBox> : null;
	const changeIcon = category.icons.changeOrder ? <IconBox><Icon src={change} alt={change}/><IconDesc>Change Order</IconDesc></IconBox> : null;
	return	(
		<Main>
			{[addIcon, changeIcon]}
		</Main>
	)
}

export default BoxHeaderIcons

