import BoxComponent from '../../components/BoxComponent/BoxComponent'
import { Main } from './styles'
import { products, tapInventoryHeader } from '../../data/constants'

const InventoryPage = () => (
	<Main>
		<h1 style={{color: 'black', marginTop: 0}}>Tap Products</h1>
		<BoxComponent header={tapInventoryHeader} products={products}/>
	</Main>
	)

export default InventoryPage