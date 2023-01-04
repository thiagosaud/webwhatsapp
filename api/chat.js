module.exports = (req, res) => {
	if (req.method !== 'GET' && req.method !== 'PATCH' && req.method !== 'PUT') {
		res.status(500).json({ error: 'This request method does not exist for this endpoint!' });
	}

	if (req.method === 'GET') {
		res.status(200).json([
			{
				id: '0f1f30df-aa71-4c49-bb5f-aa71c689a432',
				messages: [
					{
						id: '5f5da569-c5a4-4be2-8ad3-8f29058efcda',
						text: '😎 If you are seeing this message of mine, I thank you very much for your interest in seeing this prototype of my Whatsapp Web! If you wish, you can follow me too, on my linkedin, github: @thiagosaud and instagram: @thiagosaud.dev! 💖',
						time: '2020-06-16T18:06:00.000Z',
						isMain: false,
						isRead: false,
					},
				],
			},
			{
				id: '8r1f30df-aa71-4c49-bb5f-aa71c689g783',
				messages: [
					{
						id: '6c5da569-c5a4-4be2-8ad3-8f29058efe3k',
						text: 'If it is me, that being that lives alienly on a planet of the alienated, I can declare nothing more in my favor. 👽',
						time: '2020-06-16T18:06:00.000Z',
						isMain: false,
						isRead: false,
					},
				],
			},
			{
				id: '6df1f30df-aa75-4c49-bb5f-aa71c689d319',
				messages: [
					{
						id: '8d5da569-c5a4-4be2-8ad3-8f29058ef8d9',
						text: "When 900 years old you look so beautiful you won't",
						time: '2020-06-16T18:06:00.000Z',
						isMain: false,
						isRead: false,
					},
				],
			},
			{
				id: '0df1f30df-aa75-4c49-bb5f-aa71c689a135',
				messages: [
					{
						id: '3f5da569-c6a4-4be2-8ad3-8f29058efbea',
						text: 'You need reasons to get up in the morning and face life. Why do you want to live? What is the objective? What inspires you? What fascinates you most about tomorrow? If the future does not include being out there among the stars as a multi-planet species, it seems to me extremely depressing.',
						time: '2020-06-16T18:06:00.000Z',
						isMain: false,
						isRead: false,
					},
				],
			},
			{
				id: 'cd7a7081-8d00-4156-98fb-ae0410532b37',
				messages: [
					{
						id: '9f5da669-c6a4-4be2-8ad3-8f29058efbea',
						text: "Try once, twice, three times and if possible try the fourth, fifth and as many times as necessary.Just don't give up in the first few attempts, persistence is a friend of conquest. If you want to get to where the majority doesn't, do what the majority don't.",
						time: '2020-06-16T18:06:00.000Z',
						isMain: false,
						isRead: false,
					},
				],
			},
			{
				id: 'aba7beca-0ffa-4057-8e45-fb65ea11d4a0',
				messages: [
					{
						id: '8e19f8fe-d5b6-424a-a8bf-6b9538f5de49',
						text: "🚀🌑 I'm the programmer who put the rocket on the moon, how about you? What have you done for humanity?",
						time: '2020-06-16T18:16:00.000Z',
						isMain: false,
						isRead: false,
					},
				],
			},
			{
				id: '75d5a93f-25a3-44b8-a00c-9ec540e7269d',
				messages: [
					{
						id: 'de89e189-138f-4e3a-bb20-6124feceb576',
						text: 'To be successful, it is necessary to truly love what you do. Otherwise, taking into account only the rational side, you simply give up. This is what happens to most people.',
						time: '2020-06-16T18:46:00.000Z',
						isMain: false,
						isRead: false,
					},
				],
			},
			{
				id: 'd4918415-f2db-438a-9ecd-61cd504d626c',
				messages: [
					{
						id: '0388a61b-d361-47b3-aaa5-59363f51785d',
						text: 'Human development depends fundamentally on invention. It is the most important product of your creative brain. Its ultimate goal is the complete mastery of the mind over the material world and the use of the forces of nature in favor of human needs.',
						time: '2020-06-16T18:18:00.000Z',
						isMain: false,
						isRead: false,
					},
				],
			},
			{
				id: 'd564173f-bd44-41c5-95a9-4c0f3088271b',
				messages: [
					{
						id: 'ce980f6e-5b9c-4edb-b8ea-cd3d45f83fb8',
						text: 'Talking is easy, show me the code.',
						time: '2020-06-16T18:03:00.000Z',
						isMain: false,
						isRead: false,
					},
				],
			},
			{
				id: '85afbbab-d675-49b0-bbfe-c7903018c65b',
				messages: [
					{
						id: '08377c54-4843-48c1-9b48-28ab8d586a8d',
						text: 'Program testing can be a very effective way to demonstrate the presence of errors, but it is hopelessly insufficient to show its absence.',
						time: '2020-06-16T19:06:00.000Z',
						isMain: false,
						isRead: false,
					},
				],
			},
			{
				id: '758474b4-0ac4-46be-81a4-bf7f14a6b740',
				messages: [
					{
						id: '57bf6d07-7490-4c8f-bf30-57d954038e8d',
						text: "Most people are interested in actions when everyone is interested. The time to be interested is when no one else is interested. You don't make money buying what is popular.",
						time: '2020-06-16T18:05:00.000Z',
						isMain: false,
						isRead: false,
					},
				],
			},
			{
				id: 'be1044ec-4e0b-4bab-86ac-87ca7dce7bc2',
				messages: [
					{
						id: 'a1c563c3-1965-463f-bce5-fc01baf16c5a',
						text: "The world won't remember what you say, but it certainly won't forget what you did.",
						time: '2020-06-16T18:04:00.000Z',
						isMain: false,
						isRead: false,
					},
				],
			},
			{
				id: 'cbfe2ee3-6a4d-4c00-9206-f59694e31c30',
				messages: [
					{
						id: 'd9c2b42e-c6da-4de7-9aeb-0686b5685ed1',
						text: 'In a world where changes are taking place quickly, the only strategy that will guarantee failure is to not take risks.',
						time: '2020-06-16T18:01:00.000Z',
						isMain: false,
						isRead: false,
					},
				],
			},
		]);
	}

	if (req.method === 'PATCH') {
		const { id } = req.query;

		if (!id) {
			res.status(400).json({ error: 'The chat user id does not exist in the params!' });
		}

		const database = [
			{
				id: '0f1f30df-aa71-4c49-bb5f-aa71c689a432',
				messages: [
					{
						id: '5f5da569-c5a4-4be2-8ad3-8f29058efcda',
						text: '😎 If you are seeing this message of mine, I thank you very much for your interest in seeing this prototype of my Whatsapp Web! If you wish, you can follow me too, on my linkedin, github: @thiagosaud and instagram: @thiagosaud.dev! 💖',
						time: '2020-06-16T18:06:00.000Z',
						isMain: false,
						isRead: false,
					},
				],
			},
			{
				id: '8r1f30df-aa71-4c49-bb5f-aa71c689g783',
				messages: [
					{
						id: '6c5da569-c5a4-4be2-8ad3-8f29058efe3k',
						text: 'If it is me, that being that lives alienly on a planet of the alienated, I can declare nothing more in my favor. 👽',
						time: '2020-06-16T18:06:00.000Z',
						isMain: false,
						isRead: false,
					},
				],
			},
			{
				id: '6df1f30df-aa75-4c49-bb5f-aa71c689d319',
				messages: [
					{
						id: '8d5da569-c5a4-4be2-8ad3-8f29058ef8d9',
						text: "When 900 years old you look so beautiful you won't",
						time: '2020-06-16T18:06:00.000Z',
						isMain: false,
						isRead: false,
					},
				],
			},
			{
				id: '0df1f30df-aa75-4c49-bb5f-aa71c689a135',
				messages: [
					{
						id: '3f5da569-c6a4-4be2-8ad3-8f29058efbea',
						text: 'You need reasons to get up in the morning and face life. Why do you want to live? What is the objective? What inspires you? What fascinates you most about tomorrow? If the future does not include being out there among the stars as a multi-planet species, it seems to me extremely depressing.',
						time: '2020-06-16T18:06:00.000Z',
						isMain: false,
						isRead: false,
					},
				],
			},
			{
				id: 'cd7a7081-8d00-4156-98fb-ae0410532b37',
				messages: [
					{
						id: '9f5da669-c6a4-4be2-8ad3-8f29058efbea',
						text: "Try once, twice, three times and if possible try the fourth, fifth and as many times as necessary.Just don't give up in the first few attempts, persistence is a friend of conquest. If you want to get to where the majority doesn't, do what the majority don't.",
						time: '2020-06-16T18:06:00.000Z',
						isMain: false,
						isRead: false,
					},
				],
			},
			{
				id: 'aba7beca-0ffa-4057-8e45-fb65ea11d4a0',
				messages: [
					{
						id: '8e19f8fe-d5b6-424a-a8bf-6b9538f5de49',
						text: "🚀🌑 I'm the programmer who put the rocket on the moon, how about you? What have you done for humanity?",
						time: '2020-06-16T18:16:00.000Z',
						isMain: false,
						isRead: false,
					},
				],
			},
			{
				id: '75d5a93f-25a3-44b8-a00c-9ec540e7269d',
				messages: [
					{
						id: 'de89e189-138f-4e3a-bb20-6124feceb576',
						text: 'To be successful, it is necessary to truly love what you do. Otherwise, taking into account only the rational side, you simply give up. This is what happens to most people.',
						time: '2020-06-16T18:46:00.000Z',
						isMain: false,
						isRead: false,
					},
				],
			},
			{
				id: 'd4918415-f2db-438a-9ecd-61cd504d626c',
				messages: [
					{
						id: '0388a61b-d361-47b3-aaa5-59363f51785d',
						text: 'Human development depends fundamentally on invention. It is the most important product of your creative brain. Its ultimate goal is the complete mastery of the mind over the material world and the use of the forces of nature in favor of human needs.',
						time: '2020-06-16T18:18:00.000Z',
						isMain: false,
						isRead: false,
					},
				],
			},
			{
				id: 'd564173f-bd44-41c5-95a9-4c0f3088271b',
				messages: [
					{
						id: 'ce980f6e-5b9c-4edb-b8ea-cd3d45f83fb8',
						text: 'Talking is easy, show me the code.',
						time: '2020-06-16T18:03:00.000Z',
						isMain: false,
						isRead: false,
					},
				],
			},
			{
				id: '85afbbab-d675-49b0-bbfe-c7903018c65b',
				messages: [
					{
						id: '08377c54-4843-48c1-9b48-28ab8d586a8d',
						text: 'Program testing can be a very effective way to demonstrate the presence of errors, but it is hopelessly insufficient to show its absence.',
						time: '2020-06-16T19:06:00.000Z',
						isMain: false,
						isRead: false,
					},
				],
			},
			{
				id: '758474b4-0ac4-46be-81a4-bf7f14a6b740',
				messages: [
					{
						id: '57bf6d07-7490-4c8f-bf30-57d954038e8d',
						text: "Most people are interested in actions when everyone is interested. The time to be interested is when no one else is interested. You don't make money buying what is popular.",
						time: '2020-06-16T18:05:00.000Z',
						isMain: false,
						isRead: false,
					},
				],
			},
			{
				id: 'be1044ec-4e0b-4bab-86ac-87ca7dce7bc2',
				messages: [
					{
						id: 'a1c563c3-1965-463f-bce5-fc01baf16c5a',
						text: "The world won't remember what you say, but it certainly won't forget what you did.",
						time: '2020-06-16T18:04:00.000Z',
						isMain: false,
						isRead: false,
					},
				],
			},
			{
				id: 'cbfe2ee3-6a4d-4c00-9206-f59694e31c30',
				messages: [
					{
						id: 'd9c2b42e-c6da-4de7-9aeb-0686b5685ed1',
						text: 'In a world where changes are taking place quickly, the only strategy that will guarantee failure is to not take risks.',
						time: '2020-06-16T18:01:00.000Z',
						isMain: false,
						isRead: false,
					},
				],
			},
		];

		const chatIndex = database.findIndex(prop => prop.id === id);
		if (chatIndex === -1) {
			res.status(400).json({ error: `'The chat user with the id: "${id}" does not exist!` });
		}

		database[chatIndex].messages = [...req.body.messages];
		res.status(200).json(database[chatIndex]);
	}
};
