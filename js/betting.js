const game = {
 team1: 'REAL MADRID',
 team2: 'BARCELONA',
 players1: [
     'Courtois',
     'Vazquez',
     'Militao',
     'Nacho',
     'Mendy',
     'Casemiro',
     'Valverde',
     'Modrich',
     'Kroos',
     'Vinicius',
     'Benzema',
   ],
 players2: [
     'Stegen',
     'Mingueza',
     'Araujo',
     'Lenglet',
     'Dest',
     'Busquets',
     'Jong',
     'Alba',
     'Messi',
     'Pedri',
     'Dembele',
   ],
 score: '2:1',
 scored: ['Kroos', 'Benzema', 'Mingueza'],
 date: 'Apr 10th, 2021',
 odds: {
   team1: 1.48,
   draw: 2.53,
   team2: 4.25,
 },
};
const goalkeeper1 = game.players1[0];
const goalkeeper2 = game.players2[0];

const fieldPlayers1 = game.players1.slice(1);
const fieldPlayers2 = game.players2.slice(1);
const allPlayers = [...game.players1, ...game.players2];

const players1Total = [...game.players1, ...['Marcello', 'Isco', 'Asensio', 'Diaz', 'Odriozola']]

const team1 = game.odds.team1;
const team2 = game.odds.team2;

function printGoals (name1,name2,name3,name4,name5) {
    console.log(name1,name2,name3,name4,name5, 'total goals: ',arguments.length);
}
// console.log(goalkeeper1,goalkeeper2,fieldPlayers1,fieldPlayers2,allPlayers,players1Total,team1,  team2);
printGoals('Mingueza', 'Messi', 'Modrich', 'Nacho')


const condition = game.odds.team1 < game.odds.team2
console.log(condition);