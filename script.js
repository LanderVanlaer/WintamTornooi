/*
localStorage.removeItem("lastname");
localStorage.getItem("lastname");
localStorage.setItem("lastname", "Van laer");
alert(localStorage.getItem("lastname"));
*/

let U8PouleAu8FinaleTeams = [];
let U8PouleBu8FinaleTeams = [];

let u8FinaleTeamCode = [];
let u8FinaleTeamCodeB = [];

let U9PouleAu9FinaleTeams = [];
let U9PouleBu9FinaleTeams = [];

let u9FinaleTeamCode = [];
let u9FinaleTeamCodeB = [];


let finaleTeams = {
  //[TeamName, TeamCodeTable]
  "u8FinaleTeam1": ["",],
  "u8FinaleTeam2": ["",],
  "u8KleineFinaleTeam1": ["",],
  "u8KleineFinaleTeam2": ["",],
  "u8Plaatsen1Team1": ["",],
  "u8Plaatsen1Team2": ["",],
  "u8Plaatsen2Team1": ["",],
  "u8Plaatsen2Team2": ["",],

  "u9FinaleTeam1": ["",],
  "u9FinaleTeam2": ["",],
  "u9KleineFinaleTeam1": ["",],
  "u9KleineFinaleTeam2": ["",],
  "u9Plaatsen1Team1": ["",],
  "u9Plaatsen1Team2": ["",],
  "u9Plaatsen2Team1": ["",],
  "u9Plaatsen2Team2": ["",]
}



startUp();
function startUp() {
  pushTeamCodes();
  teamLocaleStorage();
  teamSetTable();
  uitslagenBerekenen();
  U8Table();
  u8PouleADoelpunten();
  u8PouleBDoelpunten();
  u8PouleADoelpuntenTegen();
  u8PouleBDoelpuntenTegen();
  u8PouleAdoelsaldo();
  u8PouleBdoelsaldo();
  u8PouleAPunten();
  u8PouleBPunten();
  u8PouleAFinale();
  u8PouleBFinale();
  u9Table();
  u9PouleADoelpunten();
  u9PouleBDoelpunten();
  u9PouleADoelpuntenTegen();
  u9PouleBDoelpuntenTegen();
  u9PouleAdoelsaldo();
  u9PouleBdoelsaldo();
  u9PouleAPunten();
  u9PouleBPunten();
  u9PouleAFinale();
  u9PouleBFinale();
  u8Winnaars();
  u9Winnaars();
}

function pushTeamCodes() {
  //U9 poule B
  if (finaleTeams.u9FinaleTeam2[1] !== "") {
    u9FinaleTeamCodeB.push(finaleTeams.u9FinaleTeam1[1]);
  }
  if (finaleTeams.u9KleineFinaleTeam2[1] !== "") {
    u9FinaleTeamCodeB.push(finaleTeams.u9KleineFinaleTeam2[1]);
  }
  if (finaleTeams.u9Plaatsen1Team2[1] !== "") {
    u9FinaleTeamCodeB.push(finaleTeams.u9Plaatsen1Team2[1]);
  }
  if (finaleTeams.u9Plaatsen2Team2[1] !== "") {
    u9FinaleTeamCodeB.push(finaleTeams.u9Plaatsen2Team2[1]);
  }
  //U9 poule A
  if (finaleTeams.u9FinaleTeam1[1] !== "") {
    u9FinaleTeamCode.push(finaleTeams.u9FinaleTeam1[1]);
  }
  if (finaleTeams.u9KleineFinaleTeam1[1] !== "") {
    u9FinaleTeamCode.push(finaleTeams.u9KleineFinaleTeam1[1]);
  }
  if (finaleTeams.u9Plaatsen1Team1[1] !== "") {
    u9FinaleTeamCode.push(finaleTeams.u9Plaatsen1Team1[1]);
  }
  if (finaleTeams.u9Plaatsen2Team1[1] !== "") {
    u9FinaleTeamCode.push(finaleTeams.u9Plaatsen2Team1[1]);
  }
  //U8 poule B
  if (finaleTeams.u8FinaleTeam2[1] !== "") {
    u8FinaleTeamCodeB.push(finaleTeams.u8FinaleTeam1[1]);
  }
  if (finaleTeams.u8KleineFinaleTeam2[1] !== "") {
    u8FinaleTeamCodeB.push(finaleTeams.u8KleineFinaleTeam2[1]);
  }
  if (finaleTeams.u8Plaatsen1Team2[1] !== "") {
    u8FinaleTeamCodeB.push(finaleTeams.u8Plaatsen1Team2[1]);
  }
  if (finaleTeams.u8Plaatsen2Team2[1] !== "") {
    u8FinaleTeamCodeB.push(finaleTeams.u8Plaatsen2Team2[1]);
  }
  //U8 poule A
  if (finaleTeams.u8FinaleTeam1[1] !== "") {
    u8FinaleTeamCode.push(finaleTeams.u8FinaleTeam1[1]);
  }
  if (finaleTeams.u8KleineFinaleTeam1[1] !== "") {
    u8FinaleTeamCode.push(finaleTeams.u8KleineFinaleTeam1[1]);
  }
  if (finaleTeams.u8Plaatsen1Team1[1] !== "") {
    u8FinaleTeamCode.push(finaleTeams.u8Plaatsen1Team1[1]);
  }
  if (finaleTeams.u8Plaatsen2Team1[1] !== "") {
    u8FinaleTeamCode.push(finaleTeams.u8Plaatsen2Team1[1]);
  }
}

function teamLocaleStorage() {
  //teams U8
  localStorage.setItem("team1", document.getElementById("1.4").innerHTML);
  localStorage.setItem("team2", document.getElementById("2.4").innerHTML);
  localStorage.setItem("team3", document.getElementById("3.4").innerHTML);
  localStorage.setItem("team4", document.getElementById("4.4").innerHTML);
  localStorage.setItem("team5", document.getElementById("1.5").innerHTML);
  localStorage.setItem("team6", document.getElementById("2.5").innerHTML);
  localStorage.setItem("team7", document.getElementById("3.5").innerHTML);
  localStorage.setItem("team8", document.getElementById("4.5").innerHTML);
  //teams U9
  localStorage.setItem("team11", document.getElementById("6.4").innerHTML);
  localStorage.setItem("team12", document.getElementById("7.4").innerHTML);
  localStorage.setItem("team13", document.getElementById("8.4").innerHTML);
  localStorage.setItem("team14", document.getElementById("9.4").innerHTML);
  localStorage.setItem("team15", document.getElementById("6.5").innerHTML);
  localStorage.setItem("team16", document.getElementById("7.5").innerHTML);
  localStorage.setItem("team17", document.getElementById("8.5").innerHTML);
  localStorage.setItem("team18", document.getElementById("9.5").innerHTML);
}

function teamSetTable() {
  document.getElementById("11.4").innerHTML = localStorage.getItem("team1");
  document.getElementById("21.4").innerHTML = localStorage.getItem("team1");

  document.getElementById("12.4").innerHTML = localStorage.getItem("team2");
  document.getElementById("22.4").innerHTML = localStorage.getItem("team2");

  document.getElementById("11.5").innerHTML = localStorage.getItem("team3");
  document.getElementById("23.5").innerHTML = localStorage.getItem("team3");

  document.getElementById("12.5").innerHTML = localStorage.getItem("team4");
  document.getElementById("24.5").innerHTML = localStorage.getItem("team4");

  document.getElementById("13.4").innerHTML = localStorage.getItem("team5");
  document.getElementById("23.4").innerHTML = localStorage.getItem("team5");

  document.getElementById("14.4").innerHTML = localStorage.getItem("team6");
  document.getElementById("24.4").innerHTML = localStorage.getItem("team6");

  document.getElementById("13.5").innerHTML = localStorage.getItem("team7");
  document.getElementById("21.5").innerHTML = localStorage.getItem("team7");

  document.getElementById("14.5").innerHTML = localStorage.getItem("team8");
  document.getElementById("22.5").innerHTML = localStorage.getItem("team8");


  document.getElementById("16.4").innerHTML = localStorage.getItem("team11");
  document.getElementById("26.4").innerHTML = localStorage.getItem("team11");

  document.getElementById("17.4").innerHTML = localStorage.getItem("team12");
  document.getElementById("27.4").innerHTML = localStorage.getItem("team12");

  document.getElementById("16.5").innerHTML = localStorage.getItem("team13");
  document.getElementById("28.5").innerHTML = localStorage.getItem("team13");

  document.getElementById("17.5").innerHTML = localStorage.getItem("team14");
  document.getElementById("29.5").innerHTML = localStorage.getItem("team14");

  document.getElementById("18.4").innerHTML = localStorage.getItem("team15");
  document.getElementById("28.4").innerHTML = localStorage.getItem("team15");

  document.getElementById("19.4").innerHTML = localStorage.getItem("team16");
  document.getElementById("29.4").innerHTML = localStorage.getItem("team16");

  document.getElementById("18.5").innerHTML = localStorage.getItem("team17");
  document.getElementById("26.5").innerHTML = localStorage.getItem("team17");

  document.getElementById("19.5").innerHTML = localStorage.getItem("team18");
  document.getElementById("27.5").innerHTML = localStorage.getItem("team18");
}


function uitslagenBerekenen() {
  var uitslagen = {
    "1": "0 - 0",
    "2": "0 - 0",
    "3": "0 - 0",
    "4": "0 - 0",
    "6": "0 - 0",
    "7": "0 - 0",
    "8": "0 - 0",
    "9": "0 - 0",
    "11": "0 - 0",
    "12": "0 - 0",
    "13": "0 - 0",
    "14": "0 - 0",
    "16": "0 - 0",
    "16": "0 - 0",
    "17": "0 - 0",
    "18": "0 - 0",
    "19": "0 - 0",
    "21": "0 - 0",
    "22": "0 - 0",
    "23": "0 - 0",
    "24": "0 - 0",
    "26": "0 - 0",
    "27": "0 - 0",
    "28": "0 - 0",
    "29": "0 - 0",
    "31": "0 - 0",
    "32": "0 - 0",
    "33": "0 - 0",
    "34": "0 - 0",
    "36": "0 - 0",
    "37": "0 - 0",
    "38": "0 - 0",
    "39": "0 - 0"
  }
}


