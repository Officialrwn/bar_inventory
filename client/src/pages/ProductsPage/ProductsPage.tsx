import BoxComponent from '../../components/BoxComponent/BoxComponent'
import { Main } from './styles'
import { tapList } from '../../data/products-list'

const ProductsPage: React.FC = () => (
	<Main>
		<BoxComponent category={tapList}/>
	</Main>
)

export default ProductsPage