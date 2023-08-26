import HomeComponent from '../../components/HomeComponent/HomeComponent'
import { HomeComponentList } from '../../data/constants'
import { Main, Header, Content } from './styles'


const HomePage: React.FC = () => (
	<Main>
		<Header><h1>Information</h1></Header>
		<Content>
			{ HomeComponentList.sort().map((item) => {
					return <HomeComponent key={item} title={item}/>
			})}
		</Content>
	</Main>
)

export default HomePage