function U8Table() {
  //pouleA
  document.getElementById("1.2.team").innerHTML = localStorage.getItem("team1");
  document.getElementById("1.3.team").innerHTML = localStorage.getItem("team5");
  document.getElementById("1.4.team").innerHTML = localStorage.getItem("team3");
  document.getElementById("1.5.team").innerHTML = localStorage.getItem("team7");
  //pouleB
  document.getElementById("2.2.team").innerHTML = localStorage.getItem("team2");
  document.getElementById("2.3.team").innerHTML = localStorage.getItem("team6");
  document.getElementById("2.4.team").innerHTML = localStorage.getItem("team4");
  document.getElementById("2.5.team").innerHTML = localStorage.getItem("team8");
}


function u8PouleADoelpunten() {
  for (let b = 2; b <= 5; b++) {
    let doelpunten = 0;
    let team = document.getElementById("1." + b + ".team").innerHTML;
    let id;
    for (let i = 1; i < 41; i++) {
      id = i + ".4";
      if (document.getElementById(id).innerHTML == team) {
        doelpunten += Number(document.getElementById(i + ".6").innerHTML);
      }
    }
    for (let i = 1; i < 41; i++) {
      id = i + ".5";
      if (document.getElementById(id).innerHTML == team) {
        doelpunten += Number(document.getElementById(i + ".7").innerHTML);
      }
    }
    document.getElementById("1." + b + ".doelpunten").innerHTML = doelpunten;
  }
}

function u8PouleBDoelpunten() {
  for (let b = 2; b <= 5; b++) {
    let doelpunten = 0;
    let team = document.getElementById("2." + b + ".team").innerHTML;
    let id;
    for (let i = 1; i < 41; i++) {
      id = i + ".4";
      if (document.getElementById(id).innerHTML == team) {
        doelpunten += Number(document.getElementById(i + ".6").innerHTML);
      }
    }
    for (let i = 1; i < 41; i++) {
      id = i + ".5";
      if (document.getElementById(id).innerHTML == team) {
        doelpunten += Number(document.getElementById(i + ".7").innerHTML);
      }
    }
    document.getElementById("2." + b + ".doelpunten").innerHTML = doelpunten;
  }
}

function u8PouleADoelpuntenTegen() {
  for (let b = 2; b <= 5; b++) {
    let doelpunten = 0;
    let team = document.getElementById("1." + b + ".team").innerHTML;
    let id;
    for (let i = 1; i < 41; i++) {
      id = i + ".4";
      if (document.getElementById(id).innerHTML == team) {
        doelpunten += Number(document.getElementById(i + ".7").innerHTML);
      }
    }
    for (let i = 1; i < 41; i++) {
      id = i + ".5";
      if (document.getElementById(id).innerHTML == team) {
        doelpunten += Number(document.getElementById(i + ".6").innerHTML);
      }
    }
    document.getElementById("1." + b + ".doelpuntenTegen").innerHTML = doelpunten;
  }
}


function u8PouleBDoelpuntenTegen() {
  for (let b = 2; b <= 5; b++) {
    let doelpunten = 0;
    let team = document.getElementById("2." + b + ".team").innerHTML;
    let id;
    for (let i = 1; i < 41; i++) {
      id = i + ".4";
      if (document.getElementById(id).innerHTML == team) {
        doelpunten += Number(document.getElementById(i + ".7").innerHTML);
      }
    }
    for (let i = 1; i < 41; i++) {
      id = i + ".5";
      if (document.getElementById(id).innerHTML == team) {
        doelpunten += Number(document.getElementById(i + ".6").innerHTML);
      }
    }
    document.getElementById("2." + b + ".doelpuntenTegen").innerHTML = doelpunten;
  }
}

function u8PouleAdoelsaldo() {
  for (let i = 2; i <= 5; i++) {
    document.getElementById("1." + i + ".doelsaldo").innerHTML = Number(document.getElementById("1." + i + ".doelpunten").innerHTML) - Number(document.getElementById("1." + i + ".doelpuntenTegen").innerHTML);
  }
}


function u8PouleBdoelsaldo() {
  for (let i = 2; i <= 5; i++) {
    document.getElementById("2." + i + ".doelsaldo").innerHTML = Number(document.getElementById("2." + i + ".doelpunten").innerHTML) - Number(document.getElementById("2." + i + ".doelpuntenTegen").innerHTML);
  }
}

function u8PouleAPunten() {
  for (let b = 2; b <= 5; b++) {
    let punten = 0;
    let team = document.getElementById("1." + b + ".team").innerHTML;
    let id;
    for (let i = 1; i < 41; i++) {
      id = i + ".4";
      if (document.getElementById(id).innerHTML == team) {
        if (document.getElementById(i + ".6").innerHTML !== '' && document.getElementById(i + ".7").innerHTML !== '') {
          if (Number(document.getElementById(i + ".6").innerHTML) > Number(document.getElementById(i + ".7").innerHTML)) {
            punten += 3;
          } else if (Number(document.getElementById(i + ".6").innerHTML) == Number(document.getElementById(i + ".7").innerHTML)) {
            punten += 1;
          }
        }
      }
    }
    for (let i = 1; i < 41; i++) {
      id = i + ".5";
      if (document.getElementById(id).innerHTML == team) {
        if (document.getElementById(i + ".6").innerHTML !== '' && document.getElementById(i + ".7").innerHTML !== '') {
          if (Number(document.getElementById(i + ".7").innerHTML) > Number(document.getElementById(i + ".6").innerHTML)) {
            punten += 3;
          } else if (Number(document.getElementById(i + ".7").innerHTML) == Number(document.getElementById(i + ".6").innerHTML)) {
            punten += 1;
          }
        }
      }
    }
    document.getElementById("1." + b + ".punten").innerHTML = punten;
  }
}


function u8PouleBPunten() {
  for (let b = 2; b <= 5; b++) {
    let punten = 0;
    let team = document.getElementById("2." + b + ".team").innerHTML;
    let id;
    for (let i = 1; i < 41; i++) {
      id = i + ".4";
      if (document.getElementById(id).innerHTML == team) {
        if (document.getElementById(i + ".6").innerHTML !== '' || document.getElementById(i + ".7").innerHTML !== '') {
          if (Number(document.getElementById(i + ".6").innerHTML) > Number(document.getElementById(i + ".7").innerHTML)) {
            punten += 3;
          } else if (Number(document.getElementById(i + ".6").innerHTML) == Number(document.getElementById(i + ".7").innerHTML)) {
            punten += 1;
          }
        }
      }
    }
    for (let i = 1; i < 41; i++) {
      id = i + ".5";
      if (document.getElementById(id).innerHTML == team) {
        if (document.getElementById(i + ".7").innerHTML !== '' || document.getElementById(i + ".6").innerHTML !== '') {
          if (Number(document.getElementById(i + ".7").innerHTML) > Number(document.getElementById(i + ".6").innerHTML)) {
            punten += 3;
          } else if (Number(document.getElementById(i + ".7").innerHTML) == Number(document.getElementById(i + ".6").innerHTML)) {
            punten += 1;
          }
        }
      }
    }
    document.getElementById("2." + b + ".punten").innerHTML = punten;
  }
}


