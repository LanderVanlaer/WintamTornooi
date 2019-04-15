/*
localStorage.removeItem("lastname");
localStorage.getItem("lastname");
localStorage.setItem("lastname", "test");
alert(localStorage.getItem("lastname"));
*/
$.getJSON('data.json', function (data) {

  window.onload = startUp();

  function startUp() {
    JSONDP();
    setTimes();
    cssJS();
    teamSetTable();
    table();
    doelpunten();
    doelpuntenTegen();
    doelsaldo();
    punten();
    finaleTeams();
    winnaars();
  }

  function JSONDP() {
    let x = 1;
    let b;
    while (x != 40) {
      var remainder = x % 5;
      if (remainder == 0) {} else {
        b = data["DP" + x];
        document.getElementById(x + ".6").innerHTML = b[0];
        document.getElementById(x + ".7").innerHTML = b[1];
      }
      x++;
    }
  }

  function setTimes() {
    for (let I = 1; I <= 40; I += 5) {
      for (let i = 0; i < 4; i++) {
        let id = I + i;
        let dataNumber = Math.floor(I / 5);
        document.getElementById(id + ".1").innerHTML = data["time" + dataNumber];
      }
    }
    document.getElementById("40.1").innerHTML = data.time8;
    document.getElementById("41.1").innerHTML = data.time9;
  }


  function cssJS() {
    let currentTime = Date.parse(new Date());
    if (currentTime < Date.parse(new Date('April  ' + new Date().getDate() + ", 19 " + data.time0.split("u")[0] + ':' + data.time0.split("u")[1]))) {
      color(1);
    } else {
      for (let i = 1; i <= 40; i += 5) {
        let firstTime = Date.parse(new Date('April  ' + new Date().getDate() + ", 19 " + data["time" + Math.floor(i / 5)].split("u")[0] + ':' + data["time" + Math.floor(i / 5)].split("u")[1])) - 300000;
        let secondTime = Date.parse(new Date('April  ' + new Date().getDate() + ", 19 " + data["time" + Math.floor((i + 5) / 5)].split("u")[0] + ':' + data["time" + Math.floor((i + 5) / 5)].split("u")[1])) - 300000;
        //5 min = 300000 
        if (currentTime > firstTime && currentTime <= secondTime) {
          color(i);
        }
      }
    }

    function color(startPoint) {
      for (let rij = startPoint; rij < (4 + startPoint); rij++) {
        for (let kolom = 1; kolom < 8; kolom++) {
          document.getElementById(rij + "." + kolom).style.backgroundColor = '#DFF0D8';
        }
      }
    }
  }


  function teamSetTable() {
    document.getElementById("1.4").innerHTML = data.team1;
    document.getElementById("11.4").innerHTML = data.team1;
    document.getElementById("21.4").innerHTML = data.team1;

    document.getElementById("2.4").innerHTML = data.team2;
    document.getElementById("12.4").innerHTML = data.team2;
    document.getElementById("22.4").innerHTML = data.team2;

    document.getElementById("3.4").innerHTML = data.team3;
    document.getElementById("11.5").innerHTML = data.team3;
    document.getElementById("23.5").innerHTML = data.team3;

    document.getElementById("4.4").innerHTML = data.team4;
    document.getElementById("12.5").innerHTML = data.team4;
    document.getElementById("24.5").innerHTML = data.team4;

    document.getElementById("1.5").innerHTML = data.team5;
    document.getElementById("13.4").innerHTML = data.team5;
    document.getElementById("23.4").innerHTML = data.team5;

    document.getElementById("2.5").innerHTML = data.team6;
    document.getElementById("14.4").innerHTML = data.team6;
    document.getElementById("24.4").innerHTML = data.team6;

    document.getElementById("3.5").innerHTML = data.team7;
    document.getElementById("13.5").innerHTML = data.team7;
    document.getElementById("21.5").innerHTML = data.team7;

    document.getElementById("4.5").innerHTML = data.team8;
    document.getElementById("14.5").innerHTML = data.team8;
    document.getElementById("22.5").innerHTML = data.team8;

    document.getElementById("6.4").innerHTML = data.team11;
    document.getElementById("16.4").innerHTML = data.team11;
    document.getElementById("26.4").innerHTML = data.team11;

    document.getElementById("7.4").innerHTML = data.team12;
    document.getElementById("17.4").innerHTML = data.team12;
    document.getElementById("27.4").innerHTML = data.team12;

    document.getElementById("8.4").innerHTML = data.team13;
    document.getElementById("16.5").innerHTML = data.team13;
    document.getElementById("28.5").innerHTML = data.team13;

    document.getElementById("9.4").innerHTML = data.team14;
    document.getElementById("17.5").innerHTML = data.team14;
    document.getElementById("29.5").innerHTML = data.team14;

    document.getElementById("6.5").innerHTML = data.team15;
    document.getElementById("18.4").innerHTML = data.team15;
    document.getElementById("28.4").innerHTML = data.team15;

    document.getElementById("7.5").innerHTML = data.team16;
    document.getElementById("19.4").innerHTML = data.team16;
    document.getElementById("29.4").innerHTML = data.team16;

    document.getElementById("8.5").innerHTML = data.team17;
    document.getElementById("18.5").innerHTML = data.team17;
    document.getElementById("26.5").innerHTML = data.team17;

    document.getElementById("9.5").innerHTML = data.team18;
    document.getElementById("19.5").innerHTML = data.team18;
    document.getElementById("27.5").innerHTML = data.team18;
  }

  function table() {
    for (let pouleNummer = 1; pouleNummer <= 4; pouleNummer++) {
      let teamNumber = 2 - (pouleNummer % 2);
      for (let I = 2; I <= 5; I++) {
        document.getElementById(pouleNummer + "." + I + ".team").innerHTML = data["team" + (teamNumber + (Math.floor((pouleNummer * 4) / 10) * 10))];
        teamNumber += 4;
        I++;
        document.getElementById(pouleNummer + "." + I + ".team").innerHTML = data["team" + (teamNumber + (Math.floor((pouleNummer * 4) / 10) * 10))];
        teamNumber -= 2;
      }
    }
  }

  function doelsaldo() {
    for (let pouleNummer = 1; pouleNummer <= 4; pouleNummer++) {
      for (let i = 2; i <= 5; i++) {
        document.getElementById(pouleNummer + "." + i + ".doelsaldo").innerHTML = Number(document.getElementById(pouleNummer + "." + i + ".doelpunten").innerHTML) - Number(document.getElementById(pouleNummer + "." + i + ".doelpuntenTegen").innerHTML);
      }
    }
  }

  function doelpunten() {
    for (let pouleNummer = 1; pouleNummer <= 4; pouleNummer++) {
      for (let b = 2; b <= 5; b++) {
        let doelpunten = 0;
        let team = document.getElementById(pouleNummer + "." + b + ".team").innerHTML;
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
        document.getElementById(pouleNummer + "." + b + ".doelpunten").innerHTML = doelpunten;
      }
    }
  }

  function doelpuntenTegen() {
    for (let pouleNummer = 1; pouleNummer <= 4; pouleNummer++) {
      for (let b = 2; b <= 5; b++) {
        let doelpunten = 0;
        let team = document.getElementById(pouleNummer + "." + b + ".team").innerHTML;
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
        document.getElementById(pouleNummer + "." + b + ".doelpuntenTegen").innerHTML = doelpunten;
      }
    }
  }

  function punten() {
    for (let pouleNummer = 1; pouleNummer <= 4; pouleNummer++) {
      for (let b = 2; b <= 5; b++) {
        let punten = 0;
        let team = document.getElementById(pouleNummer + "." + b + ".team").innerHTML;
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
        document.getElementById(pouleNummer + "." + b + ".punten").innerHTML = punten;
      }
    }
  }

  function getGoals(id) {
    let documentGoals = document.getElementById(id).innerHTML;
    let goalsArray = documentGoals.split("");
    let index;
    if (goalsArray.includes("(")) {
      index = goalsArray.findIndex(function (value) {
        return value == "("
      });
      for (let i = 0; i <= index; i++) {
        goalsArray.shift();
      }
      goalsArray.pop();
      return Number(goalsArray.join(""));
    } else {
      return Number(documentGoals);
    }
  }

  function winnaars() {
    let pouleNummer = 1;
    let getal = 30;
    for (let i = 31; i <= 39; i++) {
      if (i === 35) {
        getal = 35;
        pouleNummer = 2;
      } else {
        let id = i - getal;
        if (getGoals(i + ".6") > getGoals(i + ".7")) {
          document.getElementById(pouleNummer + ".score." + id).innerHTML = document.getElementById(i + ".4").innerHTML;
          id = id + 1;
          document.getElementById(pouleNummer + ".score." + id).innerHTML = document.getElementById(i + ".5").innerHTML;
        } else {
          document.getElementById(pouleNummer + ".score." + id).innerHTML = document.getElementById(i + ".5").innerHTML;
          id = id + 1;
          document.getElementById(pouleNummer + ".score." + id).innerHTML = document.getElementById(i + ".4").innerHTML;
        }
        getal--;
      }
    }
  }


  function finaleTeams() {
    let alreadyCounted = {
      1: [],
      2: [],
      3: [],
      4: []
    };
    for (let plaats = 0; plaats < 4; plaats++) {
      for (let pouleNummer = 1; pouleNummer <= 4; pouleNummer++) {
        let maxArray = [];
        for (let i = 2; i < 6; i++) {
          if (!alreadyCounted[pouleNummer].includes(i)) {
            maxArray.push(
              Number(
                document.getElementById(pouleNummer + "." + i + ".punten").innerHTML
              )
            );
          }
        }
        let max = Math.max(...maxArray);
        let finalDuel = [];
        for (let i = 2; i < 6; i++) {
          if (!alreadyCounted[pouleNummer].includes(i)) {
            if (
              Number(
                document.getElementById(pouleNummer + "." + i + ".punten").innerHTML
              ) == max
            ) {
              finalDuel.push(i);
            }
          }
        }

        if (finalDuel.length > 1) {
          //gelijke punten
          maxArray = [];
          for (let i = 0; i < finalDuel.length; i++) {
            maxArray.push(
              Number(
                document.getElementById(
                  pouleNummer + "." + finalDuel[i] + ".doelsaldo"
                ).innerHTML
              )
            );
          }
          max = Math.max(...maxArray);
          finalDuelDoelpunten = [];
          for (let i = 0; i < finalDuel.length; i++) {
            if (
              Number(
                document.getElementById(
                  pouleNummer + "." + finalDuel[i] + ".doelsaldo"
                ).innerHTML
              ) == max
            ) {
              finalDuelDoelpunten.push(finalDuel[i]);
            }
          }
          finalDuel = finalDuelDoelpunten;
          if (finalDuel.length > 1) {
            //gelijk doelsaldo
            maxArray = [];
            for (let i = 0; i < finalDuel.length; i++) {
              maxArray.push(
                Number(
                  document.getElementById(
                    pouleNummer + "." + finalDuel[i] + ".doelpunten"
                  ).innerHTML
                )
              );
            }
            let max = Math.max(...maxArray);
            finalDuelDoelpunten = [];
            for (let i = 0; i < finalDuel.length; i++) {
              if (
                Number(
                  document.getElementById(
                    pouleNummer + "." + finalDuel[i] + ".doelpunten"
                  ).innerHTML
                ) == max
              ) {
                finalDuelDoelpunten.push(finalDuel[i]);
              }
            }
            finalDuel = finalDuelDoelpunten;
            if (finalDuel.length > 1) {
              //gelijke doelpunten
              alert("Er zijn " + finalDuel.length + " gelijke ploegen:\n" + finalDuel + "In poule: " + pouleNummer);
            }
          }
        }
        document.getElementById(((31 + Math.floor((pouleNummer * 4) / 10) * 5) + plaats) +
          "." +
          (5 - (pouleNummer % 2))
        ).innerHTML = document.getElementById(
          pouleNummer + "." + finalDuel[0] + ".team"
        ).innerHTML;
        alreadyCounted[pouleNummer].push(finalDuel[0]);
      }
    }
  }
});