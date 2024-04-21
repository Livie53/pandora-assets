DefineRoomDeviceAsset({
	name: 'Large Cage',
	size: 'huge',
	colorization: {
		cage: {
			name: 'Cage',
			default: '#ffffff',
		},
		cage_door: {
			name: 'Cage door',
			default: '#ffffff',
		},
	},
	staticAttributes: ['Play_furniture'],
	preview: 'cage_preview.png',
	slots: {
		character_slot_left: {
			name: 'Inside the cage (left)',
			asset: {
				name: 'Large Cage',
				size: 'huge',
				poseLimits: {
					bones: {
						leg_r: [[-30, 10]],
						leg_l: [[-30, 10]],
						character_rotation: 0,
					},
					legs: 'kneeling',
				},
			},
		},
		character_slot_middle: {
			name: 'Inside the cage (middle)',
			asset: {
				name: 'Large Cage',
				size: 'huge',
				poseLimits: {
					bones: {
						leg_r: [[-30, 10]],
						leg_l: [[-30, 10]],
						character_rotation: 0,
					},
					legs: 'kneeling',
				},
			},
		},
		character_slot_right: {
			name: 'Inside the cage (right)',
			asset: {
				name: 'Large Cage',
				size: 'huge',
				poseLimits: {
					bones: {
						leg_r: [[-30, 10]],
						leg_l: [[-30, 10]],
						character_rotation: 0,
					},
					legs: 'kneeling',
				},
			},
		},
	},
	modules: {
		door: {
			type: 'typed',
			name: 'Door',
			variants: [
				{
					id: 'open',
					name: 'Open',
					default: true,
				},
				{
					id: 'closed',
					name: 'Closed',
					properties: {
						blockSlotsEnterLeave: [
							'character_slot_left',
							'character_slot_middle',
							'character_slot_right',
						],
					},
				},
			],
		},
		lock: {
			type: 'lockSlot',
			name: 'Door lock',
			lockedProperties: {
				blockModules: ['door'],
			},
		},
		storage: {
			type: 'storage',
			name: `Cage's floor`,
			maxAcceptedSize: 'large',
			maxCount: 5,
		},
	},
	pivot: {
		x: 950,
		y: 1330,
	},
	graphicsLayers: [
		{
			type: 'sprite',
			image: 'small_cage.png',
			colorizationKey: 'cage',
		},
		{
			type: 'slot',
			slot: 'character_slot_middle',
			characterPosition: {
				offsetX: 0,
				offsetY: -140,
				relativeScale: 0.96,
			},
			characterPositionOverrides: [
				{
					position: {
						offsetX: 0,
						offsetY: -210,
						relativeScale: 0.86,
					},
					condition: [
						[
							{ view: 'back' },
						],
					],
				},
			],
		},
		{
			type: 'slot',
			slot: 'character_slot_left',
			characterPosition: {
				offsetX: -180,
				offsetY: -80,
			},
			characterPositionOverrides: [
				{
					position: {
						offsetX: -180,
						offsetY: -190,
						relativeScale: 0.87,
					},
					condition: [
						[
							{ view: 'back' },
						],
					],
				},
			],
		},
		{
			type: 'slot',
			slot: 'character_slot_right',
			characterPosition: {
				offsetX: 180,
				offsetY: -80,
			},
			characterPositionOverrides: [
				{
					position: {
						offsetX: -180,
						offsetY: -190,
						relativeScale: 0.87,
					},
					condition: [
						[
							{ view: 'back' },
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: 'small_cage_door.png',
			imageOverrides: [
				{
					image: 'small_cage_dooropen.png',
					condition: [
						[
							{
								module: 'door',
								operator: '=',
								value: 'open',
							},
						],
					],
				},
			],
			colorizationKey: 'cage_door',
		},
	],
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'used 3D model',
				source: 'https://skfb.ly/o7vwW',
				copyrightHolder: 'Thunder',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'images',
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
