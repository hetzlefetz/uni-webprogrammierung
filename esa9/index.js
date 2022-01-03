{
  ("use strict");

  const doStuffToField = (what = "input", fn) => {
    const inputs = document.forms["f1"].getElementsByTagName(what);
    for (let i = 0; i < inputs.length; i++) {
      fn(inputs[i]);
    }
  };
  const printField = (x) => console.log(`name: ${x.name}, value: ${x.value}`);
  const printFieldIfNotEmpty = (x) => x.value && printField(x);

  const printInputs = (skipEmpty = false) => {
    doStuffToField("input", skipEmpty ? printFieldIfNotEmpty : printField);
    doStuffToField("select", skipEmpty ? printFieldIfNotEmpty : printField);
  };

  const checkPw = () => {
    const pw = document.getElementById("pw").value;
    if (!pw) {
      alert("Passwort war leer!");
      return;
    }
    if (pw !== "asdf") {
      alert("Passwort war nicht asdf");
      return;
    }
    alert("Passwort war gültig");
  };

  window.addEventListener("load", (ev) => {
    document.getElementById("btn-cancel").addEventListener("click", (event) => {
      event.preventDefault();
      alert("Abbruch !");
    });
    document.querySelector("form").addEventListener("submit", (event) => {
      event.preventDefault();
      console.log("Form submission cancelled.");
      console.log("All inputs:");
      printInputs();
      console.log("Inputs with value:");
      printInputs(true);
    });
  });
}
