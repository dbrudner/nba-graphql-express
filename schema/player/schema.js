const { GraphQLObjectType, GraphQLString } = require("graphql");

module.exports = new GraphQLObjectType({
	name: "SinglePlayer",
	fields: () => {
		return {
			name: {
				type: GraphQLString,
			},
			points: {
				type: GraphQLString,
			},
			assists: {
				type: GraphQLString,
			},
			rebounds: {
				type: GraphQLString,
			},
			steals: {
				type: GraphQLString,
			},
			assists: {
				type: GraphQLString,
			},
			blocks: {
				type: GraphQLString,
			},
			minutes: {
				type: GraphQLString,
			},
			fieldGoalPercentage: {
				type: GraphQLString,
			},
			freeThrowPercentage: {
				type: GraphQLString,
			},
		};
	},
});
