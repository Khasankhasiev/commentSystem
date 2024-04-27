// functionality for comment input height

const tx = document.getElementsByTagName("textarea");
const textarea = document.querySelector("#textarea");
const simbols = document.querySelector(".simbols");
const btn = document.querySelector(".section__form-button");

textarea.addEventListener("input", () => {
  simbols.innerHTML = ` ${textarea.value.length}/1000`;

  if (textarea.value.length == 0) {
    simbols.innerHTML = ` Макс. симовлов 1000 `;
    btn.setAttribute("disabled", "");
    simbols.style.color = "rgba(0, 0, 0, 0.4)";
  } else if (1000 > textarea.value.length > 0) {
    btn.removeAttribute("disabled");
    simbols.style.color = "rgba(0, 0, 0, 0.4)";
  } else if (textarea.value.length > 1000) {
    btn.setAttribute("disabled", "");
    simbols.style.color = "red";
  }
});

for (let i = 0; i < tx.length; i++) {
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = "61px";
  this.style.height = this.scrollHeight + "px";
}

// functionality for likes and dislikes

const counters = document.querySelectorAll(".section__comment-counter");
let value = 0;

if (counters) {
  counters.forEach((conuter) => {
    conuter.addEventListener("click", (e) => {
      const target = e.target;

      if (target.closest(".section__comment-button")) {
        let closest = target
          .closest(".section__comment-counter")
          .querySelector(".section__comment-like");

        if (target.classList.contains("plus")) {
          value++;
        } else if (target.classList.contains("minus")) {
          --value;
        }

        if (value > 0) {
          closest.classList.add("plus");
        } else if (value === 0) {
          closest.classList.remove("plus");
          closest.classList.remove("minus");
        } else if (value < 0) {
          closest.classList.add("minus");
        }
        let abs = Math.abs(value);

        closest.innerText = abs;
      }
    });
  });
}

// functionality for favorite btn

const favorite = document.querySelectorAll(".section__comment-favorite");
console.log(favorite);

favorite.forEach((element) => {
  element.addEventListener("click", () => {
    console.log(element);
    if (!element.classList.contains("active-favorite")) {
      element.innerHTML = `
    <img src='./image/favorite2.svg'>
    <div class='favorite'>В избранном</div>
    `;
      element.classList.add("active-favorite");
    } else if (element.classList.contains("active-favorite")) {
      element.innerHTML = `
      <img src='./image/favorite3.png'>
      <div class='favorite'>В избранное</div>
      `;
      element.classList.remove("active-favorite");
    }
  });
});
// select sort

const selectSingle = document.querySelector(".__select");
const selectSingle_title = selectSingle.querySelector(".__select__title");
const selectSingle_labels = selectSingle.querySelectorAll(".__select__label");

// Toggle menu
selectSingle_title.addEventListener("click", () => {
  if ("active" === selectSingle.getAttribute("data-state")) {
    selectSingle.setAttribute("data-state", "");
  } else {
    selectSingle.setAttribute("data-state", "active");
  }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener("click", (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute("data-state", "");
  });
}

// Reset title
const reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
  selectSingle_title.textContent =
    selectSingle_title.getAttribute("data-default");
});
