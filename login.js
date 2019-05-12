var reg_no = document.getElementById("reg");

var output = document.getElementById("out");

function isValid() {
  var r = false;
  var regno = /^\d{8}[I][T]\d{3}$/;
  if (reg_no.value.match(regno)) {
    r = true;
    window.location = "home.html";

  } else {
    output.innerHTML = "Sorry !! Invalid Registration Id";

  }
}
