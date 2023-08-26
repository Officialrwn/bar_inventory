import { Main, Icon } from './styles'
import { useContext } from 'react';
import { BoxComponentContext } from '../../context/BoxComponentContext';
import { BoxComponentType } from '../../types/BoxComponentType';

const BoxIcons: React.FC = () => {
	const modify = require('../../assets/images/modify.png');
	const remove = require('../../assets/images/delete.png');
	const { category } = useContext(BoxComponentContext) as BoxComponentType;
	
	const modifyIcon = category.icons.modify ? <Icon src={modify} alt={modify}/> : null;
	const removeIcon = category.icons.remove ? <Icon src={remove} alt={remove}/> : null;
	return	(
		<Main>
			{[modifyIcon, removeIcon]}
		</Main>
	)
}

export default BoxIcons

