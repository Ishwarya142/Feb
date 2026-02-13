document.addEventListener("DOMContentLoaded", function () {

  const loveSong = document.getElementById("loveSong");

  function playMusic() {
    loveSong.volume = 0.6;
    loveSong.play().catch(function(error) {
      console.log("Autoplay blocked:", error);
    });
  }

  document.addEventListener("click", playMusic, { once: true });
  document.addEventListener("touchstart", playMusic, { once: true });

  const text = "Alex ❤️ Ishu";
  let index = 0;
  const typedText = document.getElementById("typedText");

  function typeEffect() {
    if (index < text.length) {
      typedText.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeEffect, 150);
    }
  }

  typeEffect();

  function createHearts() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    document.body.appendChild(heart);
    setTimeout(function () {
      heart.remove();
    }, 6000);
  }

  setInterval(createHearts, 300);

});

function nextPage() {
  document.getElementById("page1").classList.add("hidden");
  document.getElementById("page2").classList.remove("hidden");
}

function nextPage2() {
  document.getElementById("page2").classList.add("hidden");
  document.getElementById("page3").classList.remove("hidden");
}

function finalPage() {
  document.getElementById("page3").classList.add("hidden");
  document.getElementById("page4").classList.remove("hidden");
}

function accepted() {
  document.getElementById("page4").classList.add("hidden");
  document.getElementById("acceptPage").classList.remove("hidden");
}

function rejected() {
  document.getElementById("page4").classList.add("hidden");
  document.getElementById("rejectPage").classList.remove("hidden");
}

function backToQuestion() {
  document.getElementById("rejectPage").classList.add("hidden");
  document.getElementById("page4").classList.remove("hidden");
}
