DefineAsset({
	name: 'Metal Chastity Cage',
	size: 'small',
	graphics: 'graphics.json',
	requireFreeHandsToUseDefault: false,
	colorization: {
		cage: {
			name: 'Cage',
			default: '#FFFFFF',
		},
	},
	preview: 'chcage_preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Chastity',
		],
		requires: ['Penis'],
	},
	modules: {
		lock: {
			type: 'lockSlot',
			name: 'Lock',
			lockedProperties: {
				blockAddRemove: true,
				blockModules: ['cage'],
			},
		},
		cage: {
			type: 'typed',
			name: 'Cage',
			variants: [
				{
					id: 'ring',
					name: 'Ring',
					default: true,
				},
				{
					id: 'matte',
					name: 'Matte Cage',
					properties: {
						attributes: {
							requires: ['Penis_flaccid'],
						},
					},
				},
				{
					id: 'chrome',
					name: 'Chrome Cage',
					properties: {
						attributes: {
							requires: ['Penis_flaccid'],
						},
					},
				},
			],
		},
	},
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
