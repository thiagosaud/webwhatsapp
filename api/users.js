const database = [
	{
		id: '0f1f30df-aa71-4c49-bb5f-aa71c689a412',
		full_name: 'THIAGO DE BONIS',
		avatar: 'assets/images/users/thiago.jpg',
		isMain: true,
		isClicked: false,
	},
	{
		id: '0f1f30df-aa71-4c49-bb5f-aa71c689a432',
		full_name: 'THIAGO SAUD',
		avatar: 'assets/images/users/thiago.jpg',
		isMain: false,
		isClicked: true,
	},
	{
		id: '8r1f30df-aa71-4c49-bb5f-aa71c689g783',
		full_name: 'ET',
		avatar: 'assets/images/users/et.jpg',
		isMain: false,
		isClicked: false,
	},
	{
		id: '6df1f30df-aa75-4c49-bb5f-aa71c689d319',
		full_name: 'BABY YODA',
		avatar: 'assets/images/users/yoda.jpg',
		isMain: false,
		isClicked: false,
	},
	{
		id: '0df1f30df-aa75-4c49-bb5f-aa71c689a135',
		full_name: 'ELON MUSK',
		avatar: 'assets/images/users/elon.jpg',
		isMain: false,
		isClicked: false,
	},
	{
		id: 'cd7a7081-8d00-4156-98fb-ae0410532b37',
		full_name: 'BILL GATES',
		avatar: 'assets/images/users/bill.jpg',
		isMain: false,
		isClicked: false,
	},
	{
		id: 'aba7beca-0ffa-4057-8e45-fb65ea11d4a0',
		full_name: 'MARGARET HAMILTON',
		avatar: 'assets/images/users/margaret.jpg',
		isMain: false,
		isClicked: false,
	},
	{
		id: '75d5a93f-25a3-44b8-a00c-9ec540e7269d',
		full_name: 'STEVE JOBS',
		avatar: 'assets/images/users/steve.jpg',
		isMain: false,
		isClicked: false,
	},
	{
		id: 'd4918415-f2db-438a-9ecd-61cd504d626c',
		full_name: 'NIKOLA TESLA',
		avatar: 'assets/images/users/tesla.jpg',
		isMain: false,
		isClicked: false,
	},
	{
		id: 'd564173f-bd44-41c5-95a9-4c0f3088271b',
		full_name: 'LINUS TORVALDS',
		avatar: 'assets/images/users/linus.jpg',
		isMain: false,
		isClicked: false,
	},
	{
		id: '85afbbab-d675-49b0-bbfe-c7903018c65b',
		full_name: 'EDSGER DIJKSTRA',
		avatar: 'assets/images/users/dijkstra.jpg',
		isMain: false,
		isClicked: false,
	},
	{
		id: '758474b4-0ac4-46be-81a4-bf7f14a6b740',
		full_name: 'WARREN BUFFETT',
		avatar: 'assets/images/users/warren.jpg',
		isMain: false,
		isClicked: false,
	},
	{
		id: 'be1044ec-4e0b-4bab-86ac-87ca7dce7bc2',
		full_name: 'JACK MA',
		avatar: 'assets/images/users/jack.jpg',
		isMain: false,
		isClicked: false,
	},
	{
		id: 'cbfe2ee3-6a4d-4c00-9206-f59694e31c30',
		full_name: 'MARK ZUCKERBERG',
		avatar: 'assets/images/users/mark.jpg',
		isMain: false,
		isClicked: false,
	},
];

module.exports = (req, res) => {
	if (req.method !== 'GET' && req.method !== 'PATCH' && req.method !== 'PUT') {
		res.status(500).json({ error: 'This request method does not exist for this endpoint!' });
	}

	if (req.method === 'GET') {
		res.status(200).json(database);
	}

	if (req.method === 'PATCH') {
		const { id } = req.query;

		if (!id) {
			res.status(400).json({ error: 'The user id does not exist in the params!' });
		}

		const databaseDraft = database;
		const userIndex = database.findIndex(prop => prop.id === id);
		if (userIndex === -1) {
			res.status(400).json({ error: `'The user with the id: "${id}" does not exist!` });
		}

		databaseDraft[userIndex] = { ...databaseDraft[userIndex], ...req.body };
		res.status(200).json(databaseDraft[userIndex]);
	}
};