function u8PouleAFinale() {
  var finalTeamsPunten = [];
  var finalTeamsDoelsaldo = [];
  var finalTeamsDoelpunten = [];
  var u8FinaleTeam = finaleTeams.u8FinaleTeam1[0];
  var max;
  var u8FinaleTeamsArray = [];
  if (document.getElementById("24.7").innerHTML !== "") {
    if (u8FinaleTeam === "") {
      max = Math.max(Number(document.getElementById("1.5.punten").innerHTML), Number(document.getElementById("1.2.punten").innerHTML), Number(document.getElementById("1.3.punten").innerHTML), Number(document.getElementById("1.4.punten").innerHTML));
      for (let i = 1; i <= 4; i++) {
        let b = i + 1;
        if (document.getElementById("1." + b + ".punten").innerHTML == max) {
          finalTeamsPunten.push(b);
        }
      }
      if (finalTeamsPunten.length > 1) {
        u8FinaleTeamsArray = [];
        for (let i = 0; i < finalTeamsPunten.length; i++) {
          u8FinaleTeamsArray.push(Number(document.getElementById("1." + finalTeamsPunten[i] + ".doelsaldo").innerHTML));
        }
        max = Math.max(...u8FinaleTeamsArray);

        for (let i = 0; i < finalTeamsPunten.length; i++) {
          if (document.getElementById("1." + finalTeamsPunten[i] + ".doelsaldo").innerHTML == max) {
            finalTeamsDoelsaldo.push(finalTeamsPunten[i]);
          }
        }

        if (finalTeamsDoelsaldo.length > 1) {
          u8FinaleTeamsArray = [];
          for (let i = 0; i < finalTeamsDoelsaldo.length; i++) {
            u8FinaleTeamsArray.push(Number(document.getElementById("1." + finalTeamsDoelsaldo[i] + ".doelpunten").innerHTML));
          }
          max = Math.max(...u8FinaleTeamsArray);
          for (let i = 0; i < finalTeamsDoelsaldo.length; i++) {
            if (document.getElementById("1." + finalTeamsDoelsaldo[i] + ".doelpunten").innerHTML == max) {
              finalTeamsDoelpunten.push(finalTeamsDoelsaldo[i]);
            }
          }
          if (finalTeamsDoelpunten.length > 1) {
            alert("Er zijn meerdere u8FinaleTeams: \n" + finalTeamsDoelpunten);
            u8FinaleTeam = "error"
            console.log("Er zijn meerdere u8FinaleTeams: " + finalTeamsDoelpunten)
          } else {
            u8FinaleTeam = document.getElementById("1." + finalTeamsDoelpunten[0] + ".team").innerHTML;
            u8FinaleTeamCode.push(finalTeamsDoelpunten[0]);
          }
        } else {
          u8FinaleTeam = document.getElementById("1." + finalTeamsDoelsaldo[0] + ".team").innerHTML;
          u8FinaleTeamCode.push(finalTeamsDoelsaldo[0]);
        }
      } else {
        u8FinaleTeam = document.getElementById("1." + finalTeamsPunten[0] + ".team").innerHTML;
        u8FinaleTeamCode.push(finalTeamsPunten[0]);
      }
    }
    document.getElementById("31.4").innerHTML = u8FinaleTeam;
    U8PouleAu8FinaleTeams.push(u8FinaleTeam);
  }

  //KleineFinale
  var u8KleineFinaleTeam = finaleTeams.u8KleineFinaleTeam1[0];
  var u8KleineFinaleTeamsArray = [];
  finalTeamsPunten = [];
  finalTeamsDoelsaldo = [];
  finalTeamsDoelpunten = [];

  if (u8KleineFinaleTeam === "") {
    for (let i = 2; i <= 5; i++) {
      if (!u8FinaleTeamCode.includes(i)) {
        u8KleineFinaleTeamsArray.push(Number(document.getElementById("1." + i + ".punten").innerHTML));
      }
    }
    max = Math.max(...u8KleineFinaleTeamsArray);
    alert
    for (let i = 2; i <= 5; i++) {
      if (!u8FinaleTeamCode.includes(i)) {
        if (document.getElementById("1." + i + ".punten").innerHTML == max) {
          finalTeamsPunten.push(i);
        }
      }
    }
    if (finalTeamsPunten.length > 1) {
      u8KleineFinaleTeamsArray = [];
      for (let i = 0; i < finalTeamsPunten.length; i++) {
        u8KleineFinaleTeamsArray.push(Number(document.getElementById("1." + finalTeamsPunten[i] + ".doelsaldo").innerHTML));
      }
      max = Math.max(...u8KleineFinaleTeamsArray);

      for (let i = 0; i < finalTeamsPunten.length; i++) {
        if (document.getElementById("1." + finalTeamsPunten[i] + ".doelsaldo").innerHTML == max) {
          finalTeamsDoelsaldo.push(finalTeamsPunten[i]);
        }
      }
      if (finalTeamsDoelsaldo.length > 1) {
        u8KleineFinaleTeamsArray = [];
        for (let i = 0; i < finalTeamsDoelsaldo.length; i++) {
          u8KleineFinaleTeamsArray.push(Number(document.getElementById("1." + finalTeamsDoelsaldo[i] + ".doelpunten").innerHTML));
        }
        max = Math.max(...u8KleineFinaleTeamsArray);
        for (let i = 0; i < finalTeamsDoelsaldo.length; i++) {
          if (document.getElementById("1." + finalTeamsDoelsaldo[i] + ".doelpunten").innerHTML == max) {
            finalTeamsDoelpunten.push(finalTeamsDoelsaldo[i]);
          }
        }
        if (finalTeamsDoelpunten.length > 1) {
          alert("Er zijn meerdere u8FinaleTeams: \n" + finalTeamsDoelpunten);
          u8KleineFinaleTeam = "error"
          console.log("Er zijn meerdere u8FinaleTeams: " + finalTeamsDoelpunten)
        } else {
          u8KleineFinaleTeam = document.getElementById("1." + finalTeamsDoelpunten[0] + ".team").innerHTML;
          u8FinaleTeamCode.push(finalTeamsDoelpunten[0]);
        }
      } else {
        u8KleineFinaleTeam = document.getElementById("1." + finalTeamsDoelsaldo[0] + ".team").innerHTML;
        u8FinaleTeamCode.push(finalTeamsDoelsaldo[0]);
      }
    } else {
      u8KleineFinaleTeam = document.getElementById("1." + finalTeamsPunten[0] + ".team").innerHTML;
      u8FinaleTeamCode.push(finalTeamsPunten[0]);
    }
  }
  document.getElementById("32.4").innerHTML = u8KleineFinaleTeam;
  U8PouleAu8FinaleTeams.push(u8KleineFinaleTeam);

  //Plaatsen1
  var u8Plaatsen1Team = finaleTeams.u8Plaatsen1Team1[0];
  var u8KleineFinaleTeamsArray = [];
  finalTeamsPunten = [];
  finalTeamsDoelsaldo = [];
  finalTeamsDoelpunten = [];

  if (u8Plaatsen1Team === "") {
    for (let i = 2; i <= 5; i++) {
      if (!u8FinaleTeamCode.includes(i)) {
        u8KleineFinaleTeamsArray.push(Number(document.getElementById("1." + i + ".punten").innerHTML));
      }
    }
    max = Math.max(...u8KleineFinaleTeamsArray);
    alert
    for (let i = 2; i <= 5; i++) {
      if (!u8FinaleTeamCode.includes(i)) {
        if (document.getElementById("1." + i + ".punten").innerHTML == max) {
          finalTeamsPunten.push(i);
        }
      }
    }
    if (finalTeamsPunten.length > 1) {
      u8KleineFinaleTeamsArray = [];
      for (let i = 0; i < finalTeamsPunten.length; i++) {
        u8KleineFinaleTeamsArray.push(Number(document.getElementById("1." + finalTeamsPunten[i] + ".doelsaldo").innerHTML));
      }
      max = Math.max(...u8KleineFinaleTeamsArray);

      for (let i = 0; i < finalTeamsPunten.length; i++) {
        if (document.getElementById("1." + finalTeamsPunten[i] + ".doelsaldo").innerHTML == max) {
          finalTeamsDoelsaldo.push(finalTeamsPunten[i]);
        }
      }
      if (finalTeamsDoelsaldo.length > 1) {
        u8KleineFinaleTeamsArray = [];
        for (let i = 0; i < finalTeamsDoelsaldo.length; i++) {
          u8KleineFinaleTeamsArray.push(Number(document.getElementById("1." + finalTeamsDoelsaldo[i] + ".doelpunten").innerHTML));
        }
        max = Math.max(...u8KleineFinaleTeamsArray);
        for (let i = 0; i < finalTeamsDoelsaldo.length; i++) {
          if (document.getElementById("1." + finalTeamsDoelsaldo[i] + ".doelpunten").innerHTML == max) {
            finalTeamsDoelpunten.push(finalTeamsDoelsaldo[i]);
          }
        }
        if (finalTeamsDoelpunten.length > 1) {
          alert("Er zijn meerdere u8FinaleTeams: \n" + finalTeamsDoelpunten);
          u8Plaatsen1Team = "error"
          console.log("Er zijn meerdere u8FinaleTeams: " + finalTeamsDoelpunten)
        } else {
          u8Plaatsen1Team = document.getElementById("1." + finalTeamsDoelpunten[0] + ".team").innerHTML;
          u8FinaleTeamCode.push(finalTeamsDoelpunten[0]);
        }
      } else {
        u8Plaatsen1Team = document.getElementById("1." + finalTeamsDoelsaldo[0] + ".team").innerHTML;
        u8FinaleTeamCode.push(finalTeamsDoelsaldo[0]);
      }
    } else {
      u8Plaatsen1Team = document.getElementById("1." + finalTeamsPunten[0] + ".team").innerHTML;
      u8FinaleTeamCode.push(finalTeamsPunten[0]);
    }
  }
  document.getElementById("33.4").innerHTML = u8Plaatsen1Team;
  U8PouleAu8FinaleTeams.push(u8Plaatsen1Team);

  //Plaatsen2
  var u8plaatsen1Team = finaleTeams.u8Plaatsen2Team1[0];
  var u8KleineFinaleTeamsArray = [];
  finalTeamsPunten = [];
  finalTeamsDoelsaldo = [];
  finalTeamsDoelpunten = [];

  if (u8plaatsen1Team === "") {
    for (let i = 2; i <= 5; i++) {
      if (!u8FinaleTeamCode.includes(i)) {
        u8KleineFinaleTeamsArray.push(Number(document.getElementById("1." + i + ".punten").innerHTML));
      }
    }
    max = Math.max(...u8KleineFinaleTeamsArray);
    alert
    for (let i = 2; i <= 5; i++) {
      if (!u8FinaleTeamCode.includes(i)) {
        if (document.getElementById("1." + i + ".punten").innerHTML == max) {
          finalTeamsPunten.push(i);
        }
      }
    }
    if (finalTeamsPunten.length > 1) {
      u8KleineFinaleTeamsArray = [];
      for (let i = 0; i < finalTeamsPunten.length; i++) {
        u8KleineFinaleTeamsArray.push(Number(document.getElementById("1." + finalTeamsPunten[i] + ".doelsaldo").innerHTML));
      }
      max = Math.max(...u8KleineFinaleTeamsArray);

      for (let i = 0; i < finalTeamsPunten.length; i++) {
        if (document.getElementById("1." + finalTeamsPunten[i] + ".doelsaldo").innerHTML == max) {
          finalTeamsDoelsaldo.push(finalTeamsPunten[i]);
        }
      }
      if (finalTeamsDoelsaldo.length > 1) {
        u8KleineFinaleTeamsArray = [];
        for (let i = 0; i < finalTeamsDoelsaldo.length; i++) {
          u8KleineFinaleTeamsArray.push(Number(document.getElementById("1." + finalTeamsDoelsaldo[i] + ".doelpunten").innerHTML));
        }
        max = Math.max(...u8KleineFinaleTeamsArray);
        for (let i = 0; i < finalTeamsDoelsaldo.length; i++) {
          if (document.getElementById("1." + finalTeamsDoelsaldo[i] + ".doelpunten").innerHTML == max) {
            finalTeamsDoelpunten.push(finalTeamsDoelsaldo[i]);
          }
        }
        if (finalTeamsDoelpunten.length > 1) {
          alert("Er zijn meerdere u8FinaleTeams: \n" + finalTeamsDoelpunten);
          u8plaatsen1Team = "error"
          console.log("Er zijn meerdere u8FinaleTeams: " + finalTeamsDoelpunten)
        } else {
          u8plaatsen1Team = document.getElementById("1." + finalTeamsDoelpunten[0] + ".team").innerHTML;
          u8FinaleTeamCode.push(finalTeamsDoelpunten[0]);
        }
      } else {
        u8plaatsen1Team = document.getElementById("1." + finalTeamsDoelsaldo[0] + ".team").innerHTML;
        u8FinaleTeamCode.push(finalTeamsDoelsaldo[0]);
      }
    } else {
      u8plaatsen1Team = document.getElementById("1." + finalTeamsPunten[0] + ".team").innerHTML;
      u8FinaleTeamCode.push(finalTeamsPunten[0]);
    }
  }
  document.getElementById("34.4").innerHTML = u8plaatsen1Team;
  U8PouleAu8FinaleTeams.push(u8plaatsen1Team);
}


