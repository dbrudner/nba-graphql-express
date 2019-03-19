// playerStats: {
// 	type: GraphQLObjectType,
// 	async resolve() {
// 		// const url =
// "https://infinite-cove-44078.herokuapp.com/stats?name=Kevin+Durant";
// const res = await fetch(url);
// const data = await res.json();
// console.log(data.League.Standard.Stats.latest.ppg);
// 		return {
// 			points: 5.3
// 		};
// 	}
// }
const {
	graphql,
	buildSchema,
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString
} = require("graphql");
const fetch = require("node-fetch");

const playerSchema = buildSchema(`
	type Query {
		points: Float
	}
`);

const Player = new GraphQLObjectType({
	name: "Player",
	fields: () => {
		return {
			name: {
				type: GraphQLString
			},
			points: {
				type: GraphQLString
			},
			assists: {
				type: GraphQLString
			},
			rebounds: {
				type: GraphQLString
			},
			steals: {
				type: GraphQLString
			},
			assists: {
				type: GraphQLString
			},
			blocks: {
				type: GraphQLString
			},
			minutes: {
				type: GraphQLString
			},
			fieldGoalPercentage: {
				type: GraphQLString
			},
			freeThrowPercentage: {
				type: GraphQLString
			}
		};
	}
});

module.exports = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: "RootQueryType",
		fields: {
			player: {
				type: Player,
				args: {
					name: {
						type: GraphQLString
					}
				},
				async resolve(parentValue, args) {
					const url = `https://infinite-cove-44078.herokuapp.com/stats?name=${
						args.name
					}`;
					const res = await fetch(url);
					const data = await res.json();
					console.log(data);

					const {
						apg,
						ppg,
						bpg,
						rpg,
						fgp,
						ftp,
						spg,
						mpg
					} = data.League.Standard.Stats.latest;
					console.log(data.League.Standard.Stats.latest);
					return {
						name: args.name,
						points: ppg,
						assists: apg,
						rebounds: rpg,
						steals: spg,
						blocks: bpg,
						minutes: mpg,
						fieldGoalPercentage: fgp,
						freeThrowPercentage: ftp
					};
				}
			}
		}
	})
});
