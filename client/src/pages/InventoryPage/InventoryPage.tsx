import BoxComponent from '../../components/BoxComponent/BoxComponent'
import { Main } from './styles'
import { tapInventoryHeader } from '../../data/constants'

const InventoryPage = () => (
	<Main>
		<BoxComponent category={tapInventoryHeader}/>
	</Main>
	)

export default InventoryPage