function u8PouleBFinale() {
  var finalTeamsPuntenB = [];
  var finalTeamsDoelsaldoB = [];
  var finalTeamsDoelpuntenB = [];
  var u8FinaleTeamB = finaleTeams.u8FinaleTeam2[0];
  var maxB;
  var u8FinaleTeamsArrayB = [];
  if (document.getElementById("24.7").innerHTML !== "") {
    if (u8FinaleTeamB === "") {
      maxB = Math.max(Number(document.getElementById("2.5.punten").innerHTML), Number(document.getElementById("2.2.punten").innerHTML), Number(document.getElementById("2.3.punten").innerHTML), Number(document.getElementById("2.4.punten").innerHTML));
      for (let i = 1; i <= 4; i++) {
        let b = i + 1;
        if (document.getElementById("2." + b + ".punten").innerHTML == maxB) {
          finalTeamsPuntenB.push(b);
        }
      }
      if (finalTeamsPuntenB.length > 1) {
        u8FinaleTeamsArrayB = [];
        for (let i = 0; i < finalTeamsPuntenB.length; i++) {
          u8FinaleTeamsArrayB.push(Number(document.getElementById("2." + finalTeamsPuntenB[i] + ".doelsaldo").innerHTML));
        }
        maxB = Math.max(...u8FinaleTeamsArrayB);

        for (let i = 0; i < finalTeamsPuntenB.length; i++) {
          if (document.getElementById("2." + finalTeamsPuntenB[i] + ".doelsaldo").innerHTML == maxB) {
            finalTeamsDoelsaldoB.push(finalTeamsPuntenB[i]);
          }
        }

        if (finalTeamsDoelsaldoB.length > 1) {
          u8FinaleTeamsArrayB = [];
          for (let i = 0; i < finalTeamsDoelsaldoB.length; i++) {
            u8FinaleTeamsArrayB.push(Number(document.getElementById("2." + finalTeamsDoelsaldoB[i] + ".doelpunten").innerHTML));
          }
          maxB = Math.max(...u8FinaleTeamsArrayB);
          for (let i = 0; i < finalTeamsDoelsaldoB.length; i++) {
            if (document.getElementById("2." + finalTeamsDoelsaldoB[i] + ".doelpunten").innerHTML == maxB) {
              finalTeamsDoelpuntenB.push(finalTeamsDoelsaldoB[i]);
            }
          }
          if (finalTeamsDoelpuntenB.length > 1) {
            alert("Er zijn meerdere u8FinaleTeams: \n" + finalTeamsDoelpuntenB);
            u8FinaleTeamB = "error"
            console.log("Er zijn meerdere u8FinaleTeams: " + finalTeamsDoelpuntenB)
          } else {
            u8FinaleTeamB = document.getElementById("2." + finalTeamsDoelpuntenB[0] + ".team").innerHTML;
            u8FinaleTeamCodeB.push(finalTeamsDoelpuntenB[0]);
          }
        } else {
          u8FinaleTeamB = document.getElementById("2." + finalTeamsDoelsaldoB[0] + ".team").innerHTML;
          u8FinaleTeamCodeB.push(finalTeamsDoelsaldoB[0]);
        }
      } else {
        u8FinaleTeamB = document.getElementById("2." + finalTeamsPuntenB[0] + ".team").innerHTML;
        u8FinaleTeamCodeB.push(finalTeamsPuntenB[0]);
      }
    }
    document.getElementById("31.5").innerHTML = u8FinaleTeamB;
    U8PouleBu8FinaleTeams.push[u8FinaleTeamB];
  }

  //KleineFinale
  var u8KleineFinaleTeamB = finaleTeams.u8KleineFinaleTeam2[0];
  var u8KleineFinaleTeamsArrayB = [];
  finalTeamsPuntenB = [];
  finalTeamsDoelsaldoB = [];
  finalTeamsDoelpuntenB = [];

  if (u8KleineFinaleTeamB === "") {
    for (let i = 2; i <= 5; i++) {
      if (!u8FinaleTeamCodeB.includes(i)) {
        u8KleineFinaleTeamsArrayB.push(Number(document.getElementById("2." + i + ".punten").innerHTML));
      }
    }
    maxB = Math.max(...u8KleineFinaleTeamsArrayB);
    alert
    for (let i = 2; i <= 5; i++) {
      if (!u8FinaleTeamCodeB.includes(i)) {
        if (document.getElementById("2." + i + ".punten").innerHTML == maxB) {
          finalTeamsPuntenB.push(i);
        }
      }
    }
    if (finalTeamsPuntenB.length > 1) {
      u8KleineFinaleTeamsArrayB = [];
      for (let i = 0; i < finalTeamsPuntenB.length; i++) {
        u8KleineFinaleTeamsArrayB.push(Number(document.getElementById("2." + finalTeamsPuntenB[i] + ".doelsaldo").innerHTML));
      }
      maxB = Math.max(...u8KleineFinaleTeamsArrayB);

      for (let i = 0; i < finalTeamsPuntenB.length; i++) {
        if (document.getElementById("2." + finalTeamsPuntenB[i] + ".doelsaldo").innerHTML == maxB) {
          finalTeamsDoelsaldoB.push(finalTeamsPuntenB[i]);
        }
      }
      if (finalTeamsDoelsaldoB.length > 1) {
        u8KleineFinaleTeamsArrayB = [];
        for (let i = 0; i < finalTeamsDoelsaldoB.length; i++) {
          u8KleineFinaleTeamsArrayB.push(Number(document.getElementById("2." + finalTeamsDoelsaldoB[i] + ".doelpunten").innerHTML));
        }
        maxB = Math.max(...u8KleineFinaleTeamsArrayB);
        for (let i = 0; i < finalTeamsDoelsaldoB.length; i++) {
          if (document.getElementById("2." + finalTeamsDoelsaldoB[i] + ".doelpunten").innerHTML == maxB) {
            finalTeamsDoelpuntenB.push(finalTeamsDoelsaldoB[i]);
          }
        }
        if (finalTeamsDoelpuntenB.length > 1) {
          alert("Er zijn meerdere u8FinaleTeams: \n" + finalTeamsDoelpuntenB);
          u8KleineFinaleTeamB = "error"
          console.log("Er zijn meerdere u8FinaleTeams: " + finalTeamsDoelpuntenB)
        } else {
          u8KleineFinaleTeamB = document.getElementById("2." + finalTeamsDoelpuntenB[0] + ".team").innerHTML;
          u8FinaleTeamCodeB.push(finalTeamsDoelpuntenB[0]);
        }
      } else {
        u8KleineFinaleTeamB = document.getElementById("2." + finalTeamsDoelsaldoB[0] + ".team").innerHTML;
        u8FinaleTeamCodeB.push(finalTeamsDoelsaldoB[0]);
      }
    } else {
      u8KleineFinaleTeamB = document.getElementById("2." + finalTeamsPuntenB[0] + ".team").innerHTML;
      u8FinaleTeamCodeB.push(finalTeamsPuntenB[0]);
    }
  }
  document.getElementById("32.5").innerHTML = u8KleineFinaleTeamB;
  U8PouleBu8FinaleTeams.push[u8KleineFinaleTeamB];

  //Plaatsen1
  var u8Plaatsen1TeamB = finaleTeams.u8Plaatsen1Team2[0];
  var u8KleineFinaleTeamsArrayB = [];
  finalTeamsPuntenB = [];
  finalTeamsDoelsaldoB = [];
  finalTeamsDoelpuntenB = [];

  if (u8Plaatsen1TeamB === "") {
    for (let i = 2; i <= 5; i++) {
      if (!u8FinaleTeamCodeB.includes(i)) {
        u8KleineFinaleTeamsArrayB.push(Number(document.getElementById("2." + i + ".punten").innerHTML));
      }
    }
    maxB = Math.max(...u8KleineFinaleTeamsArrayB);
    alert
    for (let i = 2; i <= 5; i++) {
      if (!u8FinaleTeamCodeB.includes(i)) {
        if (document.getElementById("2." + i + ".punten").innerHTML == maxB) {
          finalTeamsPuntenB.push(i);
        }
      }
    }
    if (finalTeamsPuntenB.length > 1) {
      u8KleineFinaleTeamsArrayB = [];
      for (let i = 0; i < finalTeamsPuntenB.length; i++) {
        u8KleineFinaleTeamsArrayB.push(Number(document.getElementById("2." + finalTeamsPuntenB[i] + ".doelsaldo").innerHTML));
      }
      maxB = Math.max(...u8KleineFinaleTeamsArrayB);

      for (let i = 0; i < finalTeamsPuntenB.length; i++) {
        if (document.getElementById("2." + finalTeamsPuntenB[i] + ".doelsaldo").innerHTML == maxB) {
          finalTeamsDoelsaldoB.push(finalTeamsPuntenB[i]);
        }
      }
      if (finalTeamsDoelsaldoB.length > 1) {
        u8KleineFinaleTeamsArrayB = [];
        for (let i = 0; i < finalTeamsDoelsaldoB.length; i++) {
          u8KleineFinaleTeamsArrayB.push(Number(document.getElementById("2." + finalTeamsDoelsaldoB[i] + ".doelpunten").innerHTML));
        }
        maxB = Math.max(...u8KleineFinaleTeamsArrayB);
        for (let i = 0; i < finalTeamsDoelsaldoB.length; i++) {
          if (document.getElementById("2." + finalTeamsDoelsaldoB[i] + ".doelpunten").innerHTML == maxB) {
            finalTeamsDoelpuntenB.push(finalTeamsDoelsaldoB[i]);
          }
        }
        if (finalTeamsDoelpuntenB.length > 1) {
          alert("Er zijn meerdere u8FinaleTeams: \n" + finalTeamsDoelpuntenB);
          u8Plaatsen1TeamB = "error"
          console.log("Er zijn meerdere u8FinaleTeams: " + finalTeamsDoelpuntenB)
        } else {
          u8Plaatsen1TeamB = document.getElementById("2." + finalTeamsDoelpuntenB[0] + ".team").innerHTML;
          u8FinaleTeamCodeB.push(finalTeamsDoelpuntenB[0]);
        }
      } else {
        u8Plaatsen1TeamB = document.getElementById("2." + finalTeamsDoelsaldoB[0] + ".team").innerHTML;
        u8FinaleTeamCodeB.push(finalTeamsDoelsaldoB[0]);
      }
    } else {
      u8Plaatsen1TeamB = document.getElementById("2." + finalTeamsPuntenB[0] + ".team").innerHTML;
      u8FinaleTeamCodeB.push(finalTeamsPuntenB[0]);
    }
  }
  document.getElementById("33.5").innerHTML = u8Plaatsen1TeamB;
  U8PouleBu8FinaleTeams.push[u8Plaatsen1TeamB];

  //Plaatsen2
  var u8plaatsen1TeamB = finaleTeams.u8Plaatsen2Team2[0];
  var u8KleineFinaleTeamsArrayB = [];
  finalTeamsPuntenB = [];
  finalTeamsDoelsaldoB = [];
  finalTeamsDoelpuntenB = [];

  if (u8plaatsen1TeamB === "") {
    for (let i = 2; i <= 5; i++) {
      if (!u8FinaleTeamCodeB.includes(i)) {
        u8KleineFinaleTeamsArrayB.push(Number(document.getElementById("2." + i + ".punten").innerHTML));
      }
    }
    maxB = Math.max(...u8KleineFinaleTeamsArrayB);
    alert
    for (let i = 2; i <= 5; i++) {
      if (!u8FinaleTeamCodeB.includes(i)) {
        if (document.getElementById("2." + i + ".punten").innerHTML == maxB) {
          finalTeamsPuntenB.push(i);
        }
      }
    }
    if (finalTeamsPuntenB.length > 1) {
      u8KleineFinaleTeamsArrayB = [];
      for (let i = 0; i < finalTeamsPuntenB.length; i++) {
        u8KleineFinaleTeamsArrayB.push(Number(document.getElementById("2." + finalTeamsPuntenB[i] + ".doelsaldo").innerHTML));
      }
      maxB = Math.max(...u8KleineFinaleTeamsArrayB);

      for (let i = 0; i < finalTeamsPuntenB.length; i++) {
        if (document.getElementById("2." + finalTeamsPuntenB[i] + ".doelsaldo").innerHTML == maxB) {
          finalTeamsDoelsaldoB.push(finalTeamsPuntenB[i]);
        }
      }
      if (finalTeamsDoelsaldoB.length > 1) {
        u8KleineFinaleTeamsArrayB = [];
        for (let i = 0; i < finalTeamsDoelsaldoB.length; i++) {
          u8KleineFinaleTeamsArrayB.push(Number(document.getElementById("2." + finalTeamsDoelsaldoB[i] + ".doelpunten").innerHTML));
        }
        maxB = Math.max(...u8KleineFinaleTeamsArrayB);
        for (let i = 0; i < finalTeamsDoelsaldoB.length; i++) {
          if (document.getElementById("2." + finalTeamsDoelsaldoB[i] + ".doelpunten").innerHTML == maxB) {
            finalTeamsDoelpuntenB.push(finalTeamsDoelsaldoB[i]);
          }
        }
        if (finalTeamsDoelpuntenB.length > 1) {
          alert("Er zijn meerdere u8FinaleTeams: \n" + finalTeamsDoelpuntenB);
          u8plaatsen1TeamB = "error"
          console.log("Er zijn meerdere u8FinaleTeams: " + finalTeamsDoelpuntenB)
        } else {
          u8plaatsen1TeamB = document.getElementById("2." + finalTeamsDoelpuntenB[0] + ".team").innerHTML;
          u8FinaleTeamCodeB.push(finalTeamsDoelpuntenB[0]);
        }
      } else {
        u8plaatsen1TeamB = document.getElementById("2." + finalTeamsDoelsaldoB[0] + ".team").innerHTML;
        u8FinaleTeamCodeB.push(finalTeamsDoelsaldoB[0]);
      }
    } else {
      u8plaatsen1TeamB = document.getElementById("2." + finalTeamsPuntenB[0] + ".team").innerHTML;
      u8FinaleTeamCodeB.push(finalTeamsPuntenB[0]);
    }
  }
  document.getElementById("34.5").innerHTML = u8plaatsen1TeamB;
  U8PouleBu8FinaleTeams.push[u8plaatsen1TeamB];
}


