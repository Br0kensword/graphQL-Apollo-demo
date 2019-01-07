const defaultData = [
	{
		id: 1,
		name: 'Wee Beasty Roosevelt',
		type: 'Agouti'
	},
	{
		id: 2,
		name: 'Robert Thibeau',
		type: 'Bobcat'
	}
]

let nextId = 3

const resolvers = {
	Query: {

		allCats: () => {
			return defaultData
		},

		cat: (root, { id }) => {
			return defaultData.filter(cat => { return (cat.id === id) })[0]
		}
	},
	Mutation: {
		addCat: (root, args) => {
			const newCat = { id: nextId++, name: args.name, type: args.type }
			defaultData.push(newCat)
			return newCat
		}
	}
}

export default resolvers