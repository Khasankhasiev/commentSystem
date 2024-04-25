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
        let closest = target
          .closest(".section__comment-counter")
          .querySelector(".section__comment-like");
        let value = parseInt(closest.innerText);
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

// <!DOCTYPE html>
// <html lang="en">
// <head>
// <meta charset="UTF-8">
// <meta name="viewport" content="width=device-width, initial-scale=1.0">
// <title>Счетчик лайков</title>
// <style>
//     #counter {
//         font-size: 24px;
//     }
//     .positive {
//         color: green;
//     }
//     .neutral {
//         color: grey;
//     }
//     .negative {
//         color: red;
//     }
// </style>
// </head>
// <body>
//     <div id="counter" class="neutral">0</div>
//     <button onclick="increment()">+</button>
//     <button onclick="decrement()">-</button>

//     <script>
//         let count = 0;
//         const counterElement = document.getElementById('counter');

//         function updateCounter() {
//             counterElement.textContent = count;
//             if (count > 0) {
//                 counterElement.className = 'positive';
//             } else if (count < 0) {
//                 counterElement.className = 'negative';
//             } else {
//                 counterElement.className = 'neutral';
//             }
//         }

//         function increment() {
//             count++;
//             updateCounter();
//         }

//         function decrement() {
//             if (count > 0 || count === 0) {
//                 count--;
//                 updateCounter();
//             }
//         }
//     </script>
// </body>
// </html>
