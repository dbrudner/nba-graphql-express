const {
	graphql,
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
} = require("graphql");
const playerSchema = require("./player-schema");
const fetch = require("node-fetch");

module.exports = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: "RootQueryType",
		fields: {
			hello: {
				type: GraphQLString,
				resolve() {
					return "world";
				},
			},
			playerStats: {
				type: playerSchema,
				async resolve() {
					const url =
						"https://infinite-cove-44078.herokuapp.com/stats?name=Kevin+Durant";
					const res = await fetch(url);
					const data = await res.json();
					console.log(data.League.Standard.Stats.latest.ppg);
					return {
						points: 5.3,
					};
				},
			},
		},
	}),
});
