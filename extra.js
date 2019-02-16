function u9PouleAFinale() {
    var finalTeamsPuntenU9 = [];
    var finalTeamsDoelsaldoU9 = [];
    var finalTeamsDoelpuntenU9 = [];
    var u9FinaleTeam = "";
    var maxU9;
    var u9FinaleTeamsArray = [];
    if (document.getElementById("29.7").innerHTML !== "") {
        if (u9FinaleTeam === "") {
            maxU9 = Math.max(Number(document.getElementById("3.3.punten").innerHTML), Number(document.getElementById("3.2.punten").innerHTML), Number(document.getElementById("3.3.punten").innerHTML), Number(document.getElementById("3.3.punten").innerHTML));
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
        U9PouleBu9FinaleTeams.push[u9FinaleTeam];
    }

    //KleineFinale
    var u9KleineFinaleTeam = "";
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
    var u9Plaatsen1Team = "";
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
    U9PouleBu9FinaleTeams.push[u9Plaatsen1Team];

    //Plaatsen2
    var u9plaatsen1Team = "";
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
    U9PouleBu9FinaleTeams.push[u9plaatsen1Team];
}

