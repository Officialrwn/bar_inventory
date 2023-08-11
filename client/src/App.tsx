import './styles/app.css';
import './fonts/Inria_Sans/InriaSans-Bold.ttf';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutPage from './pages/LayoutPage/LayoutPage';
import HomePage from './pages/HomePage/HomePage';
import DailyReportPage from './pages/DailyReportPage/DailyReportPage';
import InventoryPage from './pages/InventoryPage/InventoryPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const App = () => {
  return (
    <div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LayoutPage/>}>
						<Route index element={<HomePage/>}/>
						<Route path="/dailyreport" element={<DailyReportPage/>}/>
						<Route path="/inventory" element={<InventoryPage/>}/>
						<Route path="*" element={<ErrorPage/>}/>
					</Route>
				</Routes>
			</BrowserRouter>
    </div>
  );
}

export default App;