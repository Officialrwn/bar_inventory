import './styles/app.css';
import './fonts/Inria_Sans/InriaSans-Bold.ttf';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layouts from './pages/Layouts/Layouts';
import Home from './pages/Home/Home';
import DailyReport from './pages/Daily Report/DailyReport';
import Inventory from './pages/Inventory/Inventory';

const App = () => {
  return (
    <div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layouts/>}>
						<Route index element={<Home/>}/>
						<Route path="/dailyreport" element={<DailyReport/>}/>
						<Route path="/inventory" element={<Inventory/>}/>
						<Route path="*" element={<Home/>}/>
					</Route>
				</Routes>
			</BrowserRouter>
    </div>
  );
}

export default App;
