const form = document.getElementById("formKirim");
const alertBox = document.getElementById("alert");

form.addEventListener("submit", function(e) {
  e.preventDefault(); 

  alertBox.classList.add("show");

  setTimeout(() => {
    alertBox.classList.remove("show");
  }, 5000);
});