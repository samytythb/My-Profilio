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
var images = document.querySelectorAll(".full-screen-image");

// Gắn kết sự kiện "click" cho từng thẻ ảnh
images.forEach(function (image) {
  image.addEventListener("click", function () {
    // Lấy đường dẫn ảnh từ thẻ được nhấp
    var imageURL = this.src;

    // Hiển thị overlay và ảnh fullscreen
    var overlay = document.querySelector(".fullscreen-overlay");
    var fullscreenImage = overlay.querySelector(".fullscreen-image");
    overlay.style.display = "block";
    fullscreenImage.src = imageURL;

    // Gắn kết sự kiện "click" cho nút đóng
    var closeButton = overlay.querySelector(".close-button");
    closeButton.addEventListener("click", function () {
      // Đóng overlay và đặt lại đường dẫn ảnh về trống
      overlay.style.display = "none";
      fullscreenImage.src = "";
    });
  });
});
