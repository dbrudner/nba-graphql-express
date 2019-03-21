const { GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql");

// const Stat = new GraphQLObjectType({
// 	value: GraphQLString,
// 	rank: GraphQLString,
// });

// const Player = new GraphQLObjectType({
// 	name: "Player",
// 	fields: () => {
// 		return {
// 			name: {
// 				type: GraphQLString,
// 			},
// 			team: {
// 				type: GraphQLString,
// 			},
// 			age: {
// 				type: GraphQLString,
// 			},
// 			wins: {
// 				type: Stat,
// 			},
// 			losses: {
// 				type: Stat,
// 			},
// 			gamesPlayed: {
// 				type: Stat,
// 			},
// 			minutes: {
// 				type: Stat,
// 			},
// 			fieldGoalsMade: {
// 				type: Stat,
// 			},
// 			fieldGoalAttemps: {
// 				type: Stat,
// 			},
// 			fieldGoalPercentage: {
// 				type: Stat,
// 			},
// 			threePointMade: {
// 				type: Stat,
// 			},
// 			threePointAttempts: {
// 				type: Stat,
// 			},
// 			freeThrowPercentage: {
// 				type: Stat,
// 			},
// 			offensiveRebounds: {
// 				type: Stat,
// 			},
// 			defensiveRebounds: {
// 				type: Stat,
// 			},
// 			totalRebounds: {
// 				type: Stat,
// 			},
// 			assists: {
// 				type: Stat,
// 			},
// 			steals: {
// 				type: Stat,
// 			},
// 			blocks: {
// 				type: Stat,
// 			},
// 			turnovers: {
// 				type: Stat,
// 			},
// 			turnovers: {
// 				type: Stat,
// 			},
// 		};
// 	},
// });

const Player = new GraphQLObjectType({
	name: "Player",
	fields: () => {
		return {
			PLAYER_ID: {
				type: GraphQLString,
			},
			PLAYER_NAME: {
				type: GraphQLString,
			},
			TEAM_ID: {
				type: GraphQLString,
			},
			TEAM_ABBREVIATION: {
				type: GraphQLString,
			},
			AGE: {
				type: GraphQLString,
			},
			GP: {
				type: GraphQLString,
			},
			W: {
				type: GraphQLString,
			},
			L: {
				type: GraphQLString,
			},
			W_PCT: {
				type: GraphQLString,
			},
			MIN: {
				type: GraphQLString,
			},
			FGM: {
				type: GraphQLString,
			},
			FGA: {
				type: GraphQLString,
			},
			FG_PCT: {
				type: GraphQLString,
			},
			FG3M: {
				type: GraphQLString,
			},
			FG3A: {
				type: GraphQLString,
			},
			FG3_PCT: {
				type: GraphQLString,
			},
			FTM: {
				type: GraphQLString,
			},
			FTA: {
				type: GraphQLString,
			},
			FT_PCT: {
				type: GraphQLString,
			},
			OREB: {
				type: GraphQLString,
			},
			DREB: {
				type: GraphQLString,
			},
			REB: {
				type: GraphQLString,
			},
			AST: {
				type: GraphQLString,
			},
			TOV: {
				type: GraphQLString,
			},
			STL: {
				type: GraphQLString,
			},
			BLK: {
				type: GraphQLString,
			},
			BLKA: {
				type: GraphQLString,
			},
			PF: {
				type: GraphQLString,
			},
			PFD: {
				type: GraphQLString,
			},
			PTS: {
				type: GraphQLString,
			},
			PLUS_MINUS: {
				type: GraphQLString,
			},
			NBA_FANTASY_PTS: {
				type: GraphQLString,
			},
			DD2: {
				type: GraphQLString,
			},
			TD3: {
				type: GraphQLString,
			},
			GP_RANK: {
				type: GraphQLString,
			},
			W_RANK: {
				type: GraphQLString,
			},
			L_RANK: {
				type: GraphQLString,
			},
			W_PCT_RANK: {
				type: GraphQLString,
			},
			MIN_RANK: {
				type: GraphQLString,
			},
			FGM_RANK: {
				type: GraphQLString,
			},
			FGA_RANK: {
				type: GraphQLString,
			},
			FG_PCT_RANK: {
				type: GraphQLString,
			},
			FG3M_RANK: {
				type: GraphQLString,
			},
			FG3A_RANK: {
				type: GraphQLString,
			},
			FG3_PCT_RANK: {
				type: GraphQLString,
			},
			FTM_RANK: {
				type: GraphQLString,
			},
			FTA_RANK: {
				type: GraphQLString,
			},
			FT_PCT_RANK: {
				type: GraphQLString,
			},
			OREB_RANK: {
				type: GraphQLString,
			},
			DREB_RANK: {
				type: GraphQLString,
			},
			REB_RANK: {
				type: GraphQLString,
			},
			AST_RANK: {
				type: GraphQLString,
			},
			TOV_RANK: {
				type: GraphQLString,
			},
			STL_RANK: {
				type: GraphQLString,
			},
			BLK_RANK: {
				type: GraphQLString,
			},
			BLKA_RANK: {
				type: GraphQLString,
			},
			PF_RANK: {
				type: GraphQLString,
			},
			PFD_RANK: {
				type: GraphQLString,
			},
			PTS_RANK: {
				type: GraphQLString,
			},
			PLUS_MINUS_RANK: {
				type: GraphQLString,
			},
			NBA_FANTASY_PTS_RANK: {
				type: GraphQLString,
			},
			DD2_RANK: {
				type: GraphQLString,
			},
			TD3_RANK: {
				type: GraphQLString,
			},
			CFID: {
				type: GraphQLString,
			},
			CFPARAMS: {
				type: GraphQLString,
			},
		};
	},
});

module.exports = new GraphQLList(Player);
