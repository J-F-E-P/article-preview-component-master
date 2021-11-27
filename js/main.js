const btnRedes = document.getElementById("btnRedes");
btnRedes.addEventListener("click", (e) => {
  if (e.target.classList.contains("card__btnRedes")) {
    e.target.classList.toggle("card__btnRedes--show");
    e.target.firstElementChild.lastElementChild.classList.toggle(
      "card__iconoShareRedes--show"
    );
    e.target.nextElementSibling.classList.toggle(
      "card__contenRedes--show"
    );
  }
});
