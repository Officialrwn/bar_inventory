import { BoxComponentType } from '../../types/BoxComponentType';
import { Main, Header } from './styles'
import { BoxComponentContext } from '../../context/BoxComponentContext';
import { useContext } from 'react';
import BoxHeaderIcons from '../BoxHeaderIcons/BoxHeaderIcons';

const BoxHeader: React.FC = () =>	{
	const { category } = useContext(BoxComponentContext) as BoxComponentType;

	return (
		<Main>
			<Header>{category.header} Products</Header>
			<BoxHeaderIcons />
		</Main>
	)
}

export default BoxHeader