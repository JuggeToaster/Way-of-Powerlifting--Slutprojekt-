function myFunction() {
  var x = document.getElementById("password_input");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

var click = 0;

function badgeClick() {
  click += 1;
  document.getElementById("counter").innerHTML = click;
}
