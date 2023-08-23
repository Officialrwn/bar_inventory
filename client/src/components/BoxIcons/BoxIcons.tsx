import { BoxIconType } from '../../types/BoxIconType';
import { Main, Icon } from './styles'

const BoxIcons: React.FC<any> = () => {
	const modify = require('../../assets/images/modify.png');
	const remove = require('../../assets/images/delete.png');

	return	(
		<Main>
			<Icon src={modify} alt={modify}/>
			<Icon src={remove} alt={remove}/>
		</Main>
	)
}

export default BoxIcons

