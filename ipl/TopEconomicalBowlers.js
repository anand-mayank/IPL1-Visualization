function TopEconomicalBowlers(matches,deliveries){
    let teamMatch = []
    for(let match of matches) {
        if(match.season === "2015")
            teamMatch.push(match.id)
    }
    let teamDel = []
    for(let del of deliveries){
        for (let match of teamMatch){
           if(match == del["match_id"])
              teamDel.push(del)
        }
    }
    
    let bowlerRun= {};
    for(let del of teamDel) {
        if(bowlerRun.hasOwnProperty(del["bowler"]))
            bowlerRun[del["bowler"]] += parseInt(del["total_runs"])
        else
            bowlerRun[del["bowler"]] = 1
    }
    
    let bowlerBalls = {};
    for(let del of teamDel) {
        if(bowlerBalls.hasOwnProperty(del["bowler"])){
            if(del["noball_runs"] == "0" && del["wide_runs"] == "0")
                 bowlerBalls[del["bowler"]] ++
                   
        } else 
            bowlerBalls[del["bowler"]] = 1
    }
    
    let arr = []
    for(let key1 in bowlerBalls){
        for(let key2 in bowlerRun) {
            if(key1 === key2) {
                let economicRate = ((bowlerRun[key2] / bowlerBalls[key1]) * 6).toFixed(2)
                let obj = {
                    rate: economicRate,
                    bowler: key2
                }
                arr.push(obj)
            }
        }
    }
     arr.sort((a,b)=> a.rate - b.rate)
     let topTenBowler = arr.splice(0,20)
    
     let economical_bowler = {}
     for(let player of topTenBowler) {
            economical_bowler[player["bowler"]] = parseFloat(player["rate"])
     }
     return economical_bowler;
    }
    module.exports = TopEconomicalBowlers;
    