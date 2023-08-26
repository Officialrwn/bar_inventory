import { BoxComponentType } from '../../types/BoxComponentType';
import BoxContent from '../BoxContent/BoxContent';
import { BoxComponentContext } from '../../context/BoxComponentContext';
import BoxHeader from '../BoxHeader/BoxHeader';

const BoxComponent: React.FC<BoxComponentType> = ({category}) =>	(
	<>
		<BoxComponentContext.Provider value={{category}}>
			<BoxHeader/>
			<BoxContent/>
		</BoxComponentContext.Provider>
	</>
)

export default BoxComponent