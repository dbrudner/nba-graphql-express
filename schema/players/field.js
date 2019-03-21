const fetch = require("node-fetch");
const { GraphQLString } = require("graphql");
const Players = require("./schema");

module.exports = {
	type: Players,
	async resolve(parentValue, args) {
		const url =
			"https://stats.nba.com/stats/leaguedashplayerstats/?measureType=Base&perMode=PerGame&plusMinus=N&paceAdjust=N&rank=N&leagueId=00&season=2018-19&seasonType=Regular+Season&poRound=0&outcome=&location=&month=0&seasonSegment=&dateFrom=&dateTo=&opponentTeamId=0&vsConference=&vsDivision=&teamId=1610612744&conference=&division=&gameSegment=&period=0&shotClockRange=&lastNGames=0&gameScope=Last+10&playerExperience=&playerPosition=&starterBench=&draftYear=&draftPick=&college=&country=&height=&weight=";
		const res = await fetch(url, {
			headers: {
				Connection: "keep-alive",
				"User-Agent":
					"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36",
			},
		});
		const data = await res.json();

		const { headers, rowSet } = data.resultSets[0];

		const players = rowSet.map(player => {
			return headers.reduce((acc, header, i) => {
				return { ...acc, [header]: player[i] };
			}, {});
		});

		return players;
	},
};
