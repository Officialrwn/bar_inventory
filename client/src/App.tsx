import './styles/app.css'
import Home from './pages/Home/Home'
import SideBar from './components/SideBar/SideBar'
import NavBar from './components/NavBar/NavBar'


const App = () => {
  return (
    <div className="App">
			<NavBar/>
			<div className="line"></div>
			<div className="main">
				<SideBar/>
				<Home/>
			</div>
    </div>
  );
}

export default App;
