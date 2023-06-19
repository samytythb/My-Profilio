document.getElementById("linkedin").addEventListener("click", function () {
  window.location.href = " https://www.linkedin.com/in/ducle2001";
});
document.getElementById("gmail").addEventListener("click", function () {
  var emailAddress = "leminhduc20082001@gmail.com";

  window.location.href = "mailto:" + emailAddress;
});

document.getElementById("github").addEventListener("click", function () {
  window.location.href = " https://github.com/samytythb";
});

document.getElementById("facebook").addEventListener("click", function () {
  window.location.href =
    " https://www.facebook.com/profile.php?id=100009180107219&mibextid=ZbWKwL";
});
document.getElementById("phone").addEventListener("click", function () {
  var phoneNumber = "+84778569006";
  window.location.href = "tel:" + phoneNumber;
});