function u9Table() {
  //pouleA
  document.getElementById("3.2.team").innerHTML = localStorage.getItem("team11");
  document.getElementById("3.3.team").innerHTML = localStorage.getItem("team15");
  document.getElementById("3.4.team").innerHTML = localStorage.getItem("team13");
  document.getElementById("3.5.team").innerHTML = localStorage.getItem("team17");
  //pouleB
  document.getElementById("4.2.team").innerHTML = localStorage.getItem("team12");
  document.getElementById("4.3.team").innerHTML = localStorage.getItem("team16");
  document.getElementById("4.4.team").innerHTML = localStorage.getItem("team14");
  document.getElementById("4.5.team").innerHTML = localStorage.getItem("team18");
}


function u9PouleADoelpunten() {
  for (let b = 2; b <= 5; b++) {
    let doelpunten = 0;
    let team = document.getElementById("3." + b + ".team").innerHTML;
    let id;
    for (let i = 1; i < 41; i++) {
      id = i + ".4";
      if (document.getElementById(id).innerHTML == team) {
        doelpunten += Number(document.getElementById(i + ".6").innerHTML);
      }
    }
    for (let i = 1; i < 41; i++) {
      id = i + ".5";
      if (document.getElementById(id).innerHTML == team) {
        doelpunten += Number(document.getElementById(i + ".7").innerHTML);
      }
    }
    document.getElementById("3." + b + ".doelpunten").innerHTML = doelpunten;
  }
}

function u9PouleBDoelpunten() {
  for (let b = 2; b <= 5; b++) {
    let doelpunten = 0;
    let team = document.getElementById("4." + b + ".team").innerHTML;
    let id;
    for (let i = 1; i < 41; i++) {
      id = i + ".4";
      if (document.getElementById(id).innerHTML == team) {
        doelpunten += Number(document.getElementById(i + ".6").innerHTML);
      }
    }
    for (let i = 1; i < 41; i++) {
      id = i + ".5";
      if (document.getElementById(id).innerHTML == team) {
        doelpunten += Number(document.getElementById(i + ".7").innerHTML);
      }
    }
    document.getElementById("4." + b + ".doelpunten").innerHTML = doelpunten;
  }
}

function u9PouleADoelpuntenTegen() {
  for (let b = 2; b <= 5; b++) {
    let doelpunten = 0;
    let team = document.getElementById("3." + b + ".team").innerHTML;
    let id;
    for (let i = 1; i < 41; i++) {
      id = i + ".4";
      if (document.getElementById(id).innerHTML == team) {
        doelpunten += Number(document.getElementById(i + ".7").innerHTML);
      }
    }
    for (let i = 1; i < 41; i++) {
      id = i + ".5";
      if (document.getElementById(id).innerHTML == team) {
        doelpunten += Number(document.getElementById(i + ".6").innerHTML);
      }
    }
    document.getElementById("3." + b + ".doelpuntenTegen").innerHTML = doelpunten;
  }
}


function u9PouleBDoelpuntenTegen() {
  for (let b = 2; b <= 5; b++) {
    let doelpunten = 0;
    let team = document.getElementById("4." + b + ".team").innerHTML;
    let id;
    for (let i = 1; i < 41; i++) {
      id = i + ".4";
      if (document.getElementById(id).innerHTML == team) {
        doelpunten += Number(document.getElementById(i + ".7").innerHTML);
      }
    }
    for (let i = 1; i < 41; i++) {
      id = i + ".5";
      if (document.getElementById(id).innerHTML == team) {
        doelpunten += Number(document.getElementById(i + ".6").innerHTML);
      }
    }
    document.getElementById("4." + b + ".doelpuntenTegen").innerHTML = doelpunten;
  }
}

function u9PouleAdoelsaldo() {
  for (let i = 2; i <= 5; i++) {
    document.getElementById("3." + i + ".doelsaldo").innerHTML = Number(document.getElementById("3." + i + ".doelpunten").innerHTML) - Number(document.getElementById("3." + i + ".doelpuntenTegen").innerHTML);
  }
}

function u9PouleBdoelsaldo() {
  for (let i = 2; i <= 5; i++) {
    document.getElementById("4." + i + ".doelsaldo").innerHTML = Number(document.getElementById("4." + i + ".doelpunten").innerHTML) - Number(document.getElementById("4." + i + ".doelpuntenTegen").innerHTML);
  }
}

function u9PouleAPunten() {
  for (let b = 2; b <= 5; b++) {
    let punten = 0;
    let team = document.getElementById("3." + b + ".team").innerHTML;
    let id;
    for (let i = 1; i < 41; i++) {
      id = i + ".4";
      if (document.getElementById(id).innerHTML == team) {
        if (document.getElementById(i + ".6").innerHTML !== '' && document.getElementById(i + ".7").innerHTML !== '') {
          if (Number(document.getElementById(i + ".6").innerHTML) > Number(document.getElementById(i + ".7").innerHTML)) {
            punten += 3;
          } else if (Number(document.getElementById(i + ".6").innerHTML) == Number(document.getElementById(i + ".7").innerHTML)) {
            punten += 1;
          }
        }
      }
    }
    for (let i = 1; i < 41; i++) {
      id = i + ".5";
      if (document.getElementById(id).innerHTML == team) {
        if (document.getElementById(i + ".6").innerHTML !== '' && document.getElementById(i + ".7").innerHTML !== '') {
          if (Number(document.getElementById(i + ".7").innerHTML) > Number(document.getElementById(i + ".6").innerHTML)) {
            punten += 3;
          } else if (Number(document.getElementById(i + ".7").innerHTML) == Number(document.getElementById(i + ".6").innerHTML)) {
            punten += 1;
          }
        }
      }
    }
    document.getElementById("3." + b + ".punten").innerHTML = punten;
  }
}

function u9PouleBPunten() {
  for (let b = 2; b <= 5; b++) {
    let punten = 0;
    let team = document.getElementById("4." + b + ".team").innerHTML;
    let id;
    for (let i = 1; i < 41; i++) {
      id = i + ".4";
      if (document.getElementById(id).innerHTML == team) {
        if (document.getElementById(i + ".6").innerHTML !== '' || document.getElementById(i + ".7").innerHTML !== '') {
          if (Number(document.getElementById(i + ".6").innerHTML) > Number(document.getElementById(i + ".7").innerHTML)) {
            punten += 3;
          } else if (Number(document.getElementById(i + ".6").innerHTML) == Number(document.getElementById(i + ".7").innerHTML)) {
            punten += 1;
          }
        }
      }
    }
    for (let i = 1; i < 41; i++) {
      id = i + ".5";
      if (document.getElementById(id).innerHTML == team) {
        if (document.getElementById(i + ".7").innerHTML !== '' || document.getElementById(i + ".6").innerHTML !== '') {
          if (Number(document.getElementById(i + ".7").innerHTML) > Number(document.getElementById(i + ".6").innerHTML)) {
            punten += 3;
          } else if (Number(document.getElementById(i + ".7").innerHTML) == Number(document.getElementById(i + ".6").innerHTML)) {
            punten += 1;
          }
        }
      }
    }
    document.getElementById("4." + b + ".punten").innerHTML = punten;
  }
}

function u9PouleBFinale() {
  var finalTeamsPuntenBU9 = [];
  var finalTeamsDoelsaldoBU9 = [];
  var finalTeamsDoelpuntenBU9 = [];
  var u9FinaleTeamB = finaleTeams.u9FinaleTeam2[0];
  var maxBU9;
  var u9FinaleTeamsArrayB = [];
  if (document.getElementById("29.7").innerHTML !== "") {
    if (u9FinaleTeamB === "") {
      maxBU9 = Math.max(Number(document.getElementById("4.5.punten").innerHTML), Number(document.getElementById("4.2.punten").innerHTML), Number(document.getElementById("4.3.punten").innerHTML), Number(document.getElementById("4.4.punten").innerHTML));
      for (let i = 1; i <= 4; i++) {
        let b = i + 1;
        if (document.getElementById("4." + b + ".punten").innerHTML == maxBU9) {
          finalTeamsPuntenBU9.push(b);
        }
      }
      if (finalTeamsPuntenBU9.length > 1) {
        u9FinaleTeamsArrayB = [];
        for (let i = 0; i < finalTeamsPuntenBU9.length; i++) {
          u9FinaleTeamsArrayB.push(Number(document.getElementById("4." + finalTeamsPuntenBU9[i] + ".doelsaldo").innerHTML));
        }
        maxBU9 = Math.max(...u9FinaleTeamsArrayB);

        for (let i = 0; i < finalTeamsPuntenBU9.length; i++) {
          if (document.getElementById("4." + finalTeamsPuntenBU9[i] + ".doelsaldo").innerHTML == maxBU9) {
            finalTeamsDoelsaldoBU9.push(finalTeamsPuntenBU9[i]);
          }
        }

        if (finalTeamsDoelsaldoBU9.length > 1) {
          u9FinaleTeamsArrayB = [];
          for (let i = 0; i < finalTeamsDoelsaldoBU9.length; i++) {
            u9FinaleTeamsArrayB.push(Number(document.getElementById("4." + finalTeamsDoelsaldoBU9[i] + ".doelpunten").innerHTML));
          }
          maxBU9 = Math.max(...u9FinaleTeamsArrayB);
          for (let i = 0; i < finalTeamsDoelsaldoBU9.length; i++) {
            if (document.getElementById("4." + finalTeamsDoelsaldoBU9[i] + ".doelpunten").innerHTML == maxBU9) {
              finalTeamsDoelpuntenBU9.push(finalTeamsDoelsaldoBU9[i]);
            }
          }
          if (finalTeamsDoelpuntenBU9.length > 1) {
            alert("Er zijn meerdere u9FinaleTeams: \n" + finalTeamsDoelpuntenBU9);
            u9FinaleTeamB = "error";
            console.log("Er zijn meerdere u9FinaleTeams: " + finalTeamsDoelpuntenBU9);
          } else {
            u9FinaleTeamB = document.getElementById("4." + finalTeamsDoelpuntenBU9[0] + ".team").innerHTML;
            u9FinaleTeamCodeB.push(finalTeamsDoelpuntenBU9[0]);
          }
        } else {
          u9FinaleTeamB = document.getElementById("4." + finalTeamsDoelsaldoBU9[0] + ".team").innerHTML;
          u9FinaleTeamCodeB.push(finalTeamsDoelsaldoBU9[0]);
        }
      } else {
        u9FinaleTeamB = document.getElementById("4." + finalTeamsPuntenBU9[0] + ".team").innerHTML;
        u9FinaleTeamCodeB.push(finalTeamsPuntenBU9[0]);
      }
    }
    document.getElementById("36.5").innerHTML = u9FinaleTeamB;
    U9PouleBu9FinaleTeams.push(u9FinaleTeamB);
  }

  //KleineFinale
  var u9KleineFinaleTeamB = finaleTeams.u9KleineFinaleTeam2[0];
  var u9KleineFinaleTeamsArrayB = [];
  finalTeamsPuntenBU9 = [];
  finalTeamsDoelsaldoBU9 = [];
  finalTeamsDoelpuntenBU9 = [];

  if (u9KleineFinaleTeamB === "") {
    for (let i = 2; i <= 5; i++) {
      if (!u9FinaleTeamCodeB.includes(i)) {
        u9KleineFinaleTeamsArrayB.push(Number(document.getElementById("4." + i + ".punten").innerHTML));
      }
    }
    maxBU9 = Math.max(...u9KleineFinaleTeamsArrayB);
    alert
    for (let i = 2; i <= 5; i++) {
      if (!u9FinaleTeamCodeB.includes(i)) {
        if (document.getElementById("4." + i + ".punten").innerHTML == maxBU9) {
          finalTeamsPuntenBU9.push(i);
        }
      }
    }
    if (finalTeamsPuntenBU9.length > 1) {
      u9KleineFinaleTeamsArrayB = [];
      for (let i = 0; i < finalTeamsPuntenBU9.length; i++) {
        u9KleineFinaleTeamsArrayB.push(Number(document.getElementById("4." + finalTeamsPuntenBU9[i] + ".doelsaldo").innerHTML));
      }
      maxBU9 = Math.max(...u9KleineFinaleTeamsArrayB);

      for (let i = 0; i < finalTeamsPuntenBU9.length; i++) {
        if (document.getElementById("4." + finalTeamsPuntenBU9[i] + ".doelsaldo").innerHTML == maxBU9) {
          finalTeamsDoelsaldoBU9.push(finalTeamsPuntenBU9[i]);
        }
      }
      if (finalTeamsDoelsaldoBU9.length > 1) {
        u9KleineFinaleTeamsArrayB = [];
        for (let i = 0; i < finalTeamsDoelsaldoBU9.length; i++) {
          u9KleineFinaleTeamsArrayB.push(Number(document.getElementById("4." + finalTeamsDoelsaldoBU9[i] + ".doelpunten").innerHTML));
        }
        maxBU9 = Math.max(...u9KleineFinaleTeamsArrayB);
        for (let i = 0; i < finalTeamsDoelsaldoBU9.length; i++) {
          if (document.getElementById("4." + finalTeamsDoelsaldoBU9[i] + ".doelpunten").innerHTML == maxBU9) {
            finalTeamsDoelpuntenBU9.push(finalTeamsDoelsaldoBU9[i]);
          }
        }
        if (finalTeamsDoelpuntenBU9.length > 1) {
          alert("Er zijn meerdere u9FinaleTeams: \n" + finalTeamsDoelpuntenBU9);
          u9KleineFinaleTeamB = "error"
          console.log("Er zijn meerdere u9FinaleTeams: " + finalTeamsDoelpuntenBU9)
        } else {
          u9KleineFinaleTeamB = document.getElementById("4." + finalTeamsDoelpuntenBU9[0] + ".team").innerHTML;
          u9FinaleTeamCodeB.push(finalTeamsDoelpuntenBU9[0]);
        }
      } else {
        u9KleineFinaleTeamB = document.getElementById("4." + finalTeamsDoelsaldoBU9[0] + ".team").innerHTML;
        u9FinaleTeamCodeB.push(finalTeamsDoelsaldoBU9[0]);
      }
    } else {
      u9KleineFinaleTeamB = document.getElementById("4." + finalTeamsPuntenBU9[0] + ".team").innerHTML;
      u9FinaleTeamCodeB.push(finalTeamsPuntenBU9[0]);
    }
  }
  document.getElementById("37.5").innerHTML = u9KleineFinaleTeamB;
  U9PouleBu9FinaleTeams.push(u9KleineFinaleTeamB);

  //Plaatsen1
  var u9Plaatsen1TeamB = finaleTeams.u9Plaatsen1Team2[0];
  var u9KleineFinaleTeamsArrayB = [];
  finalTeamsPuntenBU9 = [];
  finalTeamsDoelsaldoBU9 = [];
  finalTeamsDoelpuntenBU9 = [];
  if (u9Plaatsen1TeamB === "") {
    for (let i = 2; i <= 5; i++) {
      if (!u9FinaleTeamCodeB.includes(i)) {
        u9KleineFinaleTeamsArrayB.push(Number(document.getElementById("4." + i + ".punten").innerHTML));
      }
    }
    maxBU9 = Math.max(...u9KleineFinaleTeamsArrayB);
    alert
    for (let i = 2; i <= 5; i++) {
      if (!u9FinaleTeamCodeB.includes(i)) {
        if (document.getElementById("4." + i + ".punten").innerHTML == maxBU9) {
          finalTeamsPuntenBU9.push(i);
        }
      }
    }
    if (finalTeamsPuntenBU9.length > 1) {
      u9KleineFinaleTeamsArrayB = [];
      for (let i = 0; i < finalTeamsPuntenBU9.length; i++) {
        u9KleineFinaleTeamsArrayB.push(Number(document.getElementById("4." + finalTeamsPuntenBU9[i] + ".doelsaldo").innerHTML));
      }
      maxBU9 = Math.max(...u9KleineFinaleTeamsArrayB);

      for (let i = 0; i < finalTeamsPuntenBU9.length; i++) {
        if (document.getElementById("4." + finalTeamsPuntenBU9[i] + ".doelsaldo").innerHTML == maxBU9) {
          finalTeamsDoelsaldoBU9.push(finalTeamsPuntenBU9[i]);
        }
      }
      if (finalTeamsDoelsaldoBU9.length > 1) {
        u9KleineFinaleTeamsArrayB = [];
        for (let i = 0; i < finalTeamsDoelsaldoBU9.length; i++) {
          u9KleineFinaleTeamsArrayB.push(Number(document.getElementById("4." + finalTeamsDoelsaldoBU9[i] + ".doelpunten").innerHTML));
        }
        maxBU9 = Math.max(...u9KleineFinaleTeamsArrayB);
        for (let i = 0; i < finalTeamsDoelsaldoBU9.length; i++) {
          if (document.getElementById("4." + finalTeamsDoelsaldoBU9[i] + ".doelpunten").innerHTML == maxBU9) {
            finalTeamsDoelpuntenBU9.push(finalTeamsDoelsaldoBU9[i]);
          }
        }
        if (finalTeamsDoelpuntenBU9.length > 1) {
          alert("Er zijn meerdere u9FinaleTeams: \n" + finalTeamsDoelpuntenBU9);
          u9Plaatsen1TeamB = "error"
          console.log("Er zijn meerdere u9FinaleTeams: " + finalTeamsDoelpuntenBU9)
        } else {
          u9Plaatsen1TeamB = document.getElementById("4." + finalTeamsDoelpuntenBU9[0] + ".team").innerHTML;
          u9FinaleTeamCodeB.push(finalTeamsDoelpuntenBU9[0]);
        }
      } else {
        u9Plaatsen1TeamB = document.getElementById("4." + finalTeamsDoelsaldoBU9[0] + ".team").innerHTML;
        u9FinaleTeamCodeB.push(finalTeamsDoelsaldoBU9[0]);
      }
    } else {
      u9Plaatsen1TeamB = document.getElementById("4." + finalTeamsPuntenBU9[0] + ".team").innerHTML;
      u9FinaleTeamCodeB.push(finalTeamsPuntenBU9[0]);
    }
  }
  document.getElementById("38.5").innerHTML = u9Plaatsen1TeamB;
  U9PouleBu9FinaleTeams.push(u9Plaatsen1TeamB);

  //Plaatsen2
  var u9plaatsen1TeamB = finaleTeams.u9Plaatsen2Team2[0];
  var u9KleineFinaleTeamsArrayB = [];
  finalTeamsPuntenBU9 = [];
  finalTeamsDoelsaldoBU9 = [];
  finalTeamsDoelpuntenBU9 = [];

  if (u9plaatsen1TeamB === "") {
    for (let i = 2; i <= 5; i++) {
      if (!u9FinaleTeamCodeB.includes(i)) {
        u9KleineFinaleTeamsArrayB.push(Number(document.getElementById("4." + i + ".punten").innerHTML));
      }
    }
    maxBU9 = Math.max(...u9KleineFinaleTeamsArrayB);
    for (let i = 2; i <= 5; i++) {
      if (!u9FinaleTeamCodeB.includes(i)) {
        if (document.getElementById("4." + i + ".punten").innerHTML == maxBU9) {
          finalTeamsPuntenBU9.push(i);
        }
      }
    }
    if (finalTeamsPuntenBU9.length > 1) {
      u9KleineFinaleTeamsArrayB = [];
      for (let i = 0; i < finalTeamsPuntenBU9.length; i++) {
        u9KleineFinaleTeamsArrayB.push(Number(document.getElementById("4." + finalTeamsPuntenBU9[i] + ".doelsaldo").innerHTML));
      }
      maxBU9 = Math.max(...u9KleineFinaleTeamsArrayB);

      for (let i = 0; i < finalTeamsPuntenBU9.length; i++) {
        if (document.getElementById("4." + finalTeamsPuntenBU9[i] + ".doelsaldo").innerHTML == maxBU9) {
          finalTeamsDoelsaldoBU9.push(finalTeamsPuntenBU9[i]);
        }
      }
      if (finalTeamsDoelsaldoBU9.length > 1) {
        u9KleineFinaleTeamsArrayB = [];
        for (let i = 0; i < finalTeamsDoelsaldoBU9.length; i++) {
          u9KleineFinaleTeamsArrayB.push(Number(document.getElementById("4." + finalTeamsDoelsaldoBU9[i] + ".doelpunten").innerHTML));
        }
        maxBU9 = Math.max(...u9KleineFinaleTeamsArrayB);
        for (let i = 0; i < finalTeamsDoelsaldoBU9.length; i++) {
          if (document.getElementById("4." + finalTeamsDoelsaldoBU9[i] + ".doelpunten").innerHTML == maxBU9) {
            finalTeamsDoelpuntenBU9.push(finalTeamsDoelsaldoBU9[i]);
          }
        }
        if (finalTeamsDoelpuntenBU9.length > 1) {
          alert("Er zijn meerdere u9FinaleTeams: \n" + finalTeamsDoelpuntenBU9);
          u9plaatsen1TeamB = "error"
          console.log("Er zijn meerdere u9FinaleTeams: " + finalTeamsDoelpuntenBU9)
        } else {
          u9plaatsen1TeamB = document.getElementById("4." + finalTeamsDoelpuntenBU9[0] + ".team").innerHTML;
          u9FinaleTeamCodeB.push(finalTeamsDoelpuntenBU9[0]);
        }
      } else {
        u9plaatsen1TeamB = document.getElementById("4." + finalTeamsDoelsaldoBU9[0] + ".team").innerHTML;
        u9FinaleTeamCodeB.push(finalTeamsDoelsaldoBU9[0]);
      }
    } else {
      u9plaatsen1TeamB = document.getElementById("4." + finalTeamsPuntenBU9[0] + ".team").innerHTML;
      u9FinaleTeamCodeB.push(finalTeamsPuntenBU9[0]);
    }
  }
  document.getElementById("39.5").innerHTML = u9plaatsen1TeamB;
  U9PouleBu9FinaleTeams.push(u9plaatsen1TeamB);
}

