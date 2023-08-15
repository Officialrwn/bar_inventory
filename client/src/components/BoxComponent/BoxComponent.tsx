import { BoxComponentType } from '../../types/BoxComponentType';
import BoxContent from '../BoxContent/BoxContent';
import { Header } from './styles'

const BoxComponent = ({category, products}: BoxComponentType) =>	(
	<>
		<Header>{category.header} Products</Header>
		<BoxContent header={category.titles} products={products}/>
	</>
)

export default BoxComponent