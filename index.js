function openModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "block";

  // Add an event listener to the document body to close the modal when clicking outside of it
  document.body.addEventListener('click', function(event) {
    if (event.target === modal) {
      closeModal(modalId);
    }
  });
}

function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "none";

  // Remove the event listener when the modal is closed
  document.body.removeEventListener('click', function(event) {
    if (event.target === modal) {
      closeModal(modalId);
    }
  });
}