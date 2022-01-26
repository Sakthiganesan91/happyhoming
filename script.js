"use strict";
const topMenu = document.querySelector("#topMenu");
topMenu.addEventListener("click", function () {
  document.querySelector(".side-menu").style.display = "block";
});
const sideButton = document.querySelector("#side-menu-button");

sideButton.addEventListener("click", function () {
  document.querySelector(".side-menu").style.display = "none";
});

document.querySelector(".about").addEventListener("click", function () {
  document.querySelector(".Aboutus").scrollIntoView({ behavior: "smooth" });
});
document.querySelector(".home").addEventListener("click", function () {
  document
    .querySelector(".main-section-one")
    .scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".project").addEventListener("click", function () {
  document.querySelector(".Project-div").scrollIntoView({ behavior: "smooth" });
});
document.querySelector(".portfolio").addEventListener("click", function () {
  document
    .querySelector(".property-container")
    .scrollIntoView({ behavior: "smooth" });
});
document.querySelector(".contact").addEventListener("click", function () {
  document
    .querySelector(".contact-container")
    .scrollIntoView({ behavior: "smooth" });
});

//image-sliding

var i = 1;
document.querySelector("#button-right").addEventListener("click", function () {
  console.log(".slide-" + (i + 1));
  if (i == 0) {
    document.querySelector(".slide-4").style.boxShadow = "5px 5px 5px black";
  } else {
    document.querySelector(`.slide-${i}`).style.boxShadow = "5px 5px 5px black";
  }
  document.querySelector(`.slide-${i + 1}`).style.boxShadow =
    "0 0 25px rgb(70,140,233)";

  if (i == 3) {
    i = 0;
  } else i++;
});

document.querySelector(".img-button-0").addEventListener("click", function () {
  document.querySelector("#img-1").src = "images/sofaRoom.jpg";
  document.querySelector("#img-0").src = "images/livingRoom.jpg";
  document.querySelector("#img-2").src = "images/kitchenImage.jpg";
});

document.querySelector(".img-button-1").addEventListener("click", function () {
  document.querySelector("#img-1").src = "images/kitchenImage.jpg";
  document.querySelector("#img-0").src = "images/sofaRoom.jpg";
  document.querySelector("#img-2").src = "images/livingRoom.jpg";
});

document.querySelector(".img-button-2").addEventListener("click", function () {
  document.querySelector("#img-1").src = "images/livingRoom.jpg";
  document.querySelector("#img-2").src = "images/kitchenImage.jpg";
  document.querySelector("#img-0").src = "images/sofaRoom.jpg";
});

//worker details

const Name = function (name, role) {
  document.querySelector("#staff-details").style.display = "block";
  document.querySelector("#name").textContent = `${name}`;
  document.querySelector("#role").textContent = `${role}`;
  setTimeout(function () {
    document.querySelector("#staff-details").style.display = "none";
  }, 5000);
};

document.querySelector("#man1").addEventListener("click", function () {
  Name("Jenifer", "Co-Worker");
});

document.querySelector("#man2").addEventListener("click", function () {
  Name("Watson", "Co-Worker");
});
document.querySelector("#man3").addEventListener("click", function () {
  Name("Mary", "Designer");
});
document.querySelector("#man4").addEventListener("click", function () {
  Name("Trent", "Designer");
});

document.querySelector("#man5").addEventListener("click", function () {
  Name("Peter", "Owner");
});

document.querySelector("#man6").addEventListener("click", function () {
  Name("Juliet", "Agent");
});

document.querySelector("#man9").addEventListener("click", function () {
  Name("Harry", "Designer");
});
document.querySelector("#man10").addEventListener("click", function () {
  Name("Meg", "Agent");
});
