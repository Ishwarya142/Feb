// Wait until page fully loads
document.addEventListener("DOMContentLoaded", function () {

  /* 🎶 Background Love Song */
  const loveSong = document.getElementById("loveSong");

  if (loveSong) {
    document.body.addEventListener("click", function () {
      loveSong.volume = 0.6; // soft romantic volume
      loveSong.play().catch(() => {
        // autoplay restriction safe
      });
    }, { once: true });
  }

  /* 💖 Typing Effect */
  const text = "Alex ❤️ Ishu";
  let index = 0;
  const typedText = document.getElementById("typedText");

  function typeEffect() {
    if (typedText && index < text.length) {
      typedText.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeEffect, 150);
    }
  }
  typeEffect();

  /* 💕 Floating Hearts */
  function createHearts() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 12 + "px";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 6000);
  }

  setInterval(createHearts, 400);

});


/* 💌 Page Navigation */
function nextPage() {
  hide("page1");
  show("page2");
}

function nextPage2() {
  hide("page2");
  show("page3");
}

function finalPage() {
  hide("page3");
  show("page4");
}

function accepted() {
  hide("page4");
  show("acceptPage");
}

function rejected() {
  hide("page4");
  show("rejectPage");
}

function backToQuestion() {
  hide("rejectPage");
  show("page4");
}

/* 🔧 Helper Functions */
function hide(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add("hidden");
}

function show(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove("hidden");
}
