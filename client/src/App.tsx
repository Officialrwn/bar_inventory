import './assets/css/app.css';
import './assets/fonts/Inria_Sans/InriaSans-Bold.ttf';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routesList } from './routes';
import * as route from './pages'

const App = () => {
	const routeComponents = routesList.map((route, index) => (
		<Route key={index} path={route.path} element={<route.element/>}/>
	))
	
  return (
    <div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<route.LayoutPage/>}>
						<Route index element={<route.HomePage/>}/>
						{routeComponents}
					</Route>
				</Routes>
			</BrowserRouter>
    </div>
  );
}

export default App;