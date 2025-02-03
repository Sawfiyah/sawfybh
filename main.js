const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/download(1).png") {
    myImage.setAttribute("src", "images/logo.png");
  } else {
    myImage.setAttribute("src", "images/download(1).png");
  }
});
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  let myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.innerHTML = "Mozilla is cool, " + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.innerHTML = "Mozilla is cool, " + storedName;
}

myButton.onclick = function () {
  setUserName();
};
