import express from 'express'
import { ApolloServer } from 'apollo-server-express'

import typeDefs from './api/schema'
import resolvers from './api/resolvers'

const app = express()
const PORT = 4000
const SERVER = new ApolloServer({
	typeDefs,
	resolvers
})

SERVER.applyMiddleware({ app })


app.listen( PORT , () =>
		console.log(`Cat server at http://localhost:4000/graphql`)
	)