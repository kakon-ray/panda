const hTwo = document.getElementsByTagName("h2");

for (let h2 of hTwo) {
  h2.setAttribute("id", "color");

  h2.style.color = "red";
}

var divs = document.querySelectorAll(".card"),
  i;

for (i = 0; i < divs.length; ++i) {
  divs[i].style.borderRadius = "30px";
}

document.getElementById("shoes").style.backgroundColor = "Tomato";

// Click Button and Delete this button section
var els = document.getElementsByClassName("btn");

for (var i = 0; i < els.length; i++) {
  els[i].addEventListener("click", function () {
    this.parentNode.parentNode.remove();
  });
}

// Email Button Desabled and email type to enable

const email = document.getElementById("email");
const btn = document.getElementById("submit");

email.addEventListener("keyup", (e) => {
  if (e.target.value == "email") {
    btn.classList.remove("disabled");
    console.log(e.target.value);
  }
});

// hover img change

const img1 = document.getElementById("show");
const img2 = document.getElementById("hidden");

img1.addEventListener("mouseenter", () => {
  img1.style.display = "none";
  img2.style.display = "block";
});
img1.addEventListener("mouseout", () => {
  img1.style.display = "block";
  img2.style.display = "none";
});

const doubleClick = document.getElementById("subscribe");
doubleClick.addEventListener("dblclick", () => {
  doubleClick.style.backgroundColor = "#E6E6FA";
});
