const tombola = document.getElementById("tombola");
const btnEstraction = document.getElementById("estrazione");
const btnReset = document.getElementById("reset");
let estratto = document.querySelector("h3");
const numberEstract = [];

for (let i = 0; i < 90; i++) {
  const numberDiv = document.createElement("div");
  numberDiv.innerText = i + 1;
  tombola.appendChild(numberDiv);
}

btnEstraction.addEventListener("click", function estrazione() {
  //estrazione numero
  number = Math.floor(Math.random() * 90) + 1;

  //controllo numero estratto
  if(!controllo(number)) return;

  //array estrazione
  numberArray(number);
  console.log(numberEstract);

  //colorazione celle
  const celle = document.querySelectorAll("#tombola div");
  for (let i = 0; i < celle.length; i++) {
    if (celle[i].innerText == number) {
      celle[i].classList.add("estratto");
    }
  }

  //numero visualizzato a schermo
  visualNumber(number);
});

function visualNumber(e) {
  estratto.innerText = e;
}

function controllo(e) {
  for (let i = 0; i < numberEstract.length; i++) {
    if (e === numberEstract[i]) {
        return false;
    }else{
        return true;
    }
  }
}

function numberArray(n) {
  numberEstract.push(n);
}

/*
btnReset.addEventListener('click', function(){
    estrazione.reset();
});*/
