import { Main, Icon } from './styles'
import { useContext } from 'react';
import { BoxComponentContext } from '../../context/BoxComponentContext';
import { BoxComponentType } from '../../types/BoxComponentType';

const BoxIcons: React.FC<{productname: string}> = ({productname}) => {
	const modify = require('../../assets/images/modify.png');
	const remove = require('../../assets/images/delete.png');
	const { category } = useContext(BoxComponentContext) as BoxComponentType;
	
	const modifyHandler = () => {
		console.log("modify click", productname);
	}
	
	const removeHandler = () => {
		console.log("remove click", productname);
	}

	const modifyIcon = category.icons.modify ? <Icon onClick={modifyHandler} src={modify} alt={modify}/> : null;
	const removeIcon = category.icons.remove ? <Icon onClick={removeHandler} src={remove} alt={remove}/> : null;
	return	(
		<Main>
			{modifyIcon} 
			{removeIcon}
		</Main>
	)
}

export default BoxIcons

