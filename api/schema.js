import { gql } from 'apollo-server-express'

const typeDefs = gql`
	type Cat {
		id: Int
		name: String
		type: String
	}

	type Query {
		allCats: [Cat]
		cat(id: Int!): Cat
	}
	
	type Mutation {
		addCat (name: String!, type: String!): Cat
	}`

export default typeDefs