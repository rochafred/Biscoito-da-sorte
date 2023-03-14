let card1 = document.querySelector(".card1");
let card2 = document.querySelector(".card2");

let randomPhraser

randomPhraser = Math.round(Math.random() * 7);

switch (randomPhraser ) {
  case 1:
    document.querySelector(".card2 p").innerText =
    "Você terá um dia maravilhoso!";
    break;

  case 2:
    document.querySelector(".phrase p").innerText =
    "A sorte está ao seu lado.";
    break;

  case 3:
    document.querySelector(".phrase p").innerText =
    "Um presente inesperado está a caminho.";
    break;

  case 4:
    document.querySelector(".phrase p").innerText =
    "Siga seus sonhos e terá sucesso.";
    break;

  case 5:
    document.querySelector(".phrase p").innerText =
    "Uma grande surpresa está chegando para você.";
    break;

  case 7:
    document.querySelector(".phrase p").innerText =
      "Aproveite a vida ao maximo!";
    break;
}

function newCard2(event) {
  event.preventDefault();

  card1.classList.add("disappear");
  card2.classList.remove("disappear");

 
  console.log(randomPhraser);
}

const reset = () => {
  card2.classList.add("disappear");
  card1.classList.remove("disappear");

  window.location.reload(true)

  randomPhraser = Math.round(Math.random() * 6);
};
