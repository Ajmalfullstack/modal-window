"use strict";
// initials
// ------------------------------------------

const starting = function () {
  document.querySelector(".blur").classList.add("hidden");
  document.querySelector(".first").classList.add("hidden");
  document.querySelector(".second").classList.add("hidden");
  document.querySelector(".third").classList.add("hidden");
  document.querySelector(".dropDown").classList.add("hidden");
};
starting();

// Functionality
//OPEN MODAL 1
// ------------------------------------------

document.querySelector(".project").addEventListener("click", function () {
  if (!document.querySelector(".dropDown").classList.contains("hidden")) {
    document.querySelector(".dropDown").classList.add("hidden");
  } else {
    document.querySelector(".dropDown").classList.remove("hidden");
  }
});

document.querySelector(".daya").addEventListener("click", function () {
  document.querySelector(".blur").classList.remove("hidden");
  document.querySelector(".first").classList.remove("hidden");
});

document.querySelector(".biyu").addEventListener("click", function () {
  document.querySelector(".blur").classList.remove("hidden");
  document.querySelector(".second").classList.remove("hidden");
});

document.querySelector(".uku").addEventListener("click", function () {
  document.querySelector(".blur").classList.remove("hidden");
  document.querySelector(".third").classList.remove("hidden");
});
//CLOSE MODAL 1 BY USING X
// ------------------------------------------
document.querySelector(".one").addEventListener("click", function () {
  starting();
});
document.querySelector(".two").addEventListener("click", function () {
  starting();
});
document.querySelector(".three").addEventListener("click", function () {
  starting();
});
//CLOSE MODAL 1 BY CLICKING ANYWHERE OUTSIDE THE MODAL
// ------------------------------------------
document.querySelector(".blur").addEventListener("click", function () {
  starting();
});

//CLOSE MODAL 1 PRESSING THE ESCAPE BUTTON
// ------------------------------------------
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    starting();
  }
});
