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
    let t=[]
   
    let j=-1;

    //console.log(rows)

    for(let row of   rows){
      let r=row.split('')
     let id=row.indexOf(' ');
      let id1;
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
<<<<<<< HEAD
    // let t=[];
    // let t1=[];
    // let text2 = function(first,second){
    //     if(first[0].toUpperCase()!==first[0]){
    //         for(let i=0; i<first.length;i++){
                   
    //                   if(i%2==0){
    //                     t.push(first.charAt(i).toUpperCase())
    //                   }
    //                   else{
    //                     t.push(first.charAt(i))
    //                   }
    //                 }
                       
    //                     //row+=2;
        
                    
    //                 for(let i=0; i<second.length;i++){
              
    //                     if(i%2==0){
    //                       t1.push(second.charAt(i).toUpperCase())
    //                     }
    //                     else{
    //                       t1.push(second.charAt(i))
    //                     }
        
                
                    
    //             }
    
    //             first=t.join('')
    //             second=t1.join('')
    //             let final = [first,second];
    //             console.log(final.join(' '))
    //         }
    //         else if(first[0].toUpperCase()===first[0]){
    //             for(let i=0; i<first.length;i++){
                   
    //                 if(i%2==0){
    //                   t.push(first.charAt(i).toLowerCase())
    //                 }
    //                 else{
    //                   t.push(first.charAt(i).toUpperCase())
    //                 }
    //               }
                     
    //                   //row+=2;
      
                  
    //               for(let i=0; i<second.length;i++){
            
    //                   if(i%2==0){
    //                     t1.push(second.charAt(i).toLowerCase())
    //                   }
    //                   else{
    //                     t1.push(second.charAt(i).toUpperCase())
    //                   }
              
                  
    //           }
    
    //           first=t.join('')
    //           second=t1.join('')
    //           let final = [first,second];
    //           console.log(final.join('_'))
    //         }
    
      let final;
      l=row.split('');
      let it = l.lastIndexOf(' ');
      let it1 = l.lastIndexOf('_')
      for(let i=0;i<l.length;i++){
        //j++;
        if((i!==it && i!==it1) && (i<it && i<it1)){
          if(l[0].toUpperCase()===l[0]){
            if(i%2==0){
              t.push(l[i].toLowerCase())
            }
            else{
              t.push(l[i].toUpperCase());
            }
          }
          else{
            if(i%2==0){
              t.push(l[i].toUpperCase())
            }
            else{
              t.push(l[i])
            }
          }
        }
        else if(l[i]===' ' || l[i]==='_'){
          if(i=== it){
            t.push('_')
          }
          else{
            t.push(' ');
          }
        }
        else{
          if(i==(it+1)||i==(it1+1)){
            j=-1;
          }
          j++;
          if(it<=i && it1>=i){
          if(l[it+1].toUpperCase()===l[it+1]){

            if(j%2==0){
              t.push(l[i].toLowerCase())
            }
            else{
              t.push(l[i].toUpperCase());
            }
          }
          else{
            if(j%2==0){
              t.push(l[i].toUpperCase())
            }
            else{
              t.push(l[i])
            }
          }
          }
          else if(it1<=i){
            if(l[it1+1].toUpperCase()===l[it1+1]){
              if(j%2==0){
                t.push(l[i].toLowerCase())
              }
              else{
                t.push(l[i].toUpperCase());
              }

            }
            else{
              if(j%2==0){
                t.push(l[i].toUpperCase())
              }
              else{
                t.push(l[i])
              }
            }

          }
        }
      }
      final=t.join('')
      for(let c=t.length; c>=0;c--){
        t.pop();
      }

      console.log(final)
    }
     //console.log(l)   
    //console.log(text);
   })
=======
    let t=[];
    let t1=[];
    let k=0;
    let final;
    let f;
    let text2 = function(...l){
      
        for(let j=0; j<l.length;j++){
          if(l[j].charAt(0).toUpperCase()!==l[j].charAt(0)){
            for(let i=0; i<l[j].length;i++){
                   
                      if(i%2==0){
                        t.push(l[j].charAt(i).toUpperCase())
                      }
                      else {
                        t.push(l[j].charAt(i))

                        }
                        
                      } 
                      k++;
                      if(r.lastIndexOf(' ')==t.length){
                        t.push('_');
                       }
                       else{
                        t.push(' ')
                       }
                      t1[j]=t.join('')
                      
                     
                      if(k++){
                        for(let c=t.length; c>=0;c--) {
                          t.pop()
                          //d=t.length
                        } 
                      }

                    }

                   
     
            
          else if(l[j].charAt(0).toUpperCase()===l[j].charAt(0)){
                  for(let i=0; i<l[j].length;i++){
                     
                      if(i%2==0){
                        t.push(l[j].charAt(i).toLowerCase())
                      }
                      else{
                        t.push(l[j].charAt(i).toUpperCase())
                      }
                    }     
                 
                 k++;
                 if(r.lastIndexOf(' ')==t.length){
                  t.push('_');
                 }
                 else{
                  t.push(' ')
                 }
                 t1[j]=t.join('')
                
                 if(k++){
                   for(let c=t.length; c>=0;c--) {
                     t.pop()
                     //d=t.length
                   } 

                 }
            }
        }
        final = t1.join('');

        let len1= final.length;

        // for(let z=0;z<=len1;z++){//rishit klayani r
        //   if(row.charAt(z)==='_'){
        //     f= final.replace(final.charAt(z),' ');
        //     //console.log(final.charAt(z));
        //   }
        //   else if(row.charAt(z)===' '){
        //     f=final.replace(final.charAt(z),'_');
        //     // console.log(final.replace(final.charAt(z),'_'));
        //     // console.log(final.charAt(z));
        //   }
        //   else {
        //     continue;
        //   //  f= final.replace(' ',' ');
        //   }

        // }

        
        console.log(final)
      }         
    
    if(row.includes('_' )){
        l=row.split(/[_ \s ]+/);
        text2(...l);

    }
    else if(row.includes(' ')){
        l=row.split(" ");
        text2(...l);
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
    
 })
>>>>>>> 8c5c849375dedb631de4052f6c31c24c9344f18f