function u9PouleAFinale() {
  var finalTeamsPuntenU9 = [];
  var finalTeamsDoelsaldoU9 = [];
  var finalTeamsDoelpuntenU9 = [];
  var u9FinaleTeam = finaleTeams.u9FinaleTeam1[0];
  var maxU9;
  var u9FinaleTeamsArray = [];
  if (document.getElementById("29.7").innerHTML !== "") {
    if (u9FinaleTeam === "") {
      maxU9 = Math.max(Number(document.getElementById("3.5.punten").innerHTML), Number(document.getElementById("3.2.punten").innerHTML), Number(document.getElementById("3.3.punten").innerHTML), Number(document.getElementById("3.3.punten").innerHTML));
      for (let i = 1; i <= 4; i++) {
        let b = i + 1;
        if (document.getElementById("3." + b + ".punten").innerHTML == maxU9) {
          finalTeamsPuntenU9.push(b);
        }
      }
      if (finalTeamsPuntenU9.length > 1) {
        u9FinaleTeamsArray = [];
        for (let i = 0; i < finalTeamsPuntenU9.length; i++) {
          u9FinaleTeamsArray.push(Number(document.getElementById("3." + finalTeamsPuntenU9[i] + ".doelsaldo").innerHTML));
        }
        maxU9 = Math.max(...u9FinaleTeamsArray);

        for (let i = 0; i < finalTeamsPuntenU9.length; i++) {
          if (document.getElementById("3." + finalTeamsPuntenU9[i] + ".doelsaldo").innerHTML == maxU9) {
            finalTeamsDoelsaldoU9.push(finalTeamsPuntenU9[i]);
          }
        }

        if (finalTeamsDoelsaldoU9.length > 1) {
          u9FinaleTeamsArray = [];
          for (let i = 0; i < finalTeamsDoelsaldoU9.length; i++) {
            u9FinaleTeamsArray.push(Number(document.getElementById("3." + finalTeamsDoelsaldoU9[i] + ".doelpunten").innerHTML));
          }
          maxU9 = Math.max(...u9FinaleTeamsArray);
          for (let i = 0; i < finalTeamsDoelsaldoU9.length; i++) {
            if (document.getElementById("3." + finalTeamsDoelsaldoU9[i] + ".doelpunten").innerHTML == maxU9) {
              finalTeamsDoelpuntenU9.push(finalTeamsDoelsaldoU9[i]);
            }
          }
          if (finalTeamsDoelpuntenU9.length > 1) {
            alert("Er zijn meerdere u9FinaleTeams: \n" + finalTeamsDoelpuntenU9);
            u9FinaleTeam = "error";
            console.log("Er zijn meerdere u9FinaleTeams: " + finalTeamsDoelpuntenU9);
          } else {
            u9FinaleTeam = document.getElementById("3." + finalTeamsDoelpuntenU9[0] + ".team").innerHTML;
            u9FinaleTeamCode.push(finalTeamsDoelpuntenU9[0]);
          }
        } else {
          u9FinaleTeam = document.getElementById("3." + finalTeamsDoelsaldoU9[0] + ".team").innerHTML;
          u9FinaleTeamCode.push(finalTeamsDoelsaldoU9[0]);
        }
      } else {
        u9FinaleTeam = document.getElementById("3." + finalTeamsPuntenU9[0] + ".team").innerHTML;
        u9FinaleTeamCode.push(finalTeamsPuntenU9[0]);
      }
    }
    document.getElementById("36.4").innerHTML = u9FinaleTeam;
    U9PouleBu9FinaleTeams.push(u9FinaleTeam);
  }

  //KleineFinale
  var u9KleineFinaleTeam = finaleTeams.u9KleineFinaleTeam1[0];
  var u9KleineFinaleTeamsArray = [];
  finalTeamsPuntenU9 = [];
  finalTeamsDoelsaldoU9 = [];
  finalTeamsDoelpuntenU9 = [];

  if (u9KleineFinaleTeam === "") {
    for (let i = 2; i <= 5; i++) {
      if (!u9FinaleTeamCode.includes(i)) {
        u9KleineFinaleTeamsArray.push(Number(document.getElementById("3." + i + ".punten").innerHTML));
      }
    }
    maxU9 = Math.max(...u9KleineFinaleTeamsArray);
    alert
    for (let i = 2; i <= 5; i++) {
      if (!u9FinaleTeamCode.includes(i)) {
        if (document.getElementById("3." + i + ".punten").innerHTML == maxU9) {
          finalTeamsPuntenU9.push(i);
        }
      }
    }
    if (finalTeamsPuntenU9.length > 1) {
      u9KleineFinaleTeamsArray = [];
      for (let i = 0; i < finalTeamsPuntenU9.length; i++) {
        u9KleineFinaleTeamsArray.push(Number(document.getElementById("3." + finalTeamsPuntenU9[i] + ".doelsaldo").innerHTML));
      }
      maxU9 = Math.max(...u9KleineFinaleTeamsArray);

      for (let i = 0; i < finalTeamsPuntenU9.length; i++) {
        if (document.getElementById("3." + finalTeamsPuntenU9[i] + ".doelsaldo").innerHTML == maxU9) {
          finalTeamsDoelsaldoU9.push(finalTeamsPuntenU9[i]);
        }
      }
      if (finalTeamsDoelsaldoU9.length > 1) {
        u9KleineFinaleTeamsArray = [];
        for (let i = 0; i < finalTeamsDoelsaldoU9.length; i++) {
          u9KleineFinaleTeamsArray.push(Number(document.getElementById("3." + finalTeamsDoelsaldoU9[i] + ".doelpunten").innerHTML));
        }
        maxU9 = Math.max(...u9KleineFinaleTeamsArray);
        for (let i = 0; i < finalTeamsDoelsaldoU9.length; i++) {
          if (document.getElementById("3." + finalTeamsDoelsaldoU9[i] + ".doelpunten").innerHTML == maxU9) {
            finalTeamsDoelpuntenU9.push(finalTeamsDoelsaldoU9[i]);
          }
        }
        if (finalTeamsDoelpuntenU9.length > 1) {
          alert("Er zijn meerdere u9FinaleTeams: \n" + finalTeamsDoelpuntenU9);
          u9KleineFinaleTeam = "error"
          console.log("Er zijn meerdere u9FinaleTeams: " + finalTeamsDoelpuntenU9)
        } else {
          u9KleineFinaleTeam = document.getElementById("3." + finalTeamsDoelpuntenU9[0] + ".team").innerHTML;
          u9FinaleTeamCode.push(finalTeamsDoelpuntenU9[0]);
        }
      } else {
        u9KleineFinaleTeam = document.getElementById("3." + finalTeamsDoelsaldoU9[0] + ".team").innerHTML;
        u9FinaleTeamCode.push(finalTeamsDoelsaldoU9[0]);
      }
    } else {
      u9KleineFinaleTeam = document.getElementById("3." + finalTeamsPuntenU9[0] + ".team").innerHTML;
      u9FinaleTeamCode.push(finalTeamsPuntenU9[0]);
    }
  }
  document.getElementById("37.4").innerHTML = u9KleineFinaleTeam;
  U9PouleBu9FinaleTeams.push[u9KleineFinaleTeam];

  //Plaatsen1 
  var u9Plaatsen1Team = finaleTeams.u9Plaatsen1Team1[0];
  var u9KleineFinaleTeamsArray = [];
  finalTeamsPuntenU9 = [];
  finalTeamsDoelsaldoU9 = [];
  finalTeamsDoelpuntenU9 = [];

  if (u9Plaatsen1Team === "") {
    for (let i = 2; i <= 5; i++) {
      if (!u9FinaleTeamCode.includes(i)) {
        u9KleineFinaleTeamsArray.push(Number(document.getElementById("3." + i + ".punten").innerHTML));
      }
    }
    maxU9 = Math.max(...u9KleineFinaleTeamsArray);
    for (let i = 2; i <= 5; i++) {
      if (!u9FinaleTeamCode.includes(i)) {
        if (document.getElementById("3." + i + ".punten").innerHTML == maxU9) {
          finalTeamsPuntenU9.push(i);
        }
      }
    }
    if (finalTeamsPuntenU9.length > 1) {
      u9KleineFinaleTeamsArray = [];
      for (let i = 0; i < finalTeamsPuntenU9.length; i++) {
        u9KleineFinaleTeamsArray.push(Number(document.getElementById("3." + finalTeamsPuntenU9[i] + ".doelsaldo").innerHTML));
      }
      maxU9 = Math.max(...u9KleineFinaleTeamsArray);

      for (let i = 0; i < finalTeamsPuntenU9.length; i++) {
        if (document.getElementById("3." + finalTeamsPuntenU9[i] + ".doelsaldo").innerHTML == maxU9) {
          finalTeamsDoelsaldoU9.push(finalTeamsPuntenU9[i]);
        }
      }
      if (finalTeamsDoelsaldoU9.length > 1) {
        u9KleineFinaleTeamsArray = [];
        for (let i = 0; i < finalTeamsDoelsaldoU9.length; i++) {
          u9KleineFinaleTeamsArray.push(Number(document.getElementById("3." + finalTeamsDoelsaldoU9[i] + ".doelpunten").innerHTML));
        }
        maxU9 = Math.max(...u9KleineFinaleTeamsArray);
        for (let i = 0; i < finalTeamsDoelsaldoU9.length; i++) {
          if (document.getElementById("3." + finalTeamsDoelsaldoU9[i] + ".doelpunten").innerHTML == maxU9) {
            finalTeamsDoelpuntenU9.push(finalTeamsDoelsaldoU9[i]);
          }
        }
        if (finalTeamsDoelpuntenU9.length > 1) {
          alert("Er zijn meerdere u9FinaleTeams: \n" + finalTeamsDoelpuntenU9);
          u9Plaatsen1Team = "error"
          console.log("Er zijn meerdere u9FinaleTeams: " + finalTeamsDoelpuntenU9)
        } else {
          u9Plaatsen1Team = document.getElementById("3." + finalTeamsDoelpuntenU9[0] + ".team").innerHTML;
          u9FinaleTeamCode.push(finalTeamsDoelpuntenU9[0]);
        }
      } else {
        u9Plaatsen1Team = document.getElementById("3." + finalTeamsDoelsaldoU9[0] + ".team").innerHTML;
        u9FinaleTeamCode.push(finalTeamsDoelsaldoU9[0]);
      }
    } else {
      u9Plaatsen1Team = document.getElementById("3." + finalTeamsPuntenU9[0] + ".team").innerHTML;
      u9FinaleTeamCode.push(finalTeamsPuntenU9[0]);
    }
  }
  document.getElementById("38.4").innerHTML = u9Plaatsen1Team;
  U9PouleBu9FinaleTeams.push(u9Plaatsen1Team);

  //Plaatsen2
  var u9plaatsen1Team = finaleTeams.u9Plaatsen2Team1[0];
  var u9KleineFinaleTeamsArray = [];
  finalTeamsPuntenU9 = [];
  finalTeamsDoelsaldoU9 = [];
  finalTeamsDoelpuntenU9 = [];

  if (u9plaatsen1Team === "") {
    for (let i = 2; i <= 5; i++) {
      if (!u9FinaleTeamCode.includes(i)) {
        u9KleineFinaleTeamsArray.push(Number(document.getElementById("3." + i + ".punten").innerHTML));
      }
    }
    maxU9 = Math.max(...u9KleineFinaleTeamsArray);
    for (let i = 2; i <= 5; i++) {
      if (!u9FinaleTeamCode.includes(i)) {
        if (document.getElementById("3." + i + ".punten").innerHTML == maxU9) {
          finalTeamsPuntenU9.push(i);
        }
      }
    }
    if (finalTeamsPuntenU9.length > 1) {
      u9KleineFinaleTeamsArray = [];
      for (let i = 0; i < finalTeamsPuntenU9.length; i++) {
        u9KleineFinaleTeamsArray.push(Number(document.getElementById("3." + finalTeamsPuntenU9[i] + ".doelsaldo").innerHTML));
      }
      maxU9 = Math.max(...u9KleineFinaleTeamsArray);

      for (let i = 0; i < finalTeamsPuntenU9.length; i++) {
        if (document.getElementById("3." + finalTeamsPuntenU9[i] + ".doelsaldo").innerHTML == maxU9) {
          finalTeamsDoelsaldoU9.push(finalTeamsPuntenU9[i]);
        }
      }
      if (finalTeamsDoelsaldoU9.length > 1) {
        u9KleineFinaleTeamsArray = [];
        for (let i = 0; i < finalTeamsDoelsaldoU9.length; i++) {
          u9KleineFinaleTeamsArray.push(Number(document.getElementById("3." + finalTeamsDoelsaldoU9[i] + ".doelpunten").innerHTML));
        }
        maxU9 = Math.max(...u9KleineFinaleTeamsArray);
        for (let i = 0; i < finalTeamsDoelsaldoU9.length; i++) {
          if (document.getElementById("3." + finalTeamsDoelsaldoU9[i] + ".doelpunten").innerHTML == maxU9) {
            finalTeamsDoelpuntenU9.push(finalTeamsDoelsaldoU9[i]);
          }
        }
        if (finalTeamsDoelpuntenU9.length > 1) {
          alert("Er zijn meerdere u9FinaleTeams: \n" + finalTeamsDoelpuntenU9);
          u9plaatsen1Team = "error"
          console.log("Er zijn meerdere u9FinaleTeams: " + finalTeamsDoelpuntenU9)
        } else {
          u9plaatsen1Team = document.getElementById("3." + finalTeamsDoelpuntenU9[0] + ".team").innerHTML;
          u9FinaleTeamCode.push(finalTeamsDoelpuntenU9[0]);
        }
      } else {
        u9plaatsen1Team = document.getElementById("3." + finalTeamsDoelsaldoU9[0] + ".team").innerHTML;
        u9FinaleTeamCode.push(finalTeamsDoelsaldoU9[0]);
      }
    } else {
      u9plaatsen1Team = document.getElementById("3." + finalTeamsPuntenU9[0] + ".team").innerHTML;
      u9FinaleTeamCode.push(finalTeamsPuntenU9[0]);
    }
  }
  document.getElementById("39.4").innerHTML = u9plaatsen1Team;
  U9PouleBu9FinaleTeams.push(u9plaatsen1Team);
}


