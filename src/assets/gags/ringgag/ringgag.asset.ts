import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Ring Gag',
	size: 'small',
	requireFreeHandsToUseDefault: true,
	graphics: 'graphics.json',
	colorization: {
		ring: {
			name: 'Ring',
			default: '#FFFFFF',
		},
		straps: {
			name: 'Straps',
			default: '#444444',
		},
	},
	preview: 'ring_preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Restraint_mouth',
			'Mouth_item',
			'Mouth_insert',
		],
		requires: [
			'Mouth_open_wide',
			'!Mouth_open_teeth',
			'!Mouth_cover',
		],
	},
	modules: {
		lock: {
			type: 'lockSlot',
			name: 'Lock',
			lockedProperties: {
				blockAddRemove: true,
			},
		},
		gagType: {
			type: 'typed',
			name: 'Gag Type',
			interactionType: ItemInteractionType.ADD_REMOVE,
			variants: [
				{
					id: 'standard',
					name: 'Standard',
					default: true,
				},
				{
					id: 'thigh',
					name: 'Harness',
				},
			],
		},
	},
	effects: {
		lipsTouch: 9,
		jawMove: 4,
		tongueRoof: 0,
		mouthBreath: 0,
		throatBreath: 0,
		coherency: 0,
		stimulus: 2,
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER strapped ITEM_ASSET_NAME tightly between TARGET_CHARACTER_DYNAMIC_POSSESSIVE teeth.',
		actionRemove: 'SOURCE_CHARACTER loosened and then removed ITEM_ASSET_NAME from TARGET_CHARACTER_DYNAMIC_POSSESSIVE mouth.',
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
