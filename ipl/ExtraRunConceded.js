function ExtraRunConceded(matches,deliveries) {
    let teamMatch = []
    for(let match of matches) {
            if(match.season === "2016")
                teamMatch.push(match)
    }  
  
    let teamDel = []
    for(let del of deliveries){
      for (let match of teamMatch){
        if(match.id == del["match_id"])
            teamDel.push(del)
      }
    } 
    
    let bowling_extra_runs = {}
    for(let del of teamDel){
      if(bowling_extra_runs.hasOwnProperty(del["bowling_team"]))
        bowling_extra_runs[del["bowling_team"]] += parseInt(del["extra_runs"])
      else
          bowling_extra_runs[del["bowling_team"]] = 0
    }
    return bowling_extra_runs;
  }
  
module.exports = ExtraRunConceded;
    