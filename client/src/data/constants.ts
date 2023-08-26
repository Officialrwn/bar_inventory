const NavList = [
	{ name: 'Dashboard', path: '/dashboard' },
	{ name: 'Home', path: '/home' },
	{ name: 'Daily Report', path: '/dailyreport' },
	{ name: 'Calibration', path: '/calibration' },
	{ name: 'Inventory', path: '/inventory' },
	{ name: 'Sales Report', path: '/salesreport' },
	{ name: 'Settings', path: '/settings' }
];

const HomeComponentList = [
	'Product List',
	'Add Deliveries',
	'Order List',
	'Automatic Sales Report',
]

const tapInventory = {
	header: 'Tap',
	titles: [
		{ name: 'Item Name', unit: '' },
		{ name: 'Sale Size', unit: 'cl' },
		{ name: 'In Stock', unit: 'tap num' },
		{ name: 'Low Stock', unit: 'threshold qty' },
		{ name: 'Stock Order', unit: 'min. qty' },
		{ name: '-', unit: '' },
		{ name: 'Supplier', unit: '' },
		{ name: '-', unit: ''}
	],
	products: [
		[ 
			'AURA III',
			'50',
			'213214',
			'555',
			'555',
			'-',
			'Hartwall',
		],
		[ 
			'AURA III',
			'50',
			'213214',
			'555',
			'555',
			'-',
			'Hartwall',
		],
		[ 
			'AURA III',
			'50',
			'213214',
			'555',
			'555',
			'-',
			'Hartwall',
		],
		[ 
			'AURA III',
			'50',
			'213214',
			'555',
			'555',
			'-',
			'Hartwall',
		],
		[ 
			'AURA III',
			'50',
			'213214',
			'555',
			'555',
			'-',
			'Hartwall',
		],
		[ 
			'AURA III',
			'50',
			'213214',
			'555',
			'555',
			'-',
			'Hartwall',
		],
		[ 
			'Test11',
			'Test22',
			'Test33',
			'Test44',
			'Test55',
			'-',
			'PM Juoma',
		]
	],
	icons: {
		add: true,
		remove: true,
		modify: true,
		changeOrder: true,
	}
}

const bottleInventory = {
	header: 'Bottle',
	titles: [
		{ name: 'Item Name', unit: '' },
		{ name: 'Sale Size', unit: 'cl' },
		{ name: 'In Stock', unit: 'qty' },
		{ name: 'Low Stock', unit: 'threshold qty' },
		{ name: 'Stock Order', unit: 'min. qty' },
		{ name: '-', unit: '' },
		{ name: 'Supplier', unit: '' },
		{ name: '-', unit: ''}
	],
	products: [
		[ 
			'AURA III',
			'50',
			'213214',
			'555',
			'555',
			'-',
			'Hartwall',
		],
		[ 
			'AURA III',
			'50',
			'213214',
			'555',
			'555',
			'-',
			'Hartwall',
		],
		[ 
			'AURA III',
			'50',
			'213214',
			'555',
			'555',
			'-',
			'Hartwall',
		],
		[ 
			'AURA III',
			'50',
			'213214',
			'555',
			'555',
			'-',
			'Hartwall',
		],
		[ 
			'AURA III',
			'50',
			'213214',
			'555',
			'555',
			'-',
			'Hartwall',
		],
		[ 
			'AURA III',
			'50',
			'213214',
			'555',
			'555',
			'-',
			'Hartwall',
		],
		[ 
			'Test11',
			'Test22',
			'Test33',
			'Test44',
			'Test55',
			'-',
			'PM Juoma',
		]
	],
	icons: {
		add: true,
		remove: true,
		modify: true,
		changeOrder: true,
	}
}

const tapCalibration = {
	header: 'Tap',
	titles: [
		{ name: 'Item Name', unit: '' },
		{ name: 'Start', unit: 'tap num' },
		{ name: 'Current', unit: 'tap num' },
		{ name: '-', unit: '' },
		{ name: 'Difference', unit: 'qty' },
		{ name: 'New End', unit: 'tap num' },
		{ name: '-', unit: ''}
	],
	products: [
		[ 
			'AURA III',
			'50',
			'213214',
			'555',
			'555',
			'-',
			'Hartwall',
		],
		[ 
			'AURA III',
			'50',
			'213214',
			'555',
			'555',
			'-',
			'Hartwall',
		],
		[ 
			'AURA III',
			'50',
			'213214',
			'555',
			'555',
			'-',
			'Hartwall',
		],
		[ 
			'AURA III',
			'50',
			'213214',
			'555',
			'555',
			'-',
			'Hartwall',
		],
		[ 
			'AURA III',
			'50',
			'213214',
			'555',
			'555',
			'-',
			'Hartwall',
		],
		[ 
			'AURA III',
			'50',
			'213214',
			'555',
			'555',
			'-',
			'Hartwall',
		],
		[ 
			'Test11',
			'Test22',
			'Test33',
			'Test44',
			'Test55',
			'-',
			'PM Juoma',
		]
	],
	icons: {
		add: false,
		remove: false,
		modify: false,
		changeOrder: true,
	}
}

export {
	NavList,
	HomeComponentList,
	tapInventory,
	bottleInventory,
	tapCalibration
}