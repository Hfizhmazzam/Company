/* --------------------------- Meeting 9 | CLick and Change Mini Text ------------------------- */
function changeText() {
  var replaceText = document.getElementsByClassName("mini-text");
  replaceText[0].innerHTML = "Scroll down";

  document.getElementById("icon-up").style.display = "none";
  document.getElementById("icon-down").style.display = "block";

  var iconUp = document.getElementsByClassName("icon-up")[0];

  iconUp.onclick = function () {
    var button = document.getElementsByClassName("icon-down");
    button.style.display = "block";
  };
}

/* --------------------------- Meeting 11 | Button Like Dislike ------------------------- */
var btnLike = document.querySelector("#green");
var btnDislike = document.querySelector("#red");

if (btnLike) {
  btnLike.onclick = likeColor;
}
if (btnDislike) {
  btnDislike.onclick = dislikeColor;
}

function likeColor() {
  if (btnDislike.classList.contains("red")) {
    btnDislike.classList.remove("red");
  }

  this.classList.toggle("green");
}

function dislikeColor() {
  if (btnLike.classList.contains("green")) {
    btnLike.classList.remove("green");
  }

  this.classList.toggle("red");
}

/* --------------------------- Meeting 12 | Change Jumbotron Image ------------------------- */
function changeImage(element) {
  element.setAttribute(
    "src",
    "https://i0.wp.com/timedooracademy.com/wp-content/uploads/2022/10/Kelapa-Gading.jpeg"
  );
  // element.setAttribute("height", "300")
  // element.setAttribute("class", "jumbotron-img")
}

function changeImageBack(element) {
  element.setAttribute(
    "src",
    "https://i0.wp.com/timedoor.net/wp-content/uploads/2021/02/why-us-2-min.jpg?fit=597%2C372&ssl=1"
  );
  // element.setAttribute("height", "300")
}

/* --------------------------- Challenge of Meeting 12 | Change Jumbotron Title ------------------------- */
function changeTitle(element) {
  element.innerHTML = "Create Simple Game and Website";
}

function changeTitleBack(element) {
  element.innerHTML = "Get Programming Tips Here!";
}

/* --------------------------- Meeting 14 | Closeable Item ------------------------- */
//add close button on each list
var myNodeList = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodeList.length; i++) {
  var span = document.createElement("span");
  span.innerHTML = "x";
  myNodeList[i].appendChild(span).setAttribute("class", "close");
}

//close list
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

//add new list
function newElement() {
  var li = document.createElement("li");

  var inputValue = document.getElementById("myInput").value;
  // var t = document.createTextNode(inputValue);
  // console.log(t)

  if (inputValue === "" || inputValue === " ") {
    alert("Data tidak boleh kosong!");
  } else {
    document
      .getElementById("myUL")
      .appendChild(li)
      .setAttribute("class", "search-tags-item");

    li.innerHTML = inputValue;
  }

  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  span.innerHTML = "x";
  li.appendChild(span).setAttribute("class", "close");

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

var btnSubmit = document.querySelector("submit");
var modal = document.querySelector(".modal-container");
if (btnSubmit) {
  btnSubmit.addEventListener("click", function () {
    modal.classList.add("show");
    const next = document.querySelector(".next");
    next.setAttribute(
      "value",
      "https://lovelymondays.github.io/blog-project-T10A/contact.html"
    );
  });
}

var slides = document.querySelectorAll(".slide");
var buttons = document.querySelectorAll(".slider-btn");
let currentSlide = 1;
//Manual images slider
var manualNav = function (manual) {
  slides.forEach(function (slide) {
    slide.classList.remove("active");
  });
};
buttons.forEach((btn) => {
  btn.classList.remove("active");
});
slides[manual].classList.add("active");
buttons[manual].classList.add("active");
buttons.forEach(function (btn, i) {
  btn.addEventListener("click", function () {
    manualNav(i);
    currentSlide = i;
  });
});

var repeat = function (activeClass) {
  let active = document.getElementsByClassName("active");
  let i = 1;
  var repeater = function () {
    setTimeout(function () {
      [...active].forEach(function (activeSlide) {
        activeSlide.classList.remove("active");
      });
      slides[i].classList.add("active");
      buttons[i].classList.add("active");
      i++;
      if (slides.length == i) {
        i = 0;
      }
      if (i >= slides.length) {
        return;
      }
      repeater();
    }, 5000);
  };
  repeater();
};
repeat();

var btnSubmit = document.querySelector(".submit");
var modal = document.querySelector(".modal-container");
if (btnSubmit) {
  btnSubmit.addEventListener("click", function () {
    modal.classList.add("show");
    const next = document.querySelector(".next");
    next.setAttribute("value", "https://hafizproject.netlify.app/contact");
  });
}
