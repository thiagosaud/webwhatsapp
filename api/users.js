module.exports = (req, res) => {
	const fs = require('fs');
	const databaseFile = 'db-users.json';
	const databaseEnconding = 'utf-8';

	if (req.method !== 'GET' && req.method !== 'PATCH' && req.method !== 'PUT') {
		res.status(500).json({ error: 'This request method does not exist for this endpoint!' });
	}

	if (req.method === 'GET') {
		fs.readFile(databaseFile, databaseEnconding, (err, data) =>
			err ? res.status(500).json({ error: err }) : res.status(200).json(JSON.parse(data.toString()).users)
		);
	}

	if (req.method === 'PATCH') {
		const { id } = req.query;

		if (!id) {
			res.status(400).json({ error: 'The user id does not exist in the params!' });
		}

		fs.readFile(databaseFile, databaseEnconding, (err, data) => {
			if (err) {
				res.status(500).json({ error: err });
			}

			const usersDB = JSON.parse(data.toString()).users;
			const userIndex = usersDB.findIndex(prop => prop.id === id);

			if (userIndex === -1) {
				res.status(400).json({ error: `'The user with the id: "${id}" does not exist!` });
			}

			usersDB[userIndex] = {
				...req.body,
				...usersDB[userIndex],
			};

			fs.writeFile('db-users.json', JSON.stringify({ users: usersDB }, null, 2), err =>
				err ? res.status(500).json({ error: err }) : res.status(200).json(usersDB[userIndex])
			);
		});
	}

	if (req.method === 'PUT') {
		if (!req.body) {
			res.status(400).json({ error: 'e' });
		}

		fs.writeFile(databaseFile, JSON.stringify({ users: req.body }, null, 2), err =>
			err ? res.status(500).json({ error: err }) : res.status(200).json(req.body)
		);
	}
};
