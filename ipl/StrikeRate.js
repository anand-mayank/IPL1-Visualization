function StrikeRate(matches, deliveries){
    let matchId=[]
    for(let match of matches){
        if(match.season==="2017"){
            matchId.push(match.id)
        }
    }
     let batsmanRun={}
     let batsmanBall={}
    for(let i of deliveries){
        if(matchId.includes(i.match_id)){ 
            if(!batsmanRun.hasOwnProperty(i.batsman))
                batsmanRun[i.batsman]=Number(i.batsman_runs)
            else
                batsmanRun[i.batsman]+=Number(i.batsman_runs)
            if(!batsmanBall.hasOwnProperty(i.batsman))
                batsmanBall[i.batsman]=1
            else
                batsmanBall[i.batsman]+=1
        }
    } 
    var res=[]
    var arr=[]
    for(let i in batsmanRun){
        arr.push([i,Number(Number.parseFloat((batsmanRun[i]/batsmanBall[i])*100).toFixed(2))])
    }
    arr.sort((a,b)=>{return b[1]-a[1]})
    for(let i=0; i<10; i++){
        res.push(arr[i])
    }
    return res
}

module.exports=StrikeRate;