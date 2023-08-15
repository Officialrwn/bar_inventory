import { BoxComponentType } from '../../types/BoxComponentType';
import { Header } from './styles'
import BoxContent from '../BoxContent/BoxContent';
import { BoxComponentContext } from '../../context/BoxComponentContext';

const BoxComponent = ({category }: BoxComponentType) =>	(
	<>
		<Header>{category.header} Products</Header>
		<BoxComponentContext.Provider value={{category}}>
			<BoxContent />
		</BoxComponentContext.Provider>
	</>
)

export default BoxComponent