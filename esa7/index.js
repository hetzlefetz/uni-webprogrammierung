{
  ("use strict");

  const doStuffToField = (what = "input", fn) => {
    const inputs = document.forms["f1"].getElementsByTagName(what);
    for (let i = 0; i < inputs.length; i++) {
      fn(inputs[i]);
    }
  };
  const printField = (x) =>
    console.log(`name: ${x.name}, type: ${x.type}, value: ${x.value}`);

  const printInputs = () => {
    doStuffToField("input", printField);
    doStuffToField("select", printField);
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

  window.onload = (ev) => {
    document.getElementById("btn-cancel").addEventListener("click", (event) => {
      event.preventDefault();
      alert("Abbruch !");
    });
    document.querySelector("form").addEventListener("submit", (event) => {
      event.preventDefault();
      console.log("Form submission cancelled.");
      printInputs();
      checkPw();
    });
  };
}
