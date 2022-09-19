let btn = document.getElementById("btn");
let affichage = document.getElementById("affichage");

function calculer() {
  let taille = document.getElementById("taille").value;
  let poid = document.getElementById("poid").value;

  taille = taille / 100;
  let result = (poid / (taille * taille)).toFixed(2);
  console.log(result);
  if (result <= 25 && result >= 18.5) {
    affichage.textContent = "Ne craignez rien , vous êtes normal";
  } else if (result <= 30 && result >= 25) {
    console.log("Surpoids");
  } else if (result <= 35 && result >= 30) {
    affichage.textContent = "Attention , vous êtes en Obésité modérée";
  } else if (result <= 40 && result >= 35) {
    affichage.textContent =
      "Là , il faut vraiment voir un docteur , vous êtes en Obésité sévère";
  } else if (result > 40) {
    affichage.textContent =
      "Votre cas est dangereux , vous devriez suivre un programme alimentaire , vous êtes en Obésité morbide";
  }
  else
  affichage.textContent =
      "Votre cas est dangereux , vous devriez suivre un programme alimentaire , vous êtes maigre";
}

btn.addEventListener("click", calculer);

poid.addEventListener("keypress", function (event) {
    if (event.key == "Enter" ) {
        calculer(event);
    };
    
  });
