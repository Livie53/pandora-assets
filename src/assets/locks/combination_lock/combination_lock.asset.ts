DefineLockAsset({
	name: 'Combination Lock',
	assetPreferenceDefault: 'prevent',
	chat: {
		chatDescriptor: 'a combination lock',
		actionLock: 'SOURCE_CHARACTER clicked the combination lock on ITEM_CONTAINER_SIMPLE_DYNAMIC shut.',
		actionUnlock: 'SOURCE_CHARACTER unlocked the combination lock on ITEM_CONTAINER_SIMPLE_DYNAMIC.',
	},
	password: {
		length: 4,
		format: 'numeric',
	},
	ownership: {
		responsibleContributor: 'Sekkmer <sekkmer@gmail.com>',
		credits: ['Sekkmer'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Free to use',
		licensing: [],
	},
});
