onEvent('recipes', event => {
	event.shaped('angelring:itemdiamondring', ['DND', 'VEU', 'DAD'], {
		D: '#forge:storage_blocks/diamond',
		N: '#forge:storage_blocks/netherite',
		V: '#forge:storage_blocks/vibranium',
		U: '#forge:storage_blocks/unobtainium',
		A: '#forge:storage_blocks/allthemodium',
		E: '#forge:elytra'
	  }).id('kubejs:angelring/diamondring')
	  event.shaped('angelring:itemring', ['CAC', 'ARA', 'DGD'], {
		C: 'botania:pixie_dust',
		A: '#forge:storage_blocks/terrasteel',
		R: 'angelring:itemdiamondring',
		D: '#forge:nether_stars',
		G: 'botania:gaia_ingot'
	  }).id('kubejs:angelring/itemring')
	})

	onEvent('recipes', event => {
		event.remove({output: 'angelring:itemring'})
		event.remove({output: 'angelring:itemdiamondring'})
	  })