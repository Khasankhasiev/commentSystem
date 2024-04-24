// functionality for comment input height

const tx = document.getElementsByTagName("textarea");
for (let i = 0; i < tx.length; i++) {
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = "61px";
  this.style.height = this.scrollHeight + "px";
}

// functionality for likes and dislikes

const counters = document.querySelectorAll(".section__comment-counter");

if (counters) {
  counters.forEach((conuter) => {
    conuter.addEventListener("click", (e) => {
      const target = e.target;

      if (target.closest(".section__comment-button")) {
        let value = parseInt(
          target
            .closest(".section__comment-counter")
            .querySelector(".section__comment-like").innerText
        );
        if (target.classList.contains("plus")) {
          value++;
        } else {
          --value;
        }

        if (value <= 0) {
          value++;
        }

        target
          .closest(".section__comment-counter")
          .querySelector(".section__comment-like").innerText = value;
      }
    });
  });
}
