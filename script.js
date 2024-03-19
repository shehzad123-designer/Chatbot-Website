const openChatBtn = document.getElementById("openChat");
const chatPanel = document.querySelector(".chat");


openChatBtn.addEventListener("click", () => {
    chatPanel.style.display = chatPanel.style.display === "none" ? "block" : "none";


});


document.addEventListener("DOMContentLoaded", function () {
    const openChatBtn = document.getElementById("openChat");
    const chatPanel = document.querySelector(".chat");
    const closeBtn = document.querySelector(".close-btn");

    openChatBtn.addEventListener("click", () => {
    chatPanel.style.display ="show";
    });

    closeBtn.addEventListener("click", () => {
        chatPanel.style.display = "none";
    });
});


$(document).ready(function() {
    $('#demo2').owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        600: {
          items: 1,
          nav: false
        },
        1000: {
          items: 2,
          nav: true,
          loop: false,
          margin: 20
        }
      }
    })
  })