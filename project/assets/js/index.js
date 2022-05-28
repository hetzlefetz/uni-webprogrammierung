{
  ("use strict");
  window.addEventListener("load", (ev) => {
    document.getElementById("btn-menu").addEventListener("click", menuClick);
    document.getElementById("btn-reset").addEventListener("click", resetClick);
    document.getElementById("btn-send").addEventListener("click", sendClick);
  });
  const sendClick = (event) => {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var comment = document.getElementById("comment").value;

    var title = document.createElement("h4");
    title.textContent = `${name} schrieb am ${new Date().toDateString()}:`;
    title.classList.add("commentTitle");
    var commentText = document.createElement("p");
    commentText.classList.add("commentText");
    commentText.textContent = `${comment}`;
    var div = document.createElement("div");
    div.id = "commentContent";
    div.appendChild(title);
    div.appendChild(commentText);
    document.getElementById("commentForm").remove();
    document.getElementById("comments").appendChild(div);
  };

  const resetClick = () => {
    var x = document.getElementById("commentForm");
    x.reset();
  };
  const menuClick = () => {
    var x = document.getElementById("menuContent");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  };
}
