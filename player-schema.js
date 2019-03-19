const { graphql, buildSchema } = require("graphql");

const playerSchema = buildSchema(`
	type Player {
		points: Float
	}

	type Query {
		player(name: String!): Player
	}
`);

module.exports = playerSchema;
