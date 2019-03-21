const { GraphQLSchema, GraphQLObjectType } = require("graphql");
const Players = require("./players/field");
const Player = require("./player/field");

module.exports = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: "RootQueryType",
		fields: {
			players: Players,
			player: Player,
		},
	}),
});
