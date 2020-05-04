const fs = require("fs");
const csv = require("csvtojson");

const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const MatchesWon = require("./ipl/MatchesWon");
const ExtraRunsConceded = require("./ipl/ExtraRunConceded");
const TopEconomicalBowlers = require("./ipl/TopEconomicalBowlers");
const StrikeRate = require("./ipl/StrikeRate");

const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";

const JSON_OUTPUT_FILE_PATH1 = "./public/data1.json";
const JSON_OUTPUT_FILE_PATH2 = "./public/data2.json";
const JSON_OUTPUT_FILE_PATH3 = "./public/data3.json";
const JSON_OUTPUT_FILE_PATH4 = "./public/data4.json";
const JSON_OUTPUT_FILE_PATH5 = "./public/data5.json";

function main() {
  
  //1st problem - Total Number of Matches Played each Year

  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      let result1 = matchesPlayedPerYear(matches);
      saveMatchesPlayedPerYear(result1);
    });

    //2nd Problem - No.of Matches Won by Each Team over all the years

    csv()
    .fromFile(MATCHES_FILE_PATH) 
    .then(matches => {
      let result2 = MatchesWon(matches);
      saveMatchesWonByEachTeam(result2);
    }); 

  //3rd Problem - Extra Runs Conceded by Each Team in 2016
   
    csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
       csv()
       .fromFile(DELIVERIES_FILE_PATH)
       .then(deliveries =>{
       let result3 = ExtraRunsConceded(matches,deliveries);   
       saveExtraRuns(result3);
       });          
    });

   //4th Problem - Top 10 economical Bowlers in 2015
   
    csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      csv()
      .fromFile(DELIVERIES_FILE_PATH)
      .then(deliveries => {
      let result4 = TopEconomicalBowlers(matches,deliveries);
      saveEconomicalBowlers(result4);
      });
    }); 

//5th Problem - Story for the Strike Rate of Batsman in 2017

    csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      csv()
        .fromFile(DELIVERIES_FILE_PATH)
        .then(deliveries => {
          let result5 = StrikeRate(matches,deliveries);
          saveStory(result5);
        })
    })

}

  //1st problem - Total Number of Matches Played each Year
  
  //function 

function saveMatchesPlayedPerYear(result1) {
  const jsonData1 = {
    matchesPlayedPerYear: result1
  };
  const jsonString1 = JSON.stringify(jsonData1);
  fs.writeFile(JSON_OUTPUT_FILE_PATH1, jsonString1, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}

//2nd Problem - No.of Matches Won by Each Team over all the years

    //function

    function saveMatchesWonByEachTeam(result2) {
      const jsonData2 = {
        MatchesWon: result2
      };
      const jsonString2 = JSON.stringify(jsonData2);
      fs.writeFile(JSON_OUTPUT_FILE_PATH2, jsonString2, "utf8", err => {
        if (err) {
          console.error(err);
        }
      });
    }
    

  //3rd Problem - Extra Runs Conceded by Each Team in 2016
  
  //function
  function saveExtraRuns(result3) {
    const jsonData3 = {
      ExtraRunConceded: result3
    };
    const jsonString3 = JSON.stringify(jsonData3);
    fs.writeFile(JSON_OUTPUT_FILE_PATH3, jsonString3, "utf8", err => {
      if (err) {
        console.error(err);
      }
    });
  }
  

   //4th Problem - Top 10 economical Bowlers in 2015
   
  //function
function saveEconomicalBowlers(result4) {
  const jsonData4 = {
    TopEconomicalBowlers: result4
  };
  const jsonString4 = JSON.stringify(jsonData4);
  fs.writeFile(JSON_OUTPUT_FILE_PATH4, jsonString4, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}

//5th Problem - Story for the Strike Rate of Batsman in 2017

//function
function saveStory(result5) {
  const jsonData5 = {
    StrikeRate: result5
  };
  const jsonString5 = JSON.stringify(jsonData5);
  fs.writeFile(JSON_OUTPUT_FILE_PATH5, jsonString5, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}

main();
