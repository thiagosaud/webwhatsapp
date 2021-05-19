module.exports = (req, res) => {
	const fs = require('fs');
	const databaseFile = 'db-chat.json';
	const databaseEnconding = 'utf-8';

	if (req.method !== 'GET' && req.method !== 'PATCH' && req.method !== 'PUT') {
		res.status(500).json({ error: 'This request method does not exist for this endpoint!' });
	}

	if (req.method === 'GET') {
		fs.readFile(databaseFile, databaseEnconding, (err, data) =>
			err ? res.status(500).json({ error: err }) : res.status(200).json(JSON.parse(data.toString()).chat)
		);
	}

	if (req.method === 'PATCH') {
		const { id } = req.query;

		if (!id) {
			res.status(400).json({ error: 'The chat user id does not exist in the params!' });
		}

		fs.readFile(databaseFile, databaseEnconding, (err, data) => {
			if (err) {
				res.status(500).json({ error: err });
			}

			const chatDB = JSON.parse(data.toString()).chat;
			const chatIndex = chatDB.findIndex(prop => prop.id === id);

			if (chatIndex === -1) {
				res.status(400).json({ error: `'The chat user with the id: "${id}" does not exist!` });
			}

			chatDB[chatIndex].messages = [...req.body.messages];

			fs.writeFile(databaseFile, JSON.stringify({ chat: chatDB }, null, 2), err =>
				err ? res.status(500).json({ error: err }) : res.status(200).json(chatDB[chatIndex])
			);
		});
	}

	if (req.method === 'PUT') {
		if (!req.body) {
			res.status(400).json({ error: 'e' });
		}

		fs.writeFile(databaseFile, JSON.stringify({ chat: req.body }, null, 2), err =>
			err ? res.status(500).json({ error: err }) : res.status(200).json(req.body)
		);
	}
};
