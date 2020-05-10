function fetchAndVisualizeData1() {
  fetch("./data1.json")
    .then(r => r.json())
    .then(visualizeData1);
}
fetchAndVisualizeData1();

function fetchAndVisualizeData2() {
  fetch("./data2.json")
    .then(r => r.json())
    .then(visualizeData2)
}
fetchAndVisualizeData2();

function fetchAndVisualizeData3() {
  fetch("./data3.json")
    .then(r => r.json())
    .then(visualizeData3)
  }
fetchAndVisualizeData3();

function fetchAndVisualizeData4() {
    fetch("./data4.json")
      .then(r => r.json())
      .then(visualizeData4)
 }
fetchAndVisualizeData4();

function fetchAndVisualizeData5() {
  fetch("./data5.json")
    .then(r => r.json())
    .then(visualizeData5)
}
fetchAndVisualizeData5();


function visualizeData1(data) {
  visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);
  return;
}

function visualizeData2(data) {
  visualizeMatchesWonByEachTeam(data.MatchesWon);
  return;
}

function visualizeData3(data) {
  visualizeExtraRuns(data.ExtraRunConceded);
  return;
}

function visualizeData4(data) {
  visualizeEconomicalBowlers(data.TopEconomicalBowlers);
  return;
}

function visualizeData5(data) {
  visualizeStory(data.StrikeRate);
  return;
}

  //1st problem - Total Number of Matches Played each Year

function visualizeMatchesPlayedPerYear(matchesPlayedPerYear) {
  const seriesData = [];
  for (let year in matchesPlayedPerYear) {
    seriesData.push([year, matchesPlayedPerYear[year]]);
  }

  Highcharts.chart("matches-played-per-year", {
    chart: {
      type: "column"
    },
    title: {
      text: "Matches Played Per Year"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches"
      }
    },
    series: [
      {
        name: "Years",
        data: seriesData
      }
    ]
  });
}

//2nd Problem - No.of Matches Won by Each Team over all the years

function visualizeMatchesWonByEachTeam(MatchesWon) {
  let years = [];
  let allTeam = [];
  for (let key in MatchesWon) {
      years.push(key)
      for (nameOfTeam in MatchesWon[key]) {
          if (!allTeam.includes(nameOfTeam)) {
              allTeam.push(nameOfTeam);
          }
      }
  }
  let seriesData = [];
  for (let j in allTeam) {
      let arr = [];
      for (let i in years) {
          if (MatchesWon[years[i]].hasOwnProperty(allTeam[j])) {
              arr.push(MatchesWon[years[i]][allTeam[j]]);
          }
          else {
              arr.push(0);
          }
      }
      let obj = {
          'name': allTeam[j],
          'data': arr
      }
      seriesData.push(obj);
  }
  
    Highcharts.chart('matches-won-by-each-team', {
      chart: {
          type: 'column'
      },
      title: {
          text: '2: Matches Won By Each Team in all IPL'
      },
      subtitle: {
          text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
      },
      xAxis: {
          categories: 
            years,
          crosshair: true
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Matches Won'
          }
      },
      tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
      },
      plotOptions: {
          column: {
              pointPadding: 0.2,
              borderWidth: 0
          }
      },
      series: seriesData
    });
  }

//3rd Problem- Extra Runs Conceded by Each Team in 2016(Third Problem)

function visualizeExtraRuns(ExtraRunConceded) {
  const seriesData = [];
  for (let team in ExtraRunConceded) {
    seriesData.push([team, ExtraRunConceded[team]]);
  }

  Highcharts.chart("extra-runs-conceded", {
    chart: {
      type: "column"
    },
    title: {
      text: "3. Extra Runs Conceded"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Extra Runs"
      }
    },
    series: [
      {
        data: seriesData
      }
    ]
  });
}

//Top 10 economical Bowlers(Fourth Problem)

function visualizeEconomicalBowlers(TopEconomicalBowlers) {
  const seriesData = [];
  for (let economical in TopEconomicalBowlers) {
    seriesData.push([economical,TopEconomicalBowlers[economical]]);
  }

  Highcharts.chart("economical-bowlers", {
    chart: {
      type: "column"
    },
    title: {
      text: "4. Top 20 Economical Bowlers"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Economy"
      }
    },
    series: [
      {
        data: seriesData
      }
    ]
  });
}

//Story(Fifth Problem) i.e, Strike Rate of Batsman in 2017

function visualizeStory(StrikeRate) {
  const seriesData = [];
  for (let team of StrikeRate) {
    seriesData.push(team)
  }

Highcharts.chart('StrikeRate', {
  chart: {
      type: 'column'
  },
  title: {
      text: 'Strike Rate of Batsman in year 2017'
  },
  subtitle: {
      text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
  },
  xAxis: {
      type: 'category',
      labels: {
          rotation: -45,
          style: {
              fontSize: '13px',
              fontFamily: 'Verdana, sans-serif'
          }
      }
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Strike Rate'
      }
  },
  legend: {
      enabled: false
  },
  tooltip: {
      pointFormat: 'Strike rate of Batsman in Year 2017'
  },
  series: [{
      name: 'Population', // If we don't want dataLabel to top of bar graph. we can undo this line and dataLabels {}
      data: seriesData,
      dataLabels: {
          enabled: true,
          rotation: -90,
          color: '#FFFFFF',
          align: 'right',
          format: '{point.y:.1f}',
          y: 10, 
          style: {
              fontSize: '13px',
              fontFamily: 'Verdana, sans-serif'
          }
      }
  }]
});
}
