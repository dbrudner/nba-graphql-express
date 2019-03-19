const { graphql, buildSchema } = require("graphql");

const playerSchema = buildSchema(`
	type Query {
		points: Float
	}
`);

module.exports = playerSchema;
