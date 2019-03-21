const fetch = require("node-fetch");
const { GraphQLString } = require("graphql");
const SinglePlayer = require("./schema");

module.exports = {
	type: SinglePlayer,
	args: {
		name: {
			type: GraphQLString,
		},
	},
	async resolve(parentValue, args) {
		const url = `https://infinite-cove-44078.herokuapp.com/stats?name=${
			args.name
		}`;
		const res = await fetch(url);
		const data = await res.json();

		const {
			apg,
			ppg,
			bpg,
			rpg,
			fgp,
			ftp,
			spg,
			mpg,
		} = data.League.Standard.Stats.latest;
		return {
			name: args.name,
			points: ppg,
			assists: apg,
			rebounds: rpg,
			steals: spg,
			blocks: bpg,
			minutes: mpg,
			fieldGoalPercentage: fgp,
			freeThrowPercentage: ftp,
		};
	},
};
