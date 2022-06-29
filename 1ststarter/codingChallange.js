"use strict"

console.log('//// coding challange  ////')

const game ={
    team1: 'Bayern Munich',
    team2: 'Borrissia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',

        ],
        [
            'Burki',
            'Schul',
            'Hummels',
            'Akanji',
            'Hakins',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',

        ],
    ],
    score: '4:0',
    scored:['Lewandowski','Gnarby','Lewandowski','Hummels'],
    date: 'Nov 9th,2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};
//task 1
const [player1,player2]=game.players;
console.log(player1,player2)
//task 2
const[[gk,...fieldPlayers],[bgk,...bFieldPlayers]]=game.players;
console.log(gk,fieldPlayers,bgk,bFieldPlayers);
//task3
const palyersAll=[...player1,...player2];
console.log(palyersAll)
//task4

const finalPlayer = [...player1,'thaigo','Coutinho','Perisic']
console.log(finalPlayer)

const {team1: team1,x:draw,team2:team2} = game.odds;
console.log(team1,draw,team2);

const printGoals =function(...players){
    console.log(players)
console.log(`${players.length} goals were score`)
} 

printGoals('Davies','Muller','Lewandowski','Kimmich');
printGoals('Davis','Muller');
printGoals(...game.scored);

team1<team2 && console.log('team1 is more likely to win ');
team1>team2 && console.log('team2 is more likely to  win');


//coding 2

for(const [i,el] of game.scored.entries()){
    console.log(`Goal ${i+1}: ${el}`);

}
let avg =0
let odds=Object.values(game.odds);
for(const odd of odds){
    avg+=odd;

}
    avg /= odds.length;
    console.log(avg);
    const {team1:BayernMunich,x:draww,team2:BorrissiaDortmund} = game.odds;
    for(const [team,odd] of Object.entries(game.odds)){
        const teamStr = team ==='x'?'draw':`victory ${game[team]}`
        console.log(`odds of ${teamStr} ${odd}`)
    }

    const scores={};
     
    for(const player of game.scored ){
        scores[player] ? scores[player]++:(scores[player]=1)
        
    }
    console.log(scores)
///// coding 3
    const gameEvents = new Map([
        [17, '⚽ GOAL'],
        [36, '🔁 Substitution'],
        [47, '⚽ GOAL'],
        [61, '🔁 Substitution'],
        [64, '🔶 Yellow card'],
        [69, '🔴 Red card'],
        [70, '🔁 Substitution'],
        [72, '🔁 Substitution'],
        [76, '⚽ GOAL'],
        [80, '⚽ GOAL'],
        [92, '🔶 Yellow card'],
        ]);

        // const eventSet = new Set(gameEvents.values())
        // console.log(eventSet)

        const event =[...new Set(gameEvents.values())]
        console.log(event)

        gameEvents.delete(64);
        console.log(gameEvents);

        console.log(`An event happend on average ,every ${90/gameEvents.size} minutes`)
        // const ge =gameEvents.keys()

        for(const [time,el] of gameEvents.entries()){
            const outPut = time<45?console.log(`[First Half] ${time}:${el}`):console.log(`[Second Half] ${time}:${el}`)
        }

   ///coding  4

   document.body.append(document.createElement('textarea'));
   document.body.append(document.createElement('button'));

let btn = document.querySelector('button')

   

   btn.addEventListener('click',function(){
    let text =document.querySelector('textarea').value;
    const rows = text.split('\n');
    let l= [];

    //console.log(rows)

    for(let row of   rows){
        //console.log(row)
        //const i = row.lastIndexOf('_')
        //console.log(i)
        // let t= row.split('_').join('').toLowerCase();
        // console.log(t)
        // let it=t.lastIndexOf(t[i])
        // console.log(it)

        // l.push(t.replace(t[it],t[it].toUpperCase()))

    //     let [first,second]= row.toLowerCase().trim().split('_');
    //    let t= [first,second.replace(second[0],second[0].toUpperCase())]
    //    console.log(`${t.join('').padEnd(20)}${'✔'.repeat(i+1)}`)
    let t=[];
    let t1=[];
    let text2 = function(first,second){
        if(first[0].toUpperCase()!==first[0]){
            for(let i=0; i<first.length;i++){
                   
                      if(i%2==0){
                        t.push(first.charAt(i).toUpperCase())
                      }
                      else{
                        t.push(first.charAt(i))
                      }
                    }
                       
                        //row+=2;
        
                    
                    for(let i=0; i<second.length;i++){
              
                        if(i%2==0){
                          t1.push(second.charAt(i).toUpperCase())
                        }
                        else{
                          t1.push(second.charAt(i))
                        }
        
                
                    
                }
    
                first=t.join('')
                second=t1.join('')
                let final = [first,second];
                console.log(final.join(' '))
            }
            else if(first[0].toUpperCase()===first[0]){
                for(let i=0; i<first.length;i++){
                   
                    if(i%2==0){
                      t.push(first.charAt(i).toLowerCase())
                    }
                    else{
                      t.push(first.charAt(i).toUpperCase())
                    }
                  }
                     
                      //row+=2;
      
                  
                  for(let i=0; i<second.length;i++){
            
                      if(i%2==0){
                        t1.push(second.charAt(i).toLowerCase())
                      }
                      else{
                        t1.push(second.charAt(i).toUpperCase())
                      }
              
                  
              }
    
              first=t.join('')
              second=t1.join('')
              let final = [first,second];
              console.log(final.join('_'))
            }
    }
    if(row.includes('_')){
        var[first,second]=row.split('_');
        text2(first,second);

    }
    else if(row.includes(' ')){
        [first,second]=row.split(' ');
        text2(first,second);
    }
    else{
        let first=row
        if(first[0].toUpperCase()!==first[0]){
            for(let i=0; i<first.length;i++){
                   
                      if(i%2==0){
                        t.push(first.charAt(i).toUpperCase())
                      }
                      else{
                        t.push(first.charAt(i))
                      }
                    }
                    first=t.join('')
                    console.log(first);
                }
                else if(first[0].toUpperCase()===first[0]){
                    for(let i=0; i<first.length;i++){
                       
                        if(i%2==0){
                          t.push(first.charAt(i).toLowerCase())
                        }
                        else{
                          t.push(first.charAt(i).toUpperCase())
                        }
                      }
                      first=t.join('')
                      console.log(first);
                }   
    }
    }
     //console.log(l)   
    //console.log(text);
   })