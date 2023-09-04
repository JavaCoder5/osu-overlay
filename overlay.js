var ws = new WebSocket("ws://localhost:24050/ws");

ws.onmessage = function (evt) {
    var received_msg = evt.data;
    const parsedJson = JSON.parse(received_msg);

    var ur = Math.round(parsedJson.gameplay.hits.unstableRate);
    var pp = parsedJson.gameplay.pp.current;
    var h100 = parsedJson.gameplay.hits[100];
    var h50 = parsedJson.gameplay.hits[50]
    var h0 = parsedJson.gameplay.hits[0]
    var silver = (parsedJson.menu.mods.str.includes("HD") || parsedJson.menu.mods.str.includes("FL") ? true : false);
    var grade = parsedJson.gameplay.hits.grade.current;
    var menu = parsedJson.menu.state;

    document.getElementById("unstableRate").textContent = ur;
    document.getElementById("ppcounter").textContent = pp;
    document.getElementById("h100").textContent = h100;
    document.getElementById("h50").textContent = h50;
    document.getElementById("h0").textContent = h0;
    if (menu !== 2) {
        if (silver) {
            document.getElementById("grade").style.color = "silver";
            document.getElementById("grade").textContent = "X";
        } else {
            document.getElementById("grade").style.color = "gold";
            document.getElementById("grade").textContent = "X";
        }
    } else {
        if (silver) {
            if (!grade) {
                document.getElementById("grade").style.color = "silver";
                document.getElementById("grade").textContent = "X";
            } else {
                if (grade == "SS") {
                    document.getElementById("grade").style.color = "silver";
                    document.getElementById("grade").textContent = "X";
                } else {
                    if (grade == "S") {
                        document.getElementById("grade").style.color = "silver";
                        document.getElementById("grade").textContent = "S";
                    } else {
                        if (grade == "A") {
                            document.getElementById("grade").textContent = grade;
                            document.getElementById("grade").style.color = "#bdedc5";
                        } else {
                            if (grade == "B") {
                                document.getElementById("grade").textContent = grade;
                                document.getElementById("grade").style.color = "#bdd5ed";
                            } else {
                                if (grade == "C") {
                                    document.getElementById("grade").textContent = grade;
                                    document.getElementById("grade").style.color = "#ddbded";
                                } else {
                                    if (grade == "D") {
                                        document.getElementById("grade").textContent = grade;
                                        document.getElementById("grade").style.color = "#edbdbd";
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } else {
            if (!grade) {
                document.getElementById("grade").style.color = "gold";
                document.getElementById("grade").textContent = "X";
            } else {
                if (grade == "SS") {
                    document.getElementById("grade").style.color = "gold";
                    document.getElementById("grade").textContent = "X";
                } else {
                    if (grade == "S") {
                        document.getElementById("grade").style.color = "gold";
                        document.getElementById("grade").textContent = "S";
                    } else {
                        if (grade == "A") {
                            document.getElementById("grade").textContent = grade;
                            document.getElementById("grade").style.color = "#bdedc5";
                        } else {
                            if (grade == "B") {
                                document.getElementById("grade").textContent = grade;
                                document.getElementById("grade").style.color = "#bdd5ed";
                            } else {
                                if (grade == "C") {
                                    document.getElementById("grade").textContent = grade;
                                    document.getElementById("grade").style.color = "#ddbded";
                                } else {
                                    if (grade == "D") {
                                        document.getElementById("grade").textContent = grade;
                                        document.getElementById("grade").style.color = "#edbdbd";
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

