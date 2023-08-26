import * as route from './pages'

type RouteType = {
	path: string,	
	element: React.FC
}

export const routesList: RouteType[] = [
	{ path: "/home", element: route.HomePage }, 
	{ path: "/dailyreport", element: route.DailyReportPage }, 
	{ path: "/inventory", element: route.InventoryPage }, 
	{ path: "*", element: route.ErrorPage }, 
]