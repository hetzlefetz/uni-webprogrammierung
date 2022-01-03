{
  ("use strict");
  const images = ["./i1.jpeg", "./i2.jpeg", "./i3.jpeg", "./i4.jpeg"];
  const getRandomImageUrl = () =>
    images[Math.floor(Math.random() * images.length)];

  const checkPw = () => {
    const pw = document.getElementById("pw").value;
    if (!pw) {
      addTextNode("Passwort war leer!");
      return false;
    }
    if (pw !== "asdf") {
      addTextNode("Passwort war nicht asdf");
      return false;
    }
    addTextNode("Passwort war gültig");
    return true;
  };
  const addImageNode = () => {
    const element = document.createElement("img");
    element.src = getRandomImageUrl();
    document.body.appendChild(element);
  };
  const addTextNode = (text) => {
    const element = document.createElement("p");
    element.innerText = text;
    document.body.appendChild(element);
  };
  window.addEventListener("load", (ev) => {
    document.getElementById("btn-cancel").addEventListener("click", (event) => {
      event.preventDefault();
      document.body.style.backgroundColor = "red";
    });
    document.querySelector("form").addEventListener("submit", (event) => {
      event.preventDefault();
      document.body.style.backgroundColor = "green";
      if (checkPw()) {
        addImageNode();
      }
    });
  });
}
