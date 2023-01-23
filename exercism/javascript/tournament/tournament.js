//
// This is only a SKELETON file for the 'Tournament' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const firstLine = 'Team                           | MP |  W |  D |  L |  P';

const teamSort = ([name1, v1], [name2, v2]) => {
  if (v1.points === v2.points) {
    return name1 > name2 ? 1 : -1;
  }
  return v2.points - v1.points;
};

const makeTeam = () => {
  return {
    matches: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    points: 0,
  };
};

const resultHandlers = {
  win: (team1, team2) => {
    team1.wins++;
    team1.points += 3;
    team2.losses++;
  },
  draw: (team1, team2) => {
    team1.draws++;
    team1.points += 1;
    team2.draws++;
    team2.points += 1;
  },
  loss: (team1, team2) => resultHandlers.win(team2, team1),
};

const padValues = (obj) => {
  return Object.entries(obj).reduce((acc, [key, val]) => {
    return { ...acc, [key]: val.toString().padStart(2, ' ') };
  }, {});
};

export const tournamentTally = (results) => {
  if (results === '') {
    return firstLine;
  }

  const matches = results.split('\n');
  const teams = matches.reduce((teams, match) => {
    const [team1, team2, result] = match.split(';');
    if (!teams[team1]) {
      teams[team1] = makeTeam();
    }
    if (!teams[team2]) {
      teams[team2] = makeTeam();
    }

    teams[team1].matches++;
    teams[team2].matches++;

    resultHandlers[result](teams[team1], teams[team2]);
    return teams;
  }, {});

  return Object.entries(teams)
    .sort(teamSort)
    .reduce((acc, [name, scores]) => {
      const strScores = padValues(scores);
      return `${acc}${name.padEnd(30, ' ')} | ${strScores.matches} | ${
        strScores.wins
      } | ${strScores.draws} | ${strScores.losses} | ${strScores.points}\n`;
    }, `${firstLine}\n`)
    .slice(0, -1);
};
