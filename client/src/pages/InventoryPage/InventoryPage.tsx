import BoxComponent from '../../components/BoxComponent/BoxComponent'
import { Main } from './styles'
import { tapInventory, bottleInventory } from '../../data/inventory-products'
import { HandlerFunctionsContext } from '../../context/HandlerFunctionsContext'

const InventoryPage: React.FC = () => {
	const addHandler = () => {
		console.log("add inventory");
	}
	const modifyHandler = () => {
		console.log("modify inventory");
	}
	
	return (
		<Main>
			<HandlerFunctionsContext.Provider value={{addHandler, modifyHandler}}>
				<BoxComponent category={tapInventory}/>
				<BoxComponent category={bottleInventory}/>
			</HandlerFunctionsContext.Provider>
		</Main>
	)
}
export default InventoryPage