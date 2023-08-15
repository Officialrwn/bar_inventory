import BoxComponent from '../../components/BoxComponent/BoxComponent'
import { Main } from './styles'
import { products, tapInventoryHeader } from '../../data/constants'

const InventoryPage = () => (
	<Main>
		<BoxComponent category={tapInventoryHeader} products={products}/>
	</Main>
	)

export default InventoryPage