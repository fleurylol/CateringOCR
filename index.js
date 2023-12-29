function openModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "block";

  // Add an event listener to the document body to close the modal when clicking outside of it
  document.body.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal(modalId);
    }
  });
}

function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "none";

  // Remove the event listener when the modal is closed
  document.body.removeEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal(modalId);
    }
  });
}

let cutleryKit = false;
let cups = false;

function dryPack() {
  document.getElementById("kits").style.display = "none";
  document.getElementById("napkins").style.display = "none";
  document.getElementById("cups").style.display = "none";
  document.getElementById("result").style.display = "block";
  let userInput = document.getElementById("guestCount").value;
  let guestCount = parseInt(userInput, 10);
  document.getElementById("packCount").innerHTML = guestCount;
  let mintWipe = Math.floor(guestCount / 25) + (guestCount % 25 > 0 ? 1 : 0);
  document.getElementById("mintWipe").innerHTML = Math.floor(mintWipe);

  cutleryKit == true
    ? (document.getElementById("kits").style.display = "inline-flex")
    : (document.getElementById("napkins").style.display = "inline-flex");

  if (cups == true) {
    document.getElementById("cups").style.display = "inline-flex";
  }
}

function trayYes() {
  cutleryKit = !cutleryKit;
}

function gallonYes() {
  cups = !cups;
}
