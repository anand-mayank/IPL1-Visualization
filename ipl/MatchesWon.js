function MatchesWon(matches){

    let matchesWon = {}
    for(let match of matches){
    let season = match.season;
    let winner = match.winner;
    if (winner) {
        if (!matchesWon[season])
            matchesWon[season] = {};
        if (!matchesWon[season][winner])
            matchesWon[season][winner] = 1;
        else
            matchesWon[season][winner]++;
        
    }
    }
return matchesWon
    
}
module.exports = MatchesWon;
