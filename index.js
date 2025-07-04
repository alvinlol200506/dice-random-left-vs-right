function startRandom (){
    var firstDice = Math.floor(Math.random() * 6) + 1;
    var secondDice = Math.floor(Math.random() * 6) + 1;
    console.log(firstDice);
    console.log(secondDice);

    if (firstDice === 1){
        document.querySelector(".firstDice").setAttribute("src", "./public/dice-six-faces-one.png");
    } else if (firstDice === 2){
        document.querySelector(".firstDice").setAttribute("src", "./public/dice-six-faces-two.png");
    } else if (firstDice === 3){
        document.querySelector(".firstDice").setAttribute("src", "./public/dice-six-faces-three.png");
    } else if (firstDice === 4){
        document.querySelector(".firstDice").setAttribute("src", "./public/dice-six-faces-four.png");
    } else if (firstDice === 5){
        document.querySelector(".firstDice").setAttribute("src", "./public/dice-six-faces-five.png");
    } else if (firstDice === 6){
        document.querySelector(".firstDice").setAttribute("src", "./public/dice-six-faces-six.png");
    } else {
        alert("Yo Vin angkanya keluar dari 1-6!")
    }

    if (secondDice === 1){
        document.querySelector(".secondDice").setAttribute("src", "./public/dice-six-faces-one.png");
    } else if (secondDice === 2){
        document.querySelector(".secondDice").setAttribute("src", "./public/dice-six-faces-two.png");
    } else if (secondDice === 3){
        document.querySelector(".secondDice").setAttribute("src", "./public/dice-six-faces-three.png");
    } else if (secondDice === 4){
        document.querySelector(".secondDice").setAttribute("src", "./public/dice-six-faces-four.png");
    } else if (secondDice === 5){
        document.querySelector(".secondDice").setAttribute("src", "./public/dice-six-faces-five.png");
    } else if (secondDice === 6){
        document.querySelector(".secondDice").setAttribute("src", "./public/dice-six-faces-six.png");
    } else {
        alert("Yo Vin angkanya keluar dari 1-6!")
    }

    if (firstDice > secondDice){
        document.querySelector("h1").innerHTML = "<em>P1 menang!!</em>";
    } else if (secondDice > firstDice) {
        document.querySelector("h1").innerHTML = "<em>P2 menang!!</em>";
    } else if (firstDice === secondDice) {
        document.querySelector("h1").innerHTML = "DRAW";
    }
}