function getGoals(id) {
  let documentGoals = document.getElementById(id).innerHTML;
  let goalsArray = documentGoals.split("");
  let index;
  if (goalsArray.includes("(")) {
    index = goalsArray.findIndex(function (value) { return value == "(" });
    for (let i = 0; i <= index; i++) {
      goalsArray.shift();
    }
    goalsArray.pop();
    return Number(goalsArray.join(""));
  } else {
    return Number(documentGoals);
  }
}

function u8Winnaars() {
  let getal = 30;
  for (let i = 31; i <= 34; i++) {
    let id = i - getal;
    if (getGoals(i + ".6") > getGoals(i + ".7")) {
      document.getElementById("1.score." + id).innerHTML = document.getElementById(i + ".4").innerHTML;
      id = id + 1;
      document.getElementById("1.score." + id).innerHTML = document.getElementById(i + ".5").innerHTML;
    } else {
      document.getElementById("1.score." + id).innerHTML = document.getElementById(i + ".5").innerHTML;
      id = id + 1;
      document.getElementById("1.score." + id).innerHTML = document.getElementById(i + ".4").innerHTML;
    }
    getal--;
  }
}


function u9Winnaars() {
  let getal = 35;
  for (let i = 36; i <= 39; i++) {
    let id = i - getal;
    if (getGoals(i + ".6") > getGoals(i + ".7")) {
      document.getElementById("2.score." + id).innerHTML = document.getElementById(i + ".4").innerHTML;
      id = id + 1;
      document.getElementById("2.score." + id).innerHTML = document.getElementById(i + ".5").innerHTML;
    } else {
      document.getElementById("2.score." + id).innerHTML = document.getElementById(i + ".5").innerHTML;
      id = id + 1;
      document.getElementById("2.score." + id).innerHTML = document.getElementById(i + ".4").innerHTML;
    }
    getal--;
  }
}