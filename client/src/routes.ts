import * as route from './pages'

type RouteType = {
	path: string,	
	element: React.FC
}

export const routesList: RouteType[] = [
	{ path: "/home", element: route.HomePage }, 
	{ path: "/dailyreport", element: route.DailyReportPage }, 
	{ path: "/inventory", element: route.InventoryPage }, 
	{ path: "/calibration", element: route.CalibrationPage }, 
	{ path: "/salesreport", element: route.ErrorPage }, 
	{ path: "/dashboard", element: route.ErrorPage }, 
	{ path: "/settings", element: route.ErrorPage }, 
	{ path: "*", element: route.ErrorPage }, 
]