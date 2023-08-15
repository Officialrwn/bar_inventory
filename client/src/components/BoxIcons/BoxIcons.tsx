import { Main, Icon } from './styles'

const BoxIcons = () => {